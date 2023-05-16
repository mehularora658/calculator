import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='container'>
      <h1 className='heading'>Calculator App</h1>
      <div className='calculator-main'>
      <form>
        <input type="text" readOnly className="display" />
        <br />
        <div className="btns">
          <input type="button" className="btn" value="1" />
          <input type="button" className="btn" value="2" />
          <input type="button" className="btn" value="3" />
          <input type="button" className="btn" value="+" />
          <br />
          <input type="button" className="btn" value="4" />
          <input type="button" className="btn" value="5" />
          <input type="button" className="btn" value="6" />
          <input type="button" className="btn" value="-" />
          <br />
          <input type="button" className="btn" value="7" />
          <input type="button" className="btn" value="8" />
          <input type="button" className="btn" value="9" />
          <input type="button" className="btn" value="*" />
          <br />
          <input type="button" className="btn" value="0" />
          <input type="button" className="ResetBtn" value="Reset" />
          <input type="button" className="btn" value="/" />
        </div>
      </form>
      </div>
    </div>
    </>
  );
}

export default App;
