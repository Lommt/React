
import './App.css';

function App() {

  const text = 'Добрый вечер! Меня зовут Юрий.';


  return (
    <div className="App">
      <Message text={text} />
    </div>

  );
}

export default App;


const Message = ({ text }) => {
  return (
    <div className="Message">
      <h1>{text}</h1>
    </div>
  )
} 
