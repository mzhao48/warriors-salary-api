const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


class PlayerInfo {
    constructor(jerseyNumber, salary, pointsPerGame) {
        this.jerseyNumber = jerseyNumber;
        this.salary = salary;
        this.pointsPerGame = pointsPerGame;
    }
}

const players = {
    'stephen curry': new PlayerInfo(30,43006362,32.0),
    'andrew wiggins': new PlayerInfo(22,29542010,18.6),
    'klay thompson': new PlayerInfo(11,35361360,0.0),
    'draymond green': new PlayerInfo(23,22246956,7.0),
    'kelly oubre': new PlayerInfo(12,14375000,15.4),
    'james wiseman': new PlayerInfo(33,8730240,11.5),
    'kevon looney': new PlayerInfo(5,4821429,4.1),
    'kent bazemore': new PlayerInfo(26,2320044,7.2),
    'jordan poole': new PlayerInfo(3,2063280,12.0),
    'damion lee': new PlayerInfo(1,1762796,6.5),
    'eric paschall': new PlayerInfo(7,1517981,9.5),
    'alen smailagic': new PlayerInfo(6,1517981,1.9),
    'mychal mulder': new PlayerInfo(15,1517981,5.6),
    'shaun livingston': new PlayerInfo(34,666667,0.0),
    'juan toscano-anderson': new PlayerInfo(95,358295,5.7),
    'gary payton': new PlayerInfo(0,237966,2.5),
    'unknown': new PlayerInfo(0,0,0),
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

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running`)
})