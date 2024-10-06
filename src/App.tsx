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

  return (
    <div className={styles.container}>
      <TextField text={"Something"} isCopied={copied} setCopied={setCopied} />
      <Button text="Press Me" />
      <Meter strength={Strength.Strong} />
      <Slider min={8} max={16} onChange={() => {}} />
      <Checkbox checked={false} text="More buttons" />
    </div>
  );
}

export default App;
