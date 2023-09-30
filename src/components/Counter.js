import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import styles from "@/components/Counter.module.css";
import CounterButton from "./CounterButton";

export default function Counter() {
  const [timer, setTimer] = useState(0);
  const [isTimerPause, setTimerPause] = useState(true);
  const [timerInterval, setTimerInterval] = useState(null);

  const startHandler = () => {
    if (isTimerPause) {
      setTimerPause(false);
      setTimerInterval(
        setInterval(() => {
          setTimer((prev) => prev + 1);
        }, 1000)
      );
    }
    console.log(timerInterval);
    return;
  };

  const restartHandler = () => {
    if (timer == 0) {
      return;
    }
    setTimer(0);
    setTimerInterval((prev) => clearInterval(prev));
    setTimerPause((prev) => true);
  };

  const pauseHandler = () => {
    if (isTimerPause) {
      return;
    }
    setTimerInterval((prev) => clearInterval(prev));
    setTimerPause((prev) => true);
    console.log(timerInterval);
  };

  const convertTimer = () => {
    var sec_num = parseInt(timer, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  };

  return (
    <>
      <div className={styles[`timer-display`]}>{convertTimer()}</div>
      <CounterButton onClick={startHandler}>Start</CounterButton>
      <CounterButton onClick={pauseHandler}>Pause</CounterButton>
      <CounterButton onClick={restartHandler}>Reset</CounterButton>
    </>
  );
}
