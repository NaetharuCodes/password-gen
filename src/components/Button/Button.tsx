import { useState } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  const [isHovererd, setIsHovered] = useState(false);

  const defaultColor = "#18171f";
  const hoverColor = "#a4ffaf";

  return (
    <button
      className={styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.10547 12L11.1054 6.00002L5.10547 0L3.84045 1.26501L7.68094 5.10547L0 5.10547V6.8946L7.68094 6.8946L3.84045 10.735L5.10547 12Z"
          fill={isHovererd ? hoverColor : defaultColor}
        />
      </svg>
    </button>
  );
};

export default Button;
