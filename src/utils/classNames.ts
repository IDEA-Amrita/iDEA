export default function classNames(
  ...values: readonly (string | false | null | undefined)[]
) {
  return values.filter(Boolean).join(" ");
}
