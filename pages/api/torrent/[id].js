import got from 'got'

const MAIN_URL = "https://yts.mx/torrent/download"

export default async function handler(req, res) {
    if (req.method == "GET") {
        const { id } = req.query
        let st = got.stream(`${MAIN_URL}/${id}`)
        st.pipe(res)
    } else {
        res.status(400).send("Not a valid request")
    }

}
