import { Component, useState } from "react";

// Using State - a component's memory
//Example for class components
// export default class Counter extends Component{
    
//     state = {
//         count: 0
//     }

    
//     incrementCount = () =>{
//         this.setState({
//             count: this.state.count+1
//         })
//     }

//     decrementCounter = () => {
//         this.setState({
//             count: this.state.count-1
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.incrementCount}>Increment</button>
//                 <button onClick={this.decrementCounter}>Decrement</button>
//             </div>
//         );
//     }
// }

export default function Counter({defaultValue}){

    const [count,setCount] = useState(defaultValue);

    function incrementCount(){
        setCount(count+1)
    }

    function decrementCount(){
        setCount(count-1)
    }

    return(
            <div>
                 <p>{count}</p>
                 <button onClick={incrementCount}>Increment</button>
                 <button onClick={decrementCount}>Decrement</button>
            </div>       
    );
}