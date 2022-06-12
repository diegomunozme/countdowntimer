import { useState, useEffect } from "react";
import classes from "./CountdownTimer.module.css";
import { getRemainingTimeUntilMsTimeStamp } from "./CountdownTimerUtils";

const defaultRemainingTime = {
  //JS Object that will hold our time
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);
  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimeStamp(countdown))
    console.log(remainingTime)
  }

  return (
    <div className={classes.countdowntimer}>
      <span>{remainingTime.days}</span>
      <span>Days</span>
      <span>{remainingTime.hours}</span>
      <span>Hours</span>
      <span>{remainingTime.minutes}</span>
      <span>Minutes</span>
      <span>{remainingTime.seconds}</span>
      <span>Seconds</span>
    </div>
  );
};

export default CountdownTimer;
