import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";
import classes from './App.module.css';

const App = () =>{

  return (
    <div className= {classes.App}>
      <CountdownTimer
      countdownTimestampMs={1655052240000}
      />
    </div>
  );
}

export default App;
