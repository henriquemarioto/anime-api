<h1 align="center">
	<img src="https://scontent.fbat1-1.fna.fbcdn.net/v/t1.18169-9/25660201_1538102879578655_255806531285803801_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeG8pA4K9HP3X9i17KwG2uJFxyMwh7xZz7bHIzCHvFnPtus8mxP2udaBp5sGpxOEI2vb87cFTHoWos3mJpyifYOa&_nc_ohc=eEChrTU56hQAX8bzecS&_nc_ht=scontent.fbat1-1.fna&oh=00_AT-T6quiIVTSjckXLTC-pyx6dCq1vwQ4q7sfsVfwGb2QEg&oe=624F5801" />
</h1>

 <h1 align="center">anime-api</h1>

*Api intermediária para consumir a AniAPI: https://aniapi.com/*

Nessa api você pode:

 - Pesquisar animes pelo nome 🥷.
 - Obter animes aleatórios ⛩️.



## EndPoints
A API tem no total 3 endpoints, um para pesquisa por nome, um para obter 5 animes aleatórios e outro para obter um numero desejado de animes aleatórios. (A api só possui metodos GET)

A url base da API é: [localhost:3000](localhost:3000)
<hr>

## <center>Pesquisar anime por nome</center>

`GET /anime/:nome - FORMATO DA RESPOSTA - STATUS 200`

*ex: localhost:3000/anime/demon slayer*

```json
[
	{
		"name": "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
		"description": "After visiting the Rengoku residence, Tanjirou and his comrades volunteer for a mission within the Entertainment District, a place where desires are sold and demons dwell. They journey alongside the flashy Sound Hashira, Tengen Uzui, in search of a monstrous foe terrorizing the town. Sworn to slay creatures of the night, the hunt continues.\n<br><br>\n(Source: Funimation)\n<br><br>\n<i>Note:<br>\n- The first episode aired with a runtime of ~47 minutes.<br>\n- The last episode aired with a runtime of ~33 minutes.</i>",
		"img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142329-Oa6NT07c5KOn.jpg"
	},
	{
		"name": "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
		"description": "This Demon Slayer movie sees Tanjiro Kamado and friends from the Demon Slayer corps board the Infinity Train on a new mission to investigate a mysterious series of disappearances, perpetrated by a demon who has been tormenting people and killing the demon slayers who oppose it.",
		"img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112151-1qlQwPB1RrJe.png"
	},
	...
]
```
## <center>Obter 5 animes aleatórios</center>

`GET /random - FORMATO DA RESPOSTA - STATUS 200`

*ex: localhost:3000/random*
```json
[
	{
		"id": 16104,
		"name": "The One that Heads to Tomorrow",
		"description": "A music video for \"Ashita e Mukau Hito\" by Yoshiko Hanzaki.",
		"img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/104096-ckjPWsSgBnsg.jpg",
		"start_date": "06/04/2015"
	},
	{
		"id": 11480,
		"name": "Bird's Song; Bird's Poem",
		"description": "A boy is walking home through the city where he finds a new path that he follows. It starts to rain and he sheeks shelter with the aid of a girl. He falls in love with the girl. He gets a feather, and if he always carries it, they will meet again. He returns to his home following the path, but the next day he cant find it again. Time progresses and he forgets the girl. 50 years later he returns to the same city and he dreams of the girl. He is still dutifully carrying the feather. <br><br>\nWritten, drawn, and directed by famed illustrator Yoshitaka Amano. <br><br>\n(Source: AniDB, ANN) ",
		"img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5819-C0s7Hxz8lQBC.png",
		"start_date": "30/01/2007"
	},
	{
		"id": 8328,
		"name": "それいけ!アンパンマン みんな集まれ!アンパンマンワールド",
		"description": "Baikinman turns Anpanman and friends into babies by using the red water from a mysterious fountain that turns anyone who touches it into a baby.<br>\n<br>\n<i>Some sources list the movie having 3 episodes that total of 30min</i>",
		"img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b143548-yvvQsbQfvz06.jpg",
		"start_date": "16/07/1994"
	},
	{
		"id": 2369,
		"name": "Samurai Flamenco",
		"description": "Hazama Masayoshi has decided to become the superhero Samurai Flamenco in spite of having no special abilities or modifications. Goto Hidenori is a police officer who learns his secret identity by chance, which causes him all sorts of trouble.\n<br><br>\n(Source: Anime News Network)",
		"img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx19365-Q6AIDGI2139N.jpg",
		"start_date": "11/10/2013"
	},
	{
		"id": 17167,
		"name": "YELL",
		"description": "Music video for the song by Ikimonogakari that was featured on NHK's Minna no Uta program.",
		"img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b145374-CqPLQY4Oi3oW.png",
		"start_date": "01/08/2009"
	}
]
```

## <center>Obter x animes aleatórios (limite de 50)</center>

`GET /random/:number - FORMATO DA RESPOSTA - STATUS 200`

*ex: localhost:3000/random/20*
```json
[
	{
		"id": 8798,
		"name": "のだめカンタービレ フィナーレ",
		"description": "DVD special episode taking place before Episode 1 of Finale that focuses on Miki Kiyora making it to the final round of a competition in Paris.\n\n(Source: Wiki)",
		"img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx8038-b8K9nnetX8Xx.jpg",
		"start_date": "07/04/2010"
	},
	{
		"id": 5090,
		"name": "Sailor Moon R: The Movie",
		"description": "When Mamoru was little he gave a rose to a little boy named Fiore. Fiore promised that one day he would bring Mamoru lots of flowers. Now Fiore has come back to earth but his intentions are not merely to fulfil a promise...\n<br><br>\n(Source: Anime News Network)",
		"img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx531-UMYCfO107YQO.jpg",
		"start_date": "05/12/1993"
	},
	{
		"id": 8477,
		"name": "Dragon Ball Specials",
		"description": "Specials included with the original series.<br><br><strong>Goku no Koutsuuanzen</strong> (Goku's Traffic Safety)<br>\nGoku is heading to West City to attend Bulma's birthday party, and on the way he ends up learning the rules for getting through traffic. The movie was for children to watch so it would teach them how to get across a pedestrian crossing.<br><br><strong>Goku no Shouboutai</strong> (Goku's Fire Brigade)<br>\nAn episode for kids where Goku and the others work for the Fire brigade and explain how avoid problems with fire.",
		"img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2520.jpg",
		"start_date": "01/01/1988"
	},
	...
]
```

