import { Link } from "react-router-dom";

type ButtonProps = {
  to?: string;
  variant?: "filled" | "outlined";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

const Button = ({
  children,
  to,
  onClick,
  type = "button",
  variant = "filled",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "font-jeju w-full rounded-lg px-6 py-3 text-center cursor-pointer";
  const sizeStyles = size === "lg" ? "md:w-[290px]" : "md:w-[270px]";
  const filledStyles = "bg-subGreen text-white";
  const outlinedStyles = "border border-subGreen text-subGreen bg-transparent";
  const focusStyles =
    "focus-within:ring-4 focus-within:ring-blue-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600";

  const buttonClass = `${baseStyles} ${sizeStyles} ${
    variant === "filled" ? filledStyles : outlinedStyles
  } ${focusStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
