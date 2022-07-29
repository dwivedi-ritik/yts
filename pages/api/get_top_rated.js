import axios from 'axios'

// Server side api to get from yts

const URL = "https://yts.mx/api/v2/list_movies.json"

export default async function handler(req, res) {
    if (req.method == "POST") {
        const query = JSON.parse(req.body)
        const api_res = await axios({
            url: URL,
            method: "get",
            params: { ...query }
        })

        res.status(200).json({ data: api_res.data })

        return

    }

    res.status(400).json({ error: "invalid paramaters" })
}
