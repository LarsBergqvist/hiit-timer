import React from 'react';

interface TimerProps {
  isWorking: boolean;
  timeLeft: number;
  currentRound: number;
  rounds: number;
  isRunning: boolean;
  isPaused: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  pauseTimer: () => void;
}

const Timer: React.FC<TimerProps> = ({
  timeLeft,
  currentRound,
  rounds,
  isRunning,
  isPaused,
  stopTimer,
  pauseTimer,
}) => {
  return (
    <div className="timer-container">
      <div className="timer-circle">
        <div className="timer-time">
          {timeLeft}
        </div>
        <div className="timer-round">
          {currentRound + 1} / {rounds}
        </div>
      </div>
      <button className="btn btn-danger mt-3" onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button className="btn btn-warning mt-3" onClick={pauseTimer} disabled={!isRunning}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

export default Timer;