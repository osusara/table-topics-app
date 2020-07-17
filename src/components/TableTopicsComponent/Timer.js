import React from "react";
import { Card, Button } from "react-bootstrap";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <Card className="timer-card my-3">
      <Card.Body>
        <h1 className="display-2">
          <span>{("0" + minutes).slice(-2)}</span>:
          <span>{("0" + seconds).slice(-2)}</span>
        </h1>
        <Button className="btn-light m-2" onClick={start}>
          <i className="fas fa-play"></i>
        </Button>
        <Button className="btn-light m-2" onClick={pause}>
          <i className="fas fa-pause"></i>
        </Button>
        <Button className="btn-light m-2" onClick={resume}>
          <i className="fas fa-step-forward"></i>
        </Button>
        <Button
          className="btn-light m-2"
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 121);
            restart(time);
          }}
        >
          <i className="fas fa-undo"></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Timer;
