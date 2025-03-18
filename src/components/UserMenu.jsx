import { HiUser } from "react-icons/hi";
import css from "./UserMenu.module.css";
import clsx from "clsx";

export default function UserMenu({ name }) {
  return (
    <div>
      <p><HiUser className={clsx(css.myIcon
      )} size="24" /> {name}</p>
    </div>
  );
};