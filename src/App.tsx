import Button from "./components/Button/Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Button text="Press Me" />
    </div>
  );
}

export default App;
