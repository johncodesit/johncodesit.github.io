import axios from 'axios';

export class planetsService {
    async getPlanets(){
        try {
            const {data} = await axios.get('https://swapi.dev/api/planets/?format=json');
            return data.results;
        } catch (error){
            console.error(error)
        }
    }
}

export default new planetsService();

