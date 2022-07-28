import got from 'got'

export default async function handler(req, res) {
    if (req.method == "GET") {
        let { id } = req.query
        id = id.replaceAll("-", "_")
        let img_strm = got.stream(`https://yts.mx/assets/images/movies/${id}/large-cover.jpg`)
        img_strm.pipe(res)
        return

    } else {
        res.status(400).send("Invalid Request")
    }

}