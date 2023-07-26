
import Stopwatch from './Component/Stopwatch';
import Alarm from './Component/Alarm';
import { useState } from 'react';

function App() {
     
     const[alarm,setAlarm]=useState(false);

    const handleStopWatch=()=>{
        setAlarm(false);
    }
    const handleAlarm=()=>{
        setAlarm(true);
    }
    return (<>
       <header>
        <nav>
            <ul>
                <li onClick={handleStopWatch}>Stopwatch</li>
                <li onClick={handleAlarm}>Alarm</li>
            </ul>
        </nav>
       </header>
        <div className='main-app'>
            <section className='app-container'>
               {alarm?<Alarm />:<Stopwatch/>} 
                
            </section>
            <footer>
                <hr></hr>
                &#169; Himanshu Kumar
            </footer>
        </div>
        </>
    )

}

export default App;
