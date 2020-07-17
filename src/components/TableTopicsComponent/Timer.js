import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useTimer } from "react-timer-hook";
import { useStopwatch } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const [timerRun, setTimerRun] = useState(true);

  const timer = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setTimerRun(false);
      stopWatch.start();
    },
  });

  const stopWatch = useStopwatch({});

  const onStart = () => {
    if (timerRun) {
      timer.resume();
    } else {
      stopWatch.start();
    }
  }

  const onPause = () => {
    if (timerRun) {
      timer.pause();
    } else {
      stopWatch.pause();
    }
  };

  const onReset = () => {
    if (timerRun) {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 121);
      timer.restart(time);
    } else {
      stopWatch.reset();
    }
  }

  return (
    <Card className="timer-card my-3">
      <Card.Body>
        {timerRun ? (
          <h1 className="display-2">
            <span>{("0" + timer.minutes).slice(-2)}</span>:
            <span>{("0" + timer.seconds).slice(-2)}</span>
          </h1>
        ) : (
          <h1 className="display-2 text-danger">
            <span>{("0" + stopWatch.minutes).slice(-2)}</span>:
            <span>{("0" + stopWatch.seconds).slice(-2)}</span>
          </h1>
        )}
        <Button className="btn-light m-2" onClick={() => onStart()}>
          <i className="fas fa-play"></i>
        </Button>
        <Button className="btn-light m-2" onClick={() => onPause()}>
          <i className="fas fa-pause"></i>
        </Button>
        <Button className="btn-light m-2" onClick={() => onReset()}>
          <i className="fas fa-undo"></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Timer;
