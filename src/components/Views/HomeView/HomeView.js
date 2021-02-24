import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import PlanetSelect from '../../PlanetSelect/PlanetSelect';
import Modal from '../../Modal/Modal';
import './HomeView.css';

export default function HomeView(props) {
    const [selectedPlanet, setSelectedPlanet] = useState({});
    const [planets, setPlanets] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    // const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function fetchPlanets() {
          let res = await fetch('https://swapi.dev/api/planets/?format=json');
          let data = await res.json();
          setPlanets(data.results);
        }
        fetchPlanets();
        // setLoading(false);
      },[]);

    function handlePlanetChange(e, data) {
        setSelectedPlanet(planets.find(planet => (planet.name === data.props.value)));
        setOpenModal(true);
    }
    
      function handleCloseModal() {
        setOpenModal(false);
    }

    return (
    <div className="home-container">
        <div className="home-actions-container">
            <img src="./img/starwarsLogo.png" alt="logo" />
            <Typography variant="h2">Planet Inspector</Typography>
            <PlanetSelect options={planets} onPlanethChange={handlePlanetChange}/>
            <Modal open={openModal} onClose={handleCloseModal} planetData={selectedPlanet}/>
        </div>
    </div>
    )
}
