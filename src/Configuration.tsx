import React from 'react';

interface ConfigurationProps {
  workSeconds: number;
  restSeconds: number;
  rounds: number;
  setWorkSeconds: (value: number) => void;
  setRestSeconds: (value: number) => void;
  setRounds: (value: number) => void;
}

const Configuration: React.FC<ConfigurationProps> = ({
  workSeconds,
  restSeconds,
  rounds,
  setWorkSeconds,
  setRestSeconds,
  setRounds,
}) => {
  return (
    <div className="settings mb-4">
      <div className="input-group mb-3">
        <span className="input-group-text">Work (seconds): {workSeconds}</span>
        <input
          type="range"
          className="form-range"
          value={workSeconds}
          onChange={(e) => setWorkSeconds(Number(e.target.value))}
          min="10"
          max="60"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Rest (seconds): {restSeconds}</span>
        <input
          type="range"
          className="form-range"
          value={restSeconds}
          onChange={(e) => setRestSeconds(Number(e.target.value))}
          min="5"
          max="30"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Rounds: {rounds}</span>
        <input
          type="range"
          className="form-range"
          value={rounds}
          onChange={(e) => setRounds(Number(e.target.value))}
          min="1"
          max="10"
        />
      </div>
    </div>
  );
};

export default Configuration; 