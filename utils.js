const urlToBlob = async (hash) => {
    let res = await fetch(`/api/torrent/${hash}`)
    let reader = res.body.getReader()
    let strm = new ReadableStream({
        async start(controller) {
            while (true) {
                const { done, value } = await reader.read()
                if (done) {
                    break
                }
                controller.enqueue(value)
            }
            controller.close()
            reader.releaseLock()
        }
    })
    let respone = new Response(strm)
    let blob = await respone.blob()

    let url = await URL.createObjectURL(blob)
    return url
}

const imgToBlob = async (slug) => {
    let res = await fetch(`/api/image/${slug}`)
    let reader = res.body.getReader()
    let strm = new ReadableStream({
        async start(controller) {
            while (true) {
                const { done, value } = await reader.read()
                if (done) {
                    break
                }
                controller.enqueue(value)
            }
            controller.close()
            reader.releaseLock()
        }
    })
    let respone = new Response(strm)
    let blob = await respone.blob()

    let url = await URL.createObjectURL(blob)
    return url
}
module.exports = {
    urlToBlob,
    imgToBlob
}