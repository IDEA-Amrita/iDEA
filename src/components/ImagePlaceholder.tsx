import classNames from "../utils/classNames";
import styles from "./ImagePlaceholder.module.css";

export interface ImagePlaceholderProps {
  label?: string;
  glyph?: string;
  aspectRatio?: "4 / 3" | "1 / 1";
  className?: string | undefined;
}

export default function ImagePlaceholder({
  label = "Image",
  glyph = "iDEA",
  aspectRatio = "4 / 3",
  className,
}: ImagePlaceholderProps) {
  const shape = aspectRatio === "1 / 1" ? styles.square : styles.landscape;
  return (
    <div
      className={classNames(styles.placeholder, shape, className)}
      role="img"
      aria-label={label}
    >
      <span className={styles.glyph} aria-hidden="true">
        {glyph}
      </span>
    </div>
  );
}
