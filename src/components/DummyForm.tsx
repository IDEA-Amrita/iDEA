import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import { formIds } from "../config/forms";
import classNames from "../utils/classNames";
import buttonStyles from "./Button.module.css";
import styles from "./DummyForm.module.css";

interface DummyFormProps {
  formId: string;
  label: string;
  hidden?: Record<string, string> | undefined;
  onSubmitSuccess?:
    ((payload: { formId: string; responseId: string }) => void) | undefined;
}

interface FieldDef {
  id: string;
  label: string;
  type?: "text" | "email" | "url" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  value?: string;
  options?: { value: string; label: string }[];
}

export default function DummyForm({
  formId,
  label,
  hidden,
  onSubmitSuccess,
}: DummyFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isPropose =
    formId.includes("propose") ||
    formId === formIds.proposeProject ||
    label.toLowerCase().includes("propose");

  const isJoinProject =
    formId.includes("project") ||
    formId === formIds.joinProject ||
    (label.toLowerCase().includes("join") &&
      !label.toLowerCase().includes("community") &&
      !label.toLowerCase().includes("idea"));

  const projectTitle = hidden?.project ?? "iDEA Project";

  const fields: FieldDef[] = isPropose
    ? [
        {
          id: "propose-name",
          label: "Project Lead Name",
          required: true,
          placeholder: "e.g. Nirmal K",
        },
        {
          id: "propose-email",
          label: "College Email",
          type: "email",
          required: true,
          placeholder: "name@cb.amrita.edu",
        },
        {
          id: "propose-title",
          label: "Working Project Title",
          required: true,
          placeholder: "e.g. Campus Delivery Rover",
        },
        {
          id: "propose-problem",
          label: "The Problem Statement",
          type: "textarea",
          required: true,
          placeholder: "What real-world problem does your project solve?",
        },
        {
          id: "propose-solution",
          label: "Proposed Solution & Architecture",
          type: "textarea",
          required: true,
          placeholder:
            "Describe your solution, methodology, and expected outcomes.",
        },
        {
          id: "propose-tech",
          label: "Target Tech Stack",
          placeholder: "e.g. React, Fastify, PyTorch, ROS2, Docker",
        },
      ]
    : isJoinProject
      ? [
          {
            id: "project-target",
            label: "Applying for Project",
            readOnly: true,
            value: projectTitle,
          },
          {
            id: "join-name",
            label: "Full Name",
            required: true,
            placeholder: "Your name",
          },
          {
            id: "join-email",
            label: "College Email",
            type: "email",
            required: true,
            placeholder: "yourname@cb.amrita.edu",
          },
          {
            id: "join-role",
            label: "Role Applying For",
            type: "select",
            required: true,
            options: [
              { value: "frontend", label: "Frontend Developer" },
              { value: "backend", label: "Backend Developer" },
              { value: "fullstack", label: "Full Stack Developer" },
              { value: "ml", label: "AI / Machine Learning Engineer" },
              { value: "design", label: "UI / UX Designer" },
              { value: "embedded", label: "Embedded / Hardware Engineer" },
            ],
          },
          {
            id: "join-experience",
            label: "Relevant Experience & Skills",
            type: "textarea",
            required: true,
            placeholder:
              "Highlight any relevant projects, technologies, or coursework.",
          },
          {
            id: "join-links",
            label: "GitHub or Portfolio URL",
            type: "url",
            placeholder: "https://github.com/yourhandle",
          },
        ]
      : [
          {
            id: "member-name",
            label: "Full Name",
            required: true,
            placeholder: "Your full name",
          },
          {
            id: "member-email",
            label: "College Email",
            type: "email",
            required: true,
            placeholder: "name@cb.amrita.edu",
          },
          {
            id: "member-academic",
            label: "Roll Number, Department & Year",
            required: true,
            placeholder: "e.g. CB.EN.U4CSE23001, CSE, 2nd Year",
          },
          {
            id: "member-domain",
            label: "Primary Domain of Interest",
            type: "select",
            required: true,
            options: [
              { value: "web", label: "Web & Cloud Engineering" },
              { value: "app", label: "Mobile App Development" },
              { value: "ai", label: "Artificial Intelligence & ML" },
              { value: "design", label: "UI/UX & Product Design" },
              { value: "hardware", label: "Embedded Systems & Robotics" },
              { value: "media", label: "Outreach & Media" },
            ],
          },
          {
            id: "member-why",
            label: "Why do you want to join iDEA?",
            type: "textarea",
            required: true,
            placeholder:
              "What do you hope to build, learn, or contribute to iDEA?",
          },
          {
            id: "member-github",
            label: "GitHub or LinkedIn Profile",
            type: "url",
            placeholder: "https://github.com/yourhandle",
          },
        ];

  const submitTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current !== null) {
        window.clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    submitTimerRef.current = window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      onSubmitSuccess?.({
        formId,
        responseId: `sub_${Date.now().toString()}`,
      });
    }, 300);
  };

  if (submitted) {
    return (
      <div className={styles.successCard}>
        <span className={styles.badge} aria-hidden="true">
          Success
        </span>
        <h3 className={styles.successTitle}>Submission Received!</h3>
        <p className={styles.successMessage}>
          {isPropose &&
            "Your project proposal has been received. The iDEA core team will review it and follow up via email."}
          {isJoinProject &&
            `Your application to join "${projectTitle}" has been received. The project lead will reach out soon!`}
          {!isPropose &&
            !isJoinProject &&
            "Welcome to the community! Your membership application has been received."}
        </p>
        <button
          type="button"
          className={buttonStyles.button}
          onClick={() => {
            setSubmitted(false);
          }}
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <span className={styles.badge} aria-hidden="true">
        Interactive Form
      </span>

      {fields.map((field) => (
        <div key={field.id} className={styles.field}>
          <label className={styles.label} htmlFor={field.id}>
            {field.label}
            {field.required ? " *" : ""}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              className={classNames(styles.control, styles.textarea)}
              required={field.required}
              placeholder={field.placeholder}
            />
          ) : field.type === "select" ? (
            <select
              id={field.id}
              className={styles.control}
              required={field.required}
              defaultValue=""
            >
              <option value="">Select an option</option>
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.id}
              className={styles.control}
              type={field.type ?? "text"}
              required={field.required}
              placeholder={field.placeholder}
              readOnly={field.readOnly}
              defaultValue={field.value}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className={classNames(buttonStyles.button, buttonStyles.primary)}
        disabled={loading}
      >
        {loading ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
