import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import './App.css'
import Configuration from './Configuration'
import Timer from './Timer'
import { Modal } from 'react-bootstrap'

function App() {
  const [workSeconds, setWorkSeconds] = useState(30)
  const [restSeconds, setRestSeconds] = useState(10)
  const [rounds, setRounds] = useState(1)
  const [currentRound, setCurrentRound] = useState(0)
  const [isWorking, setIsWorking] = useState(true)
  const [timeLeft, setTimeLeft] = useState(workSeconds)
  const [isRunning, setIsRunning] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const workSound = new Audio('./work-start.mp3')
  const restSound = new Audio('./rest-start.mp3')
  const beepSound = new Audio('./beep.wav')

  useEffect(() => {
    let timer: number
    if (isRunning && !isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)

        // Play countdown beep for the last 3 seconds
        if (timeLeft <= 3 && timeLeft > 0) {
          beepSound.play()
        }
      }, 1000)
    } else if (isRunning && timeLeft === 0) {
      if (isWorking) {
        restSound.play()
        setTimeLeft(restSeconds)
        setIsWorking(false)
      } else {
        if (currentRound < rounds - 1) {
          workSound.play()
          setTimeLeft(workSeconds)
          setIsWorking(true)
          setCurrentRound((prev) => prev + 1)
        } else {
          setIsRunning(false)
          setShowTimer(false)
        }
      }
    }
    return () => clearInterval(timer)
  }, [isRunning, isPaused, timeLeft, isWorking, currentRound, rounds, workSeconds, restSeconds, workSound, restSound, beepSound])

  const startTimer = () => {
    setCurrentRound(0)
    setIsWorking(true)
    setTimeLeft(workSeconds)
    setIsRunning(true)
    setShowTimer(true)
    setIsPaused(false)
    workSound.play()
  }

  const stopTimer = () => {
    setIsRunning(false)
    setTimeLeft(workSeconds)
    setCurrentRound(0)
    setIsWorking(true)
    setShowTimer(false)
  }

  const pauseTimer = () => {
    setIsPaused(!isPaused)
  }

  return (
    <>
      <h1>HIIT Timer</h1>
      <Configuration
        workSeconds={workSeconds}
        restSeconds={restSeconds}
        rounds={rounds}
        setWorkSeconds={setWorkSeconds}
        setRestSeconds={setRestSeconds}
        setRounds={setRounds}
      />
      <button className="btn btn-primary" onClick={startTimer} disabled={isRunning}>
        Start
      </button>

      <Modal show={showTimer} onHide={stopTimer} fullscreen>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <Timer
            isWorking={isWorking}
            timeLeft={timeLeft}
            currentRound={currentRound}
            rounds={rounds}
            isRunning={isRunning}
            isPaused={isPaused}
            startTimer={startTimer}
            stopTimer={stopTimer}
            pauseTimer={pauseTimer}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default App
