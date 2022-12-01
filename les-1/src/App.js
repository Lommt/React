
import './App.css';
import Message from './Message.jsx';

function App() {

  const text = 'Добрый вечер! Меня зовут Юрий.';


  return (
    <div className="App">
      <Message text={text} />
    </div>

  );
}

export default App;


