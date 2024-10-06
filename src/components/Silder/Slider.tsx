import React, { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";

interface SliderProps {
  min: number;
  max: number;
  onChange: (newValue: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min = 8, max = 16, onChange }) => {
  const [percentage, setPercentage] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sliderRef.current || !buttonRef.current) return;

      const sliderRect = sliderRef.current.getBoundingClientRect();
      const maxX = sliderRect.width;

      let newPosition = e.clientX - sliderRect.left;
      newPosition = Math.max(0, Math.min(newPosition, maxX));
      const newPercentage = (newPosition / maxX) * 100;
      setPercentage(newPercentage);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseDown = () => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const button = buttonRef.current;
    if (button) {
      button.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (button) {
        button.removeEventListener("mousedown", handleMouseDown);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const divisions = 100 / (max - min);
  const adjustedLengthValue = Math.trunc(percentage / divisions) + min;

  // Position of the circle drag button
  const buttonPosition = `calc(${percentage}% - ${
    percentage * 0.01 * 24
  }px - ${4}px)`;

  // Possition of the green track bar
  const trackPosition = `calc(${percentage}% - ${
    percentage * 0.01 * 28
  }px + ${14}px)`;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.labelText}>Character Length</div>
        <div className={styles.numberText}>{adjustedLengthValue}</div>
      </div>
      <div className={styles.sliderBar}>
        <div className={styles.sliderTrack} ref={sliderRef} />
        <div className={styles.greenTrack} style={{ width: trackPosition }} />
        <div
          className={styles.sliderCircle}
          style={{ left: buttonPosition }}
          ref={buttonRef}
        />
      </div>
    </div>
  );
};

export default Slider;
