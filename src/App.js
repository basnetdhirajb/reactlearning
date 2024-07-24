
import './App.css';
import Header from './Header';

function App() {
  let linkDescription = "Learn React from the docs!"
  return (
    <Header
    // Passing props to header
    linkDesc="Learn React from the docs"
    myProfile = {
      {
        name :'Dhiraj',
        location: 'ktm'
      }
    }
    messages = {
      ["hi","hello"]
    }

    addTwoNumbers = {
      (firstNum,secondNum) => firstNum+secondNum
    }

    // passing function to the Header
    onClickFirst={()=>alert('Clicked first button')}
    onClickSecond = {()=>alert('Clicked second button')}
    />
  );
}

export default App;
