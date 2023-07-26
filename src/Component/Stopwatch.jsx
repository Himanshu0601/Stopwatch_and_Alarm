import { useEffect, useState } from 'react';

let Stopwatch = () => {

  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, sethours] = useState(0);
  const [id, setId] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {

    if (stop) {
      setId(setInterval(() => {
        setSecond((second) => second + 1);
      }, 1000));
    }


  }, [stop]);

  useEffect(() => {
    if (second > 59) {
      setMinutes((minutes) => minutes + 1);
      setSecond(0);
    }
  }, [second]);

  useEffect(() => {
    if (minutes >= 59 && second > 59) {
      sethours((hours) => hours + 1);
      setMinutes(0);
      setSecond(0);
    }
  }, [minutes, second]);


  const handleStart = () => {
    setStop(true);
  }
  const handleStop = () => {
    clearInterval(id);
    setStop(false);
  }

  const handlereset = () => {
    setMinutes(0);
    sethours(0);
    setSecond(0);
    setStop(false);
    clearInterval(id);
  }
  return (
    <div className='container'>
      <div className="stopwatch-time" >
        {(hours < 10) ? "0" + hours : hours}:{(minutes < 10) ? "0" + minutes : minutes}:{(second < 10) ? "0" + second : second}
      </div>
      <div className='button'>
        <button onClick={handleStart}>
          Start</button>
        <button onClick={handleStop}>
          Stop</button>
        <button onClick={handlereset}>
          Reset</button>
      </div>



    </div>
  );
}
export default Stopwatch;