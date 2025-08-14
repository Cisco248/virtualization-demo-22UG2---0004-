const buttonElement = document.getElementById('getDataBtn');

buttonElement.addEventListener('click', async() => {
    try {
        const res = await fetch('http://localhost:3000');
        const data = await res.json();

        const outElement = document.getElementById('output');
        outElement.textContent = JSON.stringify(data, null, 2);

    } catch (error){
        console.log("Error: ", error);
    }
})