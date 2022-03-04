const axios = require('axios')
const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyOTAiLCJuYmYiOjE2NDYzNTU5NDEsImV4cCI6MTY0ODk0Nzk0MSwiaWF0IjoxNjQ2MzU1OTQxfQ.ZsXwnM0sp27TNJfPXNnONn6XlmtoTxlFRA6Tm8WaIUg"


const apiAnime = axios.create({
    baseURL: 'https://api.aniapi.com/v1',
    headers: {Authorization: `Bearer ${auth}`}
})

module.exports = apiAnime