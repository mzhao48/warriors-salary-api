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