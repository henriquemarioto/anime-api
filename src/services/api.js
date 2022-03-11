const axios = require('axios')

const apiAnime = axios.create({
    baseURL: 'https://api.aniapi.com/v1',
    headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
})

module.exports = apiAnime