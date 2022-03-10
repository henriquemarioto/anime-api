const express = require('express')
const router = express.Router()
const apiAnime = require('../services/api')

router.get('/', async (req, res) => {
    await apiAnime.get('/random/anime/5/false').then(response => {
        if (response.data.status_code !== 404) {
            const dadosTratados = response.data.data.map(item => {
                return {
                    id: item.id,
                    name: item.titles.en ? item.titles.en : item.titles.jp ? item.titles.jp : item.titles.rj,
                    description: item.descriptions.en ? item.descriptions.en : item.descriptions.jp ? item.descriptions.jp : item.descriptions.rj,
                    img: item.cover_image,
                    start_date: item.start_date.slice(0, 10).split('-').reverse().join('/')
                }
            })

            res.status(200).send(dadosTratados)
        }
        else {
            res.status(404).send({ message: "Algo deu errado", error: response.data.message })
        }
    }).catch(response => {
        res.status(404).send({ message: "Algo deu errado", error: response.message })
    })
})

router.get('/:number', async (req, res) => {
    await apiAnime.get(`/random/anime/${req.params.number}/false`).then(response => {
        if (response.data.status_code !== 404) {
            const dadosTratados = response.data.data.map(item => {
                return {
                    id: item.id,
                    name: item.titles.en ? item.titles.en : item.titles.jp ? item.titles.jp : item.titles.rj,
                    description: item.descriptions.en ? item.descriptions.en : item.descriptions.jp ? item.descriptions.jp : item.descriptions.rj,
                    img: item.cover_image,
                    start_date: item.start_date.slice(0, 10).split('-').reverse().join('/')
                }
            })

            res.status(200).send(dadosTratados)
        }
        else {
            res.status(404).send({ message: "Algo deu errado", error: response.data.message })
        }

    }).catch(response => {
        res.status(404).send({ message: "Algo deu errado", error: response.message })
    })
})

module.exports = router