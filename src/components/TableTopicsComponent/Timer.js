import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import Switch from "react-switch";
import { useSpring, animated } from "react-spring";
import { useTimer } from "react-timer-hook";
import { useStopwatch } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const [timerRun, setTimerRun] = useState(true);
  const [checked, setChecked] = useState(false);

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
  };

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
  };

  const toggler = (checked) => setChecked(checked);

  return (
    <Card className="timer-card my-3">
      <Card.Body>
        Timer Mode{" "}
        <Switch
          onChange={(checked) => toggler(checked)}
          checked={checked}
          uncheckedIcon={
            <div className="m-auto p-auto">
              <i className="fas fa-palette text-light toggler-palette"></i>
            </div>
          }
          checkedIcon={
            <div className="m-auto p-auto">
              <i className="fas fa-clock text-light toggler-clock"></i>
            </div>
          }
          offColor="#505050"
          onColor="#212529"
        />
        {checked ? (
          <Clock stopWatch={stopWatch} timer={timer} timerRun={timerRun} />
        ) : (
          <Fill timer={timer} timerRun={timerRun} />
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

const Clock = ({ timer, stopWatch, timerRun }) => {
  const anim = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={anim}>
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
    </animated.div>
  );
};

const Fill = ({ timer, timerRun }) => {
  const anim = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={anim}>
      {
        <Container className="mt-4 mb-2 mx-auto">
          <Card
            className={
              timerRun
                ? timer.minutes >= 1
                  ? "shadow mx-auto color-fill gradient-white"
                  : timer.minutes < 1 && timer.seconds >= 30
                  ? "shadow mx-auto color-fill gradient-green"
                  : "shadow mx-auto color-fill gradient-yellow"
                : "shadow mx-auto color-fill gradient-red"
            }
          >
            <Card.Body></Card.Body>
          </Card>
        </Container>
      }
    </animated.div>
  );
};

export default Timer;
