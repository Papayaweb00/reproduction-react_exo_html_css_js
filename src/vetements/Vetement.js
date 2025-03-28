import React, { useEffect, useState } from 'react'
import carrouElem1 from "../images/vetements/image copy 16.png"
import carrouElem2 from "../images/vetements/image copy 21.png"
import carrouElem3 from "../images/vetements/image copy 2.png"
import CarrouselFunction from '../carrouselproduits/carrouselfunction/CarrouselFunction'
import NavBar from '../navbar_et_footer/NavBar'

function Vetement() {
    const [vetement, setVetement] = useState([])
    const [erreur, setErreur] = useState('')
    const [n, setN] = useState(0);
    const [mettre, setMettre] = useState('Mettre au panier');

    useEffect(() => {
        fetch('/vetementjson/vetement.json')
            .then((fichier) => {
                if (!fichier) {
                    throw new Error('Erreur lors du chargement')
                }
                return fichier.json()
            }).then((data) => {
                setVetement(data)
            }).catch((e) => {
                setErreur(e.message)
            })
        if (erreur) return <p>Erreur: {erreur}</p>
    })

    return (
        <div>
            <NavBar n={n} />
            <CarrouselFunction produit1={carrouElem1} produit2={carrouElem2} produit3={carrouElem3} />
            <h1 className='text-center fw-bold py-5'>Vetements</h1>
            <div className='d-flex flex-row flex-wrap gap-3 align-items-center justify-content-center pb-5'>
                {
                    vetement.map((habit, k) => (
                        <div className="card" key={k} style={{ width: '18rem' }}>
                            <img src={`${habit.image}`} alt="vetement" className="card-img-top vetement" />
                            <div className="card-body">
                                <h5 className="fw-bold card-title">{habit.description}</h5>
                                <h5 className="text-danger fw-bold card-text">{habit.prix}</h5>
                                <button className="btn btn-primary w-100" onClick={(e) => {
                                    e.preventDefault();
                                    console.log(e.target.closest('.card'));
                                    setN(n + 1);
                                    setMettre('Voir panier')
                                }}>{mettre}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Vetement
