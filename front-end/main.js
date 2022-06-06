// document.querySelector('button').addEventListener('click', apiRequest)
document.querySelector('select').addEventListener('change', apiRequest)

async function apiRequest() {
    const playerName = document.querySelector('select').value

    try {
        const response = await fetch(`https://warriors-salary-api.herokuapp.com/api/${playerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h3').innerText = data.salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } catch(err) {
        console.log(err)
    }
}





