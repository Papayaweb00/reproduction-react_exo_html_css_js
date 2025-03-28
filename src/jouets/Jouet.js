import React, { useEffect, useState } from 'react'
import carrouElem1 from "../images/jouets/image.png"
import carrouElem2 from "../images/jouets/image copy.png"
import carrouElem3 from "../images/jouets/image copy 2.png"
import CarrouselFunction from '../carrouselproduits/carrouselfunction/CarrouselFunction'
import NavBar from '../navbar_et_footer/NavBar'

function Jouet() {
    const [jouets, setJouets] = useState([])
    const [erreur, setErreur] = useState('')
    const [n, setN] = useState(0);
    const [mettre, setMettre] = useState('Mettre au panier');


    useEffect(() => {
        fetch("/jouetsjson/jouet.json")
            .then((fichier) => {
                if (!fichier) {
                    throw new Error('Erreur lors du chargement')
                }

                return fichier.json()
            }).then((donnees) => {
                setJouets(donnees)
            }).catch((e) => {
                setErreur(e.message)
            })

        if (erreur) return <p>Erreur: {erreur}</p>
    })

    return (
        <div>
             <NavBar n={n} />
            <CarrouselFunction produit1={carrouElem1} produit2={carrouElem2} produit3={carrouElem3} />

            <h1 className='text-center fw-bold py-5'>Fruits</h1>
            <div className='d-flex flex-row flex-wrap gap-3 align-items-center justify-content-center pb-5'>
                {
                    jouets.map((jouet, k) => (
                        <div className="card" key={k} style={{ width: '18rem' }}>
                            <img src={`${jouet.image}`} alt="vetement" className="card-img-top vetement" />
                            <div className="card-body">
                                <h5 className="fw-bold card-title">{jouet.description}</h5>
                                <h5 className="text-danger fw-bold card-text">{jouet.prix}</h5>
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

export default Jouet
