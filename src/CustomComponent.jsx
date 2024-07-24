import './CustomComponent.css'

const username = {
    name:'Dhiraj',
    age:'27',
    image :'https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heigjt: 100,
    width: 150
}

function CustomComponent(){
    
    return(
        <div className="container">
            <h1>Our Custom Component</h1>
            <hr />
            <img src={username.image} alt=""
            style = {
                {
                    height: username.heigjt,
                    width: username.width
                }
             }
            />
            <p>Hi {username.name}, this is your custom Component</p>
            <br />

            We know you are {username.age} years old.

        </div>
    )
}

export default CustomComponent