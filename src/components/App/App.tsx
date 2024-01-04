import { useState } from "react";
import classes from "./App.module.scss";

// TREE SHAKING
function TODO(s: string) {
  console.log('TODOFUNCTION');
}

const App = () => {
  const [count, setCount] = useState(0);

  if (__PLATFORM__ === 'mobile') {
    return <div>MOBILE</div>;
  }

  if (__ENV__ === 'develop') {
    // addDevTools();
  }

  return (
    <div className={classes['counter']}>
      <h1>PLATFORM: {__PLATFORM__}</h1>
      <div className={classes['counter__count']}>{count}</div>
      <button className={classes['counter__button']} onClick={() => setCount((prev) => ++prev)}>
        <span className={classes["counter__button-text"]}>add</span>
      </button>
    </div>
  );
};

export default App;
