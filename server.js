const express = require('express')
const app = express()
const PORT = 8000

const players = {
    'stephen curry' : {
        'jersery number': 30,
        'salary': 43006362,
        'points per game': 32.0
    },
    'andrew wiggins' : {
        'jersery number': 22,
        'salary': 29542010,
        'points per game': 18.6
    },
    'klay thompson' : {
        'jersery number': 11,
        'salary': 35361360,
        'points per game': 0.0
    },
    'unknown' : {
        'jersery number': 0,
        'salary': 0,
        'points per game': 0.0
    }
}


app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response) => {
    const playerName = request.params.name.toLowerCase()
    
    if (players[playerName]) {
        response.json(players[playerName])
    } else {
        response.json(players['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`Server is running`)
})