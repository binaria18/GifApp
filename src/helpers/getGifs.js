const key = 'api_key=sq46DXBOSLTBlgcYdmrzTXLzetxWXjnr&limit=8&q='
const url = 'https://api.giphy.com/v1/gifs/search?'

export const getGifs = async (category)  => {
    const resp = await fetch(`${url}${key}${category}`)
    const { data } = await resp.json()
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs
}