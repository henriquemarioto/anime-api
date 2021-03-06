const express = require('express')
const router = express.Router()
const apiAnime = require('../services/api')

router.get('/:title', async (req, res) => {
    await apiAnime.get(`https://api.aniapi.com/v1/anime?title=${req.params.title}`)
    .then(response => { 
        if(response.data.status_code !== 404){
            const dadosTratados = response.data.data.documents.map(item => {
                console.log(item)
                return {
                    id: item.id,
                    name: item.titles.en,
                    description: item.descriptions.en,
                    img: item.cover_image,
                    start_date: item.start_date.slice(0, 10).split('-').reverse().join('/')
                }

            })

            res.status(200).send(dadosTratados) 
        }
        else{
            res.status(404).send({ message: "Algo deu errado", error: response.data.message })
        }
        
    }).catch(response => { 
        res.status(404).send({ message: "Algo deu errado", error: response.message })
    })
})

module.exports = router

