import axios from "axios"

const apiKey = process.env.API_KEY
const baseUrl = 'https://api.themoviedb.org/3'
export const imagePath = 'https://image.tmdb.org/t/p/w500'
export const imagePathOriginal = 'https://image.tmdb.org/t/p/original'

export const fetchTrendings = async (timeWindow: string = 'day') => {
    const res = await axios.get(`${baseUrl}/trending/all/${timeWindow}?api_key=${apiKey}`)
    return res
}