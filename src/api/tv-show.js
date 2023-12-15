import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {
  static async fetchPopular() {
    const response = await axios.get(`${BASE_URL}/tv/popular${API_KEY_PARAM}`);
    return response.data.results;
  }
}
