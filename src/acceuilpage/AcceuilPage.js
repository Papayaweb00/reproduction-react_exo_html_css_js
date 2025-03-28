import React, { useState, useEffect } from 'react'
import '../index.css'
import VueProd from '../carrouselproduits/VueProd';
import NavBar from '../navbar_et_footer/NavBar';
import { v4 as uuidv4 } from 'uuid';
// import { Link } from 'react-router-dom';

function AcceuilPage() {
    const [produit, setProduit] = useState([]);
    const [fruit, setFruit] = useState([]);
    const [legume, setLegume] = useState([]);
    const [jouet, setJouet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erreur, setError] = useState(null)
    const [n, setN] = useState(0);
    const [mettre, setMettre] = useState('Mettre au panier');
    const identifiant = uuidv4();


    useEffect(() => {
        fetch("/vetementjson/vetement.json")
            .then((response) => {
                if (!response) {
                    throw new Error('Erreur lors du chargement des données');
                }
                return response.json()
            }).then((data) => {
                setProduit(data);
                setLoading(false)
            }).catch((e) => {
                setError(e.message);
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("/fruitjson/fruit.json")
            .then((response) => {
                if (!response) {
                    throw new Error('Erreur lors du chargement des données');
                }
                return response.json()
            }).then((data) => {
                setFruit(data);
                setLoading(false)
            }).catch((e) => {
                setError(e.message);
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("/legumejson/legume.json")
            .then((response) => {
                if (!response) {
                    throw new Error('Erreur lors du chargement des données');
                }
                return response.json()
            }).then((data) => {
                setLegume(data);
                setLoading(false)
            }).catch((e) => {
                setError(e.message);
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("/jouetsjson/jouet.json")
            .then((response) => {
                if (!response) {
                    throw new Error('Erreur lors du chargement des données');
                }
                return response.json()
            }).then((data) => {
                setJouet(data);
                setLoading(false)
            }).catch((e) => {
                setError(e.message);
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Chargement....</p>
    if (erreur) return <p>Erreur: {erreur}</p>

    const produitsLimites = produit.slice(0, 4);
    const produitsLimitesFruit = fruit.slice(0, 4);
    const produitsLimiteslegume = legume.slice(0, 4);
    const produitsLimitesJouet = jouet.slice(0, 4);

    return (
        <div>
            <NavBar n={n} />
            <VueProd />
            <h1 className='text-center fw-bold py-5'>Produits</h1>
            <div className='d-flex flex-row flex-wrap gap-3 align-items-center justify-content-center pb-5'>
                {
                    produitsLimites.map((prod, k) => (
                        <div className="card" key={k} style={{ width: '18rem' }}>
                            <img src={`${prod.image}`} alt="vetement" className="card-img-top vetement" />
                            <div className="card-body">
                                <h5 className="fw-bold card-title">{prod.description}</h5>
                                <h5 className="text-danger fw-bold card-text">{prod.prix}</h5>
                                <a href='/panier' id={identifiant} className="btn btn-primary w-100" onClick={(e) => {
                                    e.preventDefault();
                                    console.log(e.target.closest('.card'));
                                    setN(n + 1);
                                    const btnId = e.target.id;
                                    setMettre(btnId)
                                    console.log(btnId);
                                }}>{mettre === identifiant ? 'Voir panier' : 'Mettre au panier'}</a>
                            </div>
                        </div>
                    ))
                }
                <a href='/vetement' className='btn btn-primary my-3'>Voir tous les vetements</a>
            </div>
            <div className='d-flex flex-row flex-wrap gap-3 align-items-center justify-content-center pb-5'>
                {
                    produitsLimitesFruit.map((prodf, k) => (
                        <div className="card" key={k} style={{ width: '18rem' }}>
                            <img src={`${prodf.image}`} alt="vetement" className="card-img-top vetement" />
                            <div className="card-body">
                                <h5 className="fw-bold card-title">{prodf.description}</h5>
                                <h5 className="text-danger fw-bold card-text">{prodf.prix}</h5>
                                <a href='/panier' className="btn btn-primary w-100" onClick={(e) => {
                                    e.preventDefault();
                                    console.log(e.target.closest('.card'));
                                    setN(n + 1);
                                    setMettre('Voir panier')
                                }}>{mettre}</a>
                            </div>
                        </div>
                    ))
                }
                <a href='/fruit' className='btn btn-primary my-3'>Voir tous les fruits</a>
            </div>
            <div className='d-flex flex-row flex-wrap gap-3 align-items-center justify-content-center pb-5'>
                {
                    produitsLimiteslegume.map((prodf, k) => (
                        <div className="card" key={k} style={{ width: '18rem' }}>
                            <img src={`${prodf.image}`} alt="vetement" className="card-img-top vetement" />
                            <div className="card-body">
                                <h5 className="fw-bold card-title">{prodf.description}</h5>
                                <h5 className="text-danger fw-bold card-text">{prodf.prix}</h5>
                                <a href='/panier' className="btn btn-primary w-100" onClick={(e) => {
                                    e.preventDefault();
                                    console.log(e.target.closest('.card'));
                                    setN(n + 1);
                                    setMettre('Voir panier')
                                }}>{mettre}</a>
                            </div>
                        </div>
                    ))
                }
                <a href='/fruit' className='btn btn-primary my-3'>Voir tous les fruits</a>
            </div>
            <div className='d-flex flex-row flex-wrap gap-3 align-items-center justify-content-center pb-5'>
                {
                    produitsLimitesJouet.map((prodf, k) => (
                        <div className="card" key={k} style={{ width: '18rem' }}>
                            <img src={`${prodf.image}`} alt="vetement" className="card-img-top vetement" />
                            <div className="card-body">
                                <h5 className="fw-bold card-title">{prodf.description}</h5>
                                <h5 className="text-danger fw-bold card-text">{prodf.prix}</h5>
                                <a href="/panier" className="btn btn-primary w-100">Mettre au panier</a>
                            </div>
                        </div>
                    ))
                }
                <a href='/fruit' className='btn btn-primary my-3'>Voir tous les jouet</a>
            </div>
        </div>
    )
}

export default AcceuilPage
