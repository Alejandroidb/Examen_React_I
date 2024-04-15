const MiCard = ({amiibo}) => {
    return (
        <div className="col-md-4 mt-5">
            <div className="card">
                <img src={amiibo.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{amiibo.character}</h5>
                    <p className="card-text">{amiibo.amiiboSeries}</p>
                    <p className="card-text">{amiibo.type}</p>
                </div>
            </div>    
        </div>
    )
}

export default MiCard