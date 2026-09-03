import { Link } from "react-router-dom";

export default function TextLink({ to, className, children, onClick }) {
  return (
    <Link
      to={to}
      className={`${className} text-yellow-400 hover:text-white underline`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
