import axios from "axios"
const MAIN_URL = "https://yts.mx/api/v2/movie_details.json"

export default async function handler(req, res) {
    if (req.method == "GET") {
        const { movie_id } = req.query
        const query = {
            "movie_id": movie_id
        }

        let api_res = await axios({
            url: MAIN_URL,
            method: "get",
            params: { ...query }
        })

        let response = await api_res.data
        res.status(200).json({ response: response.data })
        return
    } else {
        res.status(400).send("Invalid Request")
    }
}