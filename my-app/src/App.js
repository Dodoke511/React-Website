
import './App.css';
import WelcomeCard from './components/WelcomeCard';
import Counter from './components/Counter.jsx'
import StudentInfo from './components/StudentInfo.jsx'
import './JSFundamentals.js'

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial",}}>
      <title>W WEBSITE</title>
      <h1>REACT SOMETHING PRACTICE</h1>
      <WelcomeCard name="Sir Mervin" />
      <Counter/>
      <StudentInfo/>
    </div>
  );
}

export default App;
