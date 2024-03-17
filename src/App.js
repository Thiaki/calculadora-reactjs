import Display from './components/Display';
import Buttons from './components/Buttons';
import './App.css';

function App() {
  return (
    <div className='page'>
      <div className='calculator'>
      <Display/>
      <Buttons />
      </div>
    </div>
  );
}

export default App;
