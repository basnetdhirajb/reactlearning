// form using class components

import React, { Component } from "react";

export default class Form extends Component{

    state = {
        textInput:'Dhiraj',
        checkBox: true,
        skill: 'React'
    }

    // changeTextInput = (event) => {
    //     this.setState({
    //         textInput: event.target.value
    //     })
    // }

    changeCheckBox = (event)=> {
        this.setState({
            checkBox: event.target.checked
        })
    }


    // changeOption = (event) =>{
    //     this.setState({
    //         skill: event.target.value
    //     })
    // }

    handleAll = (event, inputName, isChecked) =>{
        this.setState({
            // inputName is not an array, this is actually computed property names that allows use to use the value of 
            //the variable as the key for an object proprty
            [inputName]:isChecked?event.target.checked:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <form action="">
                <input type="text" value = {this.state.textInput} onChange={
                    (event) => this.handleAll(event,'textInput')
                    }/>
                <br/>
                <input checked={this.state.checkBox} type = "checkbox" onChange={(event)=>{this.handleAll(event,'checkBox',true)}}/>
                <label>Sign up for newsletter</label>
                <br/>
                <select value = {this.state.skill} onChange={
                    (event)=>this.handleAll(event,'skill')
                    }>
                    <option value="Java">Java</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                </select>
                <button type = "submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}