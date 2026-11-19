import { useReveal } from "../hooks";

/** Wraps children in an element that fades up when scrolled into view. */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
