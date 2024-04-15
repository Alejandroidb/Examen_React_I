import MiCard from "./MiCard";

const Grilla = ({amiibos}) => {
    return (
        <div className="row">
            {amiibos && 
            amiibos.map((amiibo)=>(
                <MiCard
                amiibo={amiibo}
                key={amiibo.tail}/>
            ))}
        </div>
    )
}

export default Grilla