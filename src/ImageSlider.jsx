//Using class component

import { render } from "@testing-library/react"
import { Component } from "react";

export default class Slider extends Component{
    



    state = {
        images : [
            'https://plus.unsplash.com/premium_photo-1682124729413-6d940f082212?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1682124669726-6721b5a1932c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        index : 0
    }

    nextImage = () => {
       
        if(this.state.index < this.state.images.length -1){
            this.setState(
                {
                    index: this.state.index+1
                });
        } else {
            console.log('End of Images')
        }


    }

    previousImage = () => {
       
        if(this.state.index >= 1){
            this.setState(
                {
                    index: this.state.index-1
                });
        } else {
            console.log('End of images')
        }
       

    }

    render(){
        return(
            <div>
                <button onClick={this.previousImage}>Previous</button>
                <img 
                style={
                    {
                        width: 500,
                        height: 300
                    }
                }    
                src={this.state.images[this.state.index]} alt="Slider Image" />
                <button onClick={this.nextImage}>Next</button>
                 
            </div>
        );
    }
}