import SuperHero from "@/entities/SuperHero";
import axios from "axios";

const CHARACTERS_URL = "/api/characters";

export function getCharacters(search: string): Promise<Array<SuperHero>> {
  return axios
    .get(CHARACTERS_URL, {
      params: {
        search
      }
    })
    .then(response =>
      response.data.characters.map(
        (it: any) => new SuperHero(it.id, it.name, it.description)
      )
    )
    .catch((error: any): any => {
      if (error.response.status === 404) {
        return Promise.resolve([]);
      }
      console.error(error.response);
    });
}
