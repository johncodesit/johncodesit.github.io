import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import PlanetSelect from "../../PlanetSelect/PlanetSelect";
import Modal from "../../Modal/Modal";
import Logo from "../../../img/starWarsLogo.png";
import planetsService from "../../../services/planetsService/planetsService";
import "./HomeView.css";

export default function HomeView(props) {
  const [selectedPlanet, setSelectedPlanet] = useState({});
  const [planets, setPlanets] = useState([]);
  const [selectedPlanetImage, setSelectedPlanetImage] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const planetImagesArray = [
    {
      name: "Tatooine",
      image: "https://www.universeguide.com/small/planet/tatooine.jpg",
    },
    {
      name: "Alderaan",
      image:
        "https://miriamseidel.com/wp-content/uploads/2017/01/SnowballPlanet.jpg",
    },
    {
      name: "Yavin IV",
      image: "https://pbs.twimg.com/media/ESilZ_OWsAM-Hpn.jpg",
    },
    {
      name: "Hoth",
      image:
        "https://i.pinimg.com/originals/e0/c9/bd/e0c9bd2e3166c58a9aea8bb85f20e8a9.jpg",
    },
    {
      name: "Dagobah",
      image:
        "https://i.pinimg.com/originals/72/76/16/727616fdc990d43935ce284c695000d0.jpg",
    },
    {
      name: "Bespin",
      image:
        "https://www.astrobio.net/wp-content/uploads/2005/06/Gallery_Image_728.jpg",
    },
    {
      name: "Endor",
      image:
        "http://pm1.narvii.com/6269/ebf3db35056888752725c16026eea8e971dca4ec_00.jpg",
    },
    {
      name: "Naboo",
      image:
        "https://i.pinimg.com/originals/d0/6a/a4/d06aa46571fddea9ee58c841d996fe47.jpg",
    },
    {
      name: "Coruscant",
      image:
        "https://i.pinimg.com/originals/17/a3/fd/17a3fdc7ac714ea17be17824fcd3ca83.jpg",
    },
    {
      name: "Kamino",
      image:
        "http://holocron.swcombine.com/images/1/1e/Kamino-Planet-Holocron.png",
    },
  ];

  //this array could be replaced by a custom made express + node API that consumes the images from another public API

  useEffect(() => {
    async function getPlanets() {
      const planets = await planetsService.getPlanets();
      setPlanets(planets);
    }
    getPlanets();
  }, []);

  //used a 'planetService' in order to keep good practices: API calls should be done by a dedicated service. Could have use fetch instead.

  function handlePlanetChange(e, data) {
    setSelectedPlanet(
      planets.find((planet) => planet.name === data.props.value)
    );
    setSelectedPlanetImage(
      planetImagesArray.find((element) => element.name === data.props.value)
    );
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <div className="home-container">
      <div className="home-actions-container">
        <img src={Logo} alt="StarWarsLogo" className="star-wars-logo" />
        {/* By importing the logo image instead of using relative routes you save deployment issues and future bugs */}
        <Typography variant="h6" className="header">
          Select a Star Wars Planet!
        </Typography>
        <PlanetSelect options={planets} onPlanethChange={handlePlanetChange} />
        <Typography variant="h6" className="header">
          Listen the original soundtrack!
        </Typography>
        <audio controls className="audio">
          <source
            src="https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          planetData={selectedPlanet}
          planetImage={selectedPlanetImage}
        />
      </div>
    </div>
  );
}
