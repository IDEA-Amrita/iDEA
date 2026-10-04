import {
  lazy,
  Suspense,
  useEffect,
  useId,
  useRef,
  useState,
  type PropsWithChildren,
} from "react";
import type { Widget } from "@typeform/embed";
import { getTypeformUrl, USE_DUMMY_FORMS } from "../config/forms";
import classNames from "../utils/classNames";
import buttonStyles from "./Button.module.css";
import styles from "./TypeformButton.module.css";

const DummyForm = lazy(() => import("./DummyForm"));

interface TypeformButtonProps extends PropsWithChildren {
  formId: string;
  label: string;
  variant?: "large" | "compact";
  hidden?: Record<string, string>;
  onSubmit?: (payload: { formId: string; responseId: string }) => void;
}

export default function TypeformButton({
  children,
  formId,
  label,
  variant = "large",
  hidden,
  onSubmit,
}: TypeformButtonProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Loading form…");

  const onSubmitRef = useRef(onSubmit);
  useEffect(() => {
    onSubmitRef.current = onSubmit;
  }, [onSubmit]);

  useEffect(() => {
    if (!open) return;
    const currentDialog = dialog.current;
    if (!currentDialog) return;

    const handleDialogClick = (event: MouseEvent) => {
      if (event.target === currentDialog) {
        currentDialog.close();
      }
    };

    currentDialog.addEventListener("click", handleDialogClick);
    return () => {
      currentDialog.removeEventListener("click", handleDialogClick);
    };
  }, [open]);

  useEffect(() => {
    if (!open || USE_DUMMY_FORMS || !container.current) return;
    const target = container.current;
    let cancelled = false;
    let widget: Widget | undefined;
    const timer = window.setTimeout(() => {
      setStatus(
        "The form is taking longer than expected. You can open it directly using the link below.",
      );
    }, 10000);
    void import("../utils/loadTypeform")
      .then(({ createWidget }) => {
        if (cancelled) return;
        widget = createWidget(formId, {
          container: target,
          inlineOnMobile: true,
          autoFocus: false,
          iframeProps: { title: label },
          ...(hidden ? { hidden } : {}),
          onReady: () => {
            if (cancelled) return;
            window.clearTimeout(timer);
            setStatus(
              "Form ready. Use Tab to enter the form, or open it directly below.",
            );
          },
          onSubmit: (event) => {
            if (cancelled) return;
            setStatus("Thank you! Your response has been submitted.");
            onSubmitRef.current?.(event);
          },
          onDuplicateDetected: () => {
            if (cancelled) return;
            setStatus("You have already submitted this form.");
          },
          onClose: () => {
            if (cancelled) return;
            dialog.current?.close();
          },
        });
      })
      .catch(() => {
        window.clearTimeout(timer);
        if (!cancelled)
          setStatus(
            "The embedded form could not load. Please use the direct link below.",
          );
      });
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      widget?.unmount();
    };
  }, [open, formId, label, hidden]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-label={label}
        aria-haspopup="dialog"
        className={classNames(
          buttonStyles.button,
          buttonStyles.primary,
          styles.button,
          styles[variant],
        )}
        onClick={() => {
          setStatus(
            USE_DUMMY_FORMS
              ? "Please fill out the form below."
              : "Loading form…",
          );
          dialog.current?.showModal();
          setOpen(true);
        }}
      >
        {children}
      </button>
      <dialog
        ref={dialog}
        className={styles.dialog}
        data-lenis-prevent
        aria-labelledby={titleId}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus({ preventScroll: true });
        }}
      >
        <div className={styles.dialogHeader}>
          <h2 id={titleId}>{label}</h2>
          <button
            type="button"
            className={styles.close}
            aria-label={`Close ${label} form`}
            onClick={() => {
              dialog.current?.close();
            }}
          >
            Close
          </button>
        </div>
        {!USE_DUMMY_FORMS && <p role="status">{status}</p>}
        {!USE_DUMMY_FORMS && (
          <a
            href={getTypeformUrl(formId, hidden)}
            target="_blank"
            rel="noreferrer"
          >
            Open {label} form directly (new tab)
          </a>
        )}
        {open && !USE_DUMMY_FORMS && (
          <div ref={container} className={styles.embed} />
        )}
        {open && USE_DUMMY_FORMS && (
          <Suspense fallback={<p role="status">Loading form…</p>}>
            <DummyForm
              formId={formId}
              label={label}
              hidden={hidden}
              onSubmitSuccess={(payload) => {
                setStatus("Thank you! Your response has been submitted.");
                onSubmitRef.current?.(payload);
              }}
            />
          </Suspense>
        )}
      </dialog>
    </>
  );
}
