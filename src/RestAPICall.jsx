//Making a REST API Call

import { Component, useEffect } from "react";

//Using function based component
// export default function RestApiCall(){
    
//     useEffect(()=>{
//         const fetchData = async () => {
//             try{
//                 const response = await fetch('https://api.github.com/users');
//                 const dataRetrieved = await response.json();
//                 console.log(dataRetrieved[0]);
//             } catch (error){
//                 console.log(error);
//             }
//         };
//         fetchData();
//     })
    
//     return(
//         <div></div>
//     );
// }

//Using class based component
export default class RestApiCall extends Component{

    state = {
        data: null,
        error:null,
        loading: true
    }

    async componentDidMount(){
        const urlToHit = 'https://api.github.com/users';
        const response = await fetch(urlToHit);
        const dataRetrieved = await response.json();
        this.setState({data: dataRetrieved, loading:false})
        console.log(dataRetrieved);
    }

    render(){
        return(
            <div>
                {this.state.loading?(<div>Loading...</div>)
                :(<div>
                    {/* Login Name : <div>{this.state.data.login}</div>
                    Type : <div>{this.state.data.type}</div>
                    Company: <div>{this.state.data.url}</div> */}

                    
                    <div>
                    <h1>Data from API</h1>
                    <pre>{JSON.stringify(this.state.data, null, 1)}</pre>
                    </div>

                </div>)}

            </div>
        )
    }

}