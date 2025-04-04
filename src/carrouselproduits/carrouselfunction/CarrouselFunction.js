import React from 'react'

function CarrouselFunction({produit1, produit2, produit3}) {
  return (
    <div>
              <div id="carouselExampleControls" className="carousel carousel-fade mx-auto slide mt-4 pt-4" data-bs-ride="carousel"
            interval="1" ride="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={produit1} className="d-block image mx-auto" alt="Vetements" />

                </div>
                <div className="carousel-item">
                    <img src={produit2} className="d-block image mx-auto" alt="Vetements" />
                </div>
                <div className="carousel-item">
                    <img src={produit3} className="d-block image mx-auto" alt="Vetements" />
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
    </div>
  )
}

export default CarrouselFunction
