
import './App.css';

function App() {

  const text = 'Меня зовут Юрий, и я опоздал со сдачей задания, в связи с тем что заканчивал работу над магазином курса JS-2. Прошу прощение за задержку)';


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