document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const playerName = document.querySelector('input').value

    try {
        const response = await fetch(`https://warriors-salary-api.herokuapp.com/api/${playerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h3').innerText = data.salary
    } catch(err) {
        console.log(err)
    }
}





