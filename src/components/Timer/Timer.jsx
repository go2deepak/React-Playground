import {useState, useEffect, useRef} from 'react'

const Clock = () => {
    let id = useRef();
    const [time, setTime] = useState(0);
    const start = () => {
      id.current = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);
    };

    return (
      <>
        <h1> StopWatch</h1>
        <h1>{time}</h1>
        <button onClick={start}>Start</button>
        <button
          onClick={() => {
            clearInterval(id.current);
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            clearInterval(id.current);
            setTime(0);
          }}
        >
          Stop
        </button>
      </>
    );
  };

  export default Clock;