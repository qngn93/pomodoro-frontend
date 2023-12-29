// src/pages/index.js
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Initial time set to 25 minutes
  const [isRunning, setIsRunning] = useState(false); // State to track if the timer is running

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const setTime = (minutes) => {
    setIsRunning(false); // Stop the timer when setting a new time
    setTimeLeft(minutes * 60); // Convert minutes to seconds
  };

  return (
    <>
      <Head>
        {/* ... Head elements such as title and meta */}
      </Head>
      <main className={styles.main}>
        <div className={styles.timerButtons}>
          {/* Buttons to set different timer durations */}
          <button className={styles.button} onClick={() => setTime(25)}>
            Pomodoro
          </button>
          <button className={styles.button} onClick={() => setTime(5)}>
            Short Break
          </button>
          <button className={styles.button} onClick={() => setTime(10)}>
            Long Break
          </button>
        </div>
        <div className={styles.timer}>
          {/* Timer display */}
          {new Date(timeLeft * 1000).toISOString().substr(14, 5)}
        </div>
        <div className={styles.buttonContainer}>
          {/* Start/Pause and Reset buttons */}
          <button className={styles.button} onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button className={styles.button} onClick={() => setTime(25)}>
            Reset
          </button>
        </div>
      </main>
    </>
  );
}
