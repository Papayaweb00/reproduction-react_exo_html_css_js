import React, { useEffect, useState } from 'react'
import carrouElem1 from "../images/fruits/image.png"
import carrouElem2 from "../images/fruits/image copy 6.png"
import carrouElem3 from "../images/fruits/image copy 3.png"
import CarrouselFunction from '../carrouselproduits/carrouselfunction/CarrouselFunction';
import NavBar from '../navbar_et_footer/NavBar';

function Fruit() {
    const [fruits, setFruits] = useState([]);
    const [erreur, setErreur] = useState('');
    const [n, setN] = useState(0);


    useEffect(() => {
        fetch('/fruitjson/fruit.json')
            .then((response) => {
                if (!response) {
                    throw new Error('Erreur lors du chargement de la page');
                }
                return response.json()
            }).then((data) => {
                setFruits(data)
            }).catch((e) => {
                setErreur(e.message);
            })
    })

    if (erreur) return <p>Erreur: {erreur}</p>

    return (
        <div>
             <NavBar n={n} />
            <CarrouselFunction produit1={carrouElem1} produit2={carrouElem2} produit3={carrouElem3} />
            <h1 className='text-center fw-bold py-5'>Fruits</h1>
            <div className='d-flex flex-row flex-wrap gap-3 align-items-center justify-content-center pb-5'>
                {
                    fruits.map((fruit, k) => (
                        <div className="card" key={k} style={{ width: '18rem' }}>
                            <img src={`${fruit.image}`} alt="vetement" className="card-img-top vetement" />
                            <div className="card-body">
                                <h5 className="fw-bold card-title">{fruit.description}</h5>
                                <h5 className="text-danger fw-bold card-text">{fruit.prix}</h5>
                                <button className="btn btn-primary w-100" onClick={(e) => {
                                    e.preventDefault();
                                    console.log(e.target.closest('.card'));
                                    setN(n + 1);
                                }}>Mettre au panier</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Fruit
