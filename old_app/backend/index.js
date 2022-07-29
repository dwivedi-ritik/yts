const express = require("express")
const Joi = require("joi")
const axios = require("axios")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

const retriveData = async (parameter) => {
    const URL = "https://yts.mx/api/v2/list_movies.json"

    const res = await axios({
        url: URL,
        method: "get",
        params: parameter
    })

    if (res.status != 400) {
        return res.data
    } else {
        return null
    }
}
app.get("/", (req, res) => {
    res.send({ msg: "do post request at this endpoint" })
})


app.post("/", async (req, res) => {
    const schema = Joi.object({
        "query_term": Joi.string().min(3).required(),
        "limit": Joi.number().max(50),
        "sort_by": Joi.string()
    })
    const { error, value } = schema.validate(req.body);

    if (error) {
        res.status(400).send(error.message)
        return
    }

    const result = await retriveData(req.body)
    console.log(result)

    if (result) {
        res.status(200).send(result)
        return
    }

    res.status(400).send("Bad request")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`)
})


