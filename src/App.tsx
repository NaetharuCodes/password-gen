import Button from "./components/Button/Button";
import styles from "./App.module.css";
import TextField from "./components/TextField/TextField";
import { useState } from "react";
import Meter from "./components/Meter/Meter";
import { Strength } from "./components/Meter/Meter";
import Slider from "./components/Silder/Slider";
import Checkbox from "./components/Checkbox/Checkbox";

function App() {
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    number: false,
    symbol: false,
  });

  const handleUpdateOptions = (option: keyof typeof options) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.brand}>Password Generator</div>
        <TextField
          isCopied={copied}
          setCopied={setCopied}
          additionalStyle={{ marginBottom: 24 }}
        />
        <Slider min={8} max={16} onChange={() => {}} />
        <div className={styles.checkboxContainer}>
          <Checkbox
            checked={options.upper}
            text="Include Uppercase Letters"
            value="upper"
            onClick={handleUpdateOptions}
          />
          <Checkbox
            checked={options.lower}
            text="Include Lowercase Letters"
            value="lower"
            onClick={handleUpdateOptions}
          />
          <Checkbox
            checked={options.number}
            text="Include Numbers"
            value="number"
            onClick={handleUpdateOptions}
          />
          <Checkbox
            checked={options.symbol}
            text="Include Symbols"
            value="symbol"
            onClick={handleUpdateOptions}
          />
        </div>
        <div className={styles.meterContainer}>
          <Meter strength={Strength.Medium} />
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Generate" />
        </div>
      </div>
    </div>
  );
}

export default App;
