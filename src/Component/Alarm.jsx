import {useEffect,useRef,useState } from 'react';
import mysong from './Audio/Zamana-Ho-Gaya.mp3';


const Alarm = ()=>{
const time=new Date();
const [isPlaying, setPlaying]=useState(true);
const [second,setSecond]=useState(time.getSeconds());
const [minutes,setMinutes]=useState(time.getMinutes());
const [hours,sethours]=useState(time.getHours());
const [zone]=useState(hours>=12?"PM":"AM");
const [alarmTime,setAlarmTime]=useState("Please set your Alarm");
const [hr,setHr]=useState('');
const [min,setMin]=useState('');
const [sec,setSec]=useState('');
const [zone1,setZone1]=useState('');
const audioRef =useRef();

useEffect(()=>{
 setInterval(()=>{
  setSecond((second)=>second+1);
},1000); 

 
  
  
},[]);

useEffect(()=>{
  if(second>59){
    setMinutes((minutes)=>minutes+1);
    setSecond(0);
  }
},[second]);
useEffect(()=>{
   sethours( hours>12?hours%12:hours);
},[hours])
useEffect(()=>{
  if(minutes>=59 && second>59){
    sethours((hours)=>hours+1);
    setMinutes(0);
    setSecond(0);
  }
},[minutes,second]);
const getHr=e=>{
    setHr(e.target.value)
}
const getMin=e=>{
    setMin(e.target.value)
}
const getSec=e=>{
    setSec(e.target.value)
}
const getZone=e=>{
    setZone1(e.target.value)
}
useEffect(()=>{
  if(hr==hours && min==minutes && sec==second && zone1==zone){
    setPlaying(false);
  }
},[hours,minutes,second,zone])

const setAlarm=(e)=>{
e.preventDefault();
setHr(hr<10?"0"+hr:hr);
setMin(min<10?"0"+min:min);
setSec(sec<10?"0"+sec:sec);
setAlarmTime("Alarm is Set At "+hr+":"+min+":"+sec+" "+zone1);
}
const stopAlarm=(e)=>{
  e.preventDefault();
  setPlaying(true);
    setAlarmTime("Please set your Alarm");
}
useEffect(()=>{
  if(isPlaying){ 
    audioRef.current.pause()
    console.log("bhy");
  }
  else audioRef.current.play();
},[isPlaying]);



  return (<div className='alarm-container'>
    <div className="main-container alarm" >
   {(hours<10)?"0"+hours:hours}:{(minutes<10)?"0"+minutes:minutes}:{(second<10)?"0"+second:second}  {zone}
    </div>  
    <div className="alarm-time-content">{alarmTime}</div>
    <form action="#">
        <input type="number" name="" id="" placeholder='Enter hours' onChange={getHr}/>
        <input type="number" name="" id="" placeholder='Enter minutes' onChange={getMin}/>
        <input type="number" name="" id="" placeholder='Enter Second' onChange={getSec}/>
        <select name="" id="" onChange={getZone}>
            <option value="Set Zone">Set Zone</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
        </select>
        <div className="button">
            <button onClick={setAlarm}>set Alarm</button>
            <button onClick={stopAlarm}>Stop Alarm</button>
        </div>
        <audio ref={audioRef} src={mysong}></audio>
    </form>
    </div>
  );
}
export default Alarm;