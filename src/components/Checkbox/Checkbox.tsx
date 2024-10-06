import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
  text: string;
}

const Checkbox = ({ checked, text }: CheckboxProps) => {
  return (
    <div className={styles.container}>
      <div role="checkbox" className={checked ? styles.boxChecked : styles.box}>
        {checked && (
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6.60659L5.39341 10L13.3934 2"
              stroke="#18171F"
              stroke-width="3"
            />
          </svg>
        )}
      </div>
      <div>{text}</div>
    </div>
  );
};

export default Checkbox;
