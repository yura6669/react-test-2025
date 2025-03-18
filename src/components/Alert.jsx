import css from "./Alert.module.css";
import clsx from "clsx";

const getBgColor = variant => {
  switch (variant) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export default function Alert({ variant, outlined, elevated, children }) {
  return <p
      className={clsx(css[variant],
          outlined && css.isOutlined,
          elevated && css.isElevated,
      )}
  >{children}</p>;
};