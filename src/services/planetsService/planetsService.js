import axios from "axios";

export class PlanetsService {
  // eslint-disable-next-line class-methods-use-this
  async getPlanets() {
    try {
      const { data } = await axios.get(
        "https://swapi.dev/api/planets/?format=json"
      );
      return data.results;
    } catch (error) {
      return console.error(error);
    }
  }
}

export default new PlanetsService();
