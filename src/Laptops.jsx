// Rendering Lists

const laptops = [
    {id: '1', brand: 'Apple', model: 'Macbook Air', ram: '8', isPro: false},
    {id: '2', brand: 'Apple', model: 'Macbook Pro', ram: '8', isPro: true},
    {id: '3', brand: 'Microsoft', model: 'Surface Pro', ram: '8', isPro: SVGComponentTransferFunctionElement},
    {id: '4', brand: 'Dell', model: 'XPS 15', ram: '16', isPro: false},
    {id: '5', brand: 'HP', model: 'Envy', ram: '16', isPro: false}
]

function Laptops(){

    const laptopList = laptops.map(laptop => <li key={laptop.id} 
        style={{
        color: laptop.isPro?'blue':'red',
        backgroundColor: laptop.isPro?'orange':'pink'
        }}>
        {laptop.brand} made {laptop.model} with {laptop.ram} GB of RAM
        </li>)

    return(
        <div>
            <ul>
                {laptopList}
            </ul>
        </div>
    )
}

export default Laptops