import { Component, useState } from 'react';
import CustomComponent from './CustomComponent';
import Laptops from './Laptops';
import logo from './logo.svg';
import MyButton from './CustomButton'
import Counter from './Counter';
import Slider from './ImageSlider';
import Form from './Form';
import RestApiCall from './RestAPICall';


//creating components using class
class Header extends Component{
    render(){
        let flag = false;
        
        // Conditional rendering
        if(flag){
            return (
              <div className="App">

                <Counter 
                    defaultValue={5}
                />

              
                

                <MyButton onClick={this.props.onClickFirst}> First Button </MyButton>
                <MyButton onClick={this.props.onClickSecond}> Second Button </MyButton>
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Use props to display the text */}
                    {this.props.linkDesc}
                  </a>
                  <Form/>
                </header>
                <Slider/>
              </div>
            );
        } else{
        return (
            <div>
                            {/* <Laptops/> */}
                            <RestApiCall/>
            </div>

        )
        }
    }
}


// Creating components using functions
// const Header = ({linkDesc, myProfile,messages,addTwoNumbers, onClickFirst, onClickSecond}) => {
//     let flag = true;


//     const [visible, setVisible] = useState(true);
//     const buttonText = visible?'Hide':'Show';

//     // Conditional rendering
//     if(flag){
//         return(<div className="App">
//             <MyButton
//                 onClick = {onClickFirst}
//             >  Increment </MyButton>

//             <MyButton
//                 onClick = {onClickSecond}
//             >  Decrement </MyButton>     
            
//             <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//                 Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 {/* Use props to display the text */}
//                 {linkDesc}
//                 <br/>
//                 {/* Need to stringify if printing the object itself, if accessing the value
//                 instead, no need to stringify */}
//                 {JSON.stringify(myProfile)}
//                 <br />
//                 {messages[0]}
//                 <br />
//                 {addTwoNumbers(1,2)}
//             </a>
//             <div>
//                 {/* Add slider if visible is true */}
//                 {visible? <Slider/>:<div></div>}
//                 {/* <button onClick={setVisible(!visible)}>Show/hide</button> */}
//                 <button onClick={()=>{setVisible(!visible)}}>{buttonText}</button>
//             </div>

//             </header>        
//         </div>);
//     } else{
//        return <Laptops/>
//     }
// }

export default Header