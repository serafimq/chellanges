import axios from "axios";
import config from "@/config";

export const HTTP = axios.create({
  baseURL: config.MOCK
})

export const WEATHER = axios.create({
  baseURL: config.WEATHER,
  headers: {
    'X-RapidAPI-Key': '1120c9d6f1mshe6c84b9d0ce9b84p19bedbjsn284f6092377c',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
})

export default {
  async getPopularProducts() {
    try {
      const response = await HTTP.get('/products/popular');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },

  async getProduct(id) {
    try {
      const response = await HTTP.get(`/products/${id}`, {
        headers: {
          Prefer: `code=200, example=Example ${id}`
        }
      })
      return response.data;
    } catch (e) {
      console.log(e)
    }
  },

  async getWeather(city, day) {
    try {
      const response = await WEATHER.get('/future.json',
        { params: { q: city, dt: day } })
    } catch (e) {
      console.log(e);
    }
  }
}
