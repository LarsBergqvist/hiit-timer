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
  isWorking,
  timeLeft,
  currentRound,
  rounds,
  isPaused,
  stopTimer,
  pauseTimer,
}) => {
  return (
    <div className="timer-container">
      <div className="timer-circle">
        <div className="timer-time">{timeLeft}</div>
        <div className="timer-round">
          Round {currentRound + 1} of {rounds}
        </div>
        <div className="timer-state">
          {isWorking ? 'Work' : 'Rest'}
        </div>
      </div>
      <button onClick={pauseTimer} className="btn btn-secondary action-button">
        {isPaused ? 'Resume' : 'Pause'}
      </button>
      <button onClick={stopTimer} className="btn btn-danger action-button">
        Stop
      </button>
    </div>
  );
};

export default Timer;