const http = require ('http');
const data = require ('./utils/data');
const { default: characters } = require('./utils/data');


http
.createServer ((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('/rickandmorty/character')) {
        console.log(req.url);
        const id = req.url.split('/').at(-1)
        const characterFinded = data.find((character) => {
            return character.id === +id
        })


   }
})
.listen(3001) 