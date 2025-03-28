import React from 'react'
import fruitCarrousel from '../images/fruits/image copy 5.png'
import vetementCarrousel from "../images/vetements/image copy 2.png"
import legumeCarrousel from "../images/legumes/image.png"

function VueProd() {
    return (
        <div id="carouselExampleControls" className="carousel carousel-fade mx-auto slide mt-5 pt-1" data-bs-ride="carousel"
            interval="1" ride="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={fruitCarrousel} className="d-block image mx-auto" alt="Vetements" />

                </div>
                <div className="carousel-item">
                    <img src={legumeCarrousel} className="d-block image mx-auto" alt="Vetements" />
                </div>
                <div className="carousel-item">
                    <img src={vetementCarrousel} className="d-block image mx-auto" alt="Vetements" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default VueProd
