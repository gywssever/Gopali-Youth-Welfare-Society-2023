export default function Card(props) {

    let button_array = props.button;

    return (
        <>
            <div className="card">
                <div className="card_header">
                    <h2>{props.title}</h2>
                </div>
                <div className="card_body">
                    <p>{props.summary} </p>
                </div>
                <div className="button_container">
                    {button_array.map((button, index) => (
                        <div key={index} >
                            <a href={button.link} target="_blank" rel="noreferrer" >
                                <button className="button">{button.interval}</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}