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
            <img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png" alt="StarWarsLogo" className="star-wars-logo"/>
            <Typography variant="h6" className="header">Select a Star Wars Planet!</Typography>
            <PlanetSelect options={planets} onPlanethChange={handlePlanetChange}/>
            <Typography variant="h6" className="header">Listen the original soundtrack while you browse!</Typography>
            <audio controls autoplay className="audio">
                <source src="https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3" type="audio/mpeg" />
            </audio>
            <Modal open={openModal} onClose={handleCloseModal} planetData={selectedPlanet}/>
        </div>
    </div>
    )
}
