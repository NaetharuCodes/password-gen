import styles from "./Meter.module.css";

export enum Strength {
  TooWeak = "TOO WEAK!",
  Weak = "WEAK",
  Medium = "MEDIUM",
  Strong = "STRONG",
}

interface MeterBarProps {
  strength: Strength;
}

const MeterBar = ({ strength }: MeterBarProps) => {
  return (
    <>
      <div
        className={`${styles.meterBar} ${
          strength === Strength.TooWeak
            ? styles.tooWeak
            : strength === Strength.Weak
            ? styles.weak
            : strength === Strength.Medium
            ? styles.medium
            : strength === Strength.Strong
            ? styles.strong
            : ""
        }`}
      ></div>
      <div
        className={`${styles.meterBar} ${
          strength === Strength.Weak
            ? styles.weak
            : strength === Strength.Medium
            ? styles.medium
            : strength === Strength.Strong
            ? styles.strong
            : ""
        }`}
      ></div>
      <div
        className={`${styles.meterBar} ${
          strength === Strength.Medium
            ? styles.medium
            : strength === Strength.Strong
            ? styles.strong
            : ""
        }`}
      ></div>
      <div
        className={`${styles.meterBar} ${
          strength === Strength.Strong ? styles.strong : ""
        }`}
      ></div>
    </>
  );
};

interface MeterProps {
  strength: Strength;
}

const Meter = ({ strength }: MeterProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.labelText}>STRENGTH</span>

      <div className={styles.meterBarContainer}>
        <span className={styles.mainText}>{strength}</span>
        <MeterBar strength={strength} />
      </div>
    </div>
  );
};

export default Meter;
