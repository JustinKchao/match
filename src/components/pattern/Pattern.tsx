import React, { useState, useRef, useEffect } from "react";

import styles from "./Pattern.module.scss";

const WAIT_TIMEOUT: number = 300;
const ENTER_KEY = "enter";

type PatternProps = {
  text: string;
  pattern: RegExp;
};

const Pattern = ({ text, pattern }: PatternProps) => {
  const [match1, setMatch1] = useState("");
  const [match2, setMatch2] = useState("");
  const [match1Style, setMatch1Style] = useState(styles.NotMatch);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      console.log("timeout", match1);
      validate1("from timeout");
    }, WAIT_TIMEOUT);
  }, [match1]);

  const validate1 = (message: string) => {
    console.log("call from ", message);
    if (match1.length === 0) {
      setMatch1Style(styles.Normal);
      return;
    }
    console.log(match1);
    // const pattern = /^\s*[3]\s*[6]\s*[0]\s*[\\]*\s*[p,P]\s*[i,I]\s*/;
    if (pattern.test(match1)) {
      console.log("match");
      setMatch1Style(styles.Match);
    } else {
      console.log("NOT match");
      setMatch1Style(styles.NotMatch);
    }
  };

  const onMatch1Change = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log("change", match1);
    setMatch1(e.currentTarget.value);
  };

  const onMathc1KeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === ENTER_KEY) {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
      e.preventDefault();
      validate1("keydown");
    }
  };

  return (
    <div>
      <div>Check for variant of {text}</div>
      <form>
        <input
          className={`${styles.Input} ${match1Style}`}
          type="text"
          value={match1}
          onChange={onMatch1Change}
          onKeyDown={onMathc1KeyDown}
        />
      </form>
    </div>
  );
};

export default Pattern;
