ReactDOM.render(
    <h5>first react</h5>,
    document.getElementById('demo')
)

let Mango = () => {
    return (
        <div>
            <h1>this is iut</h1>
        </div>
    )
}

let Man = () => {
    return (
        <div>
            <h2>
                first projext
            </h2>
        </div>
    )
}

function Mor (){
    return (
        <div>
            <Mango/>
            <Man/>
            <Mango/>
        </div>
    )
}
ReactDOM.createRoot(document.querySelector('.first')).render(<Mor/>)