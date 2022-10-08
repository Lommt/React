
import './App.css';

function App() {

  const userName = 'Юрий';
  const userAge = 23;

  return (
    <div className="App">
      <Myheader name={userName} age={userAge} />
    </div>

  );
}

export default App;


const Myheader = (props) => {
  return (
    <div className="myHeader-block">
      <h1>Привет! Меня зовут {props.name} и мне {props.age} года </h1>
    </div>
  )
}