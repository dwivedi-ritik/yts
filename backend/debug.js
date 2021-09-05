const axios = require("axios")

const retriveData = async (param) => {
    console.log(param)
    const URL = "https://yts.mx/api/v2/list_movies.json"

    const res = await axios({
        url: URL,
        method: "get",
        params: param
    })

    if (res.status != 400) {
        return res.data
    } else {
        return null
    }
}

const main = async () => {
    const res = await retriveData({ "query_term": "avenger" })
    console.log(res.data)
}

main()