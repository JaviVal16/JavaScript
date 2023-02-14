const localGet = './spartans.json'
const apiBtnLocal = document.getElementById('getAPILocal');
const charactersDivLocal = document.getElementById('characterContLocal');

apiBtnLocal.addEventListener('click', () => {
    apiCall2();
});

const apiCall2 = () => {
    charactersDivLocal.innerHTML = '';
    fetch(localGet)
    .then(data => data.json())
    .then(info => info.forEach(personajes => {
        charactersDivLocal.innerHTML += 
        `
        <div class="card">
            <h2>${personajes.nombre}</h2>
            <img src="${personajes.img}" alt="${personajes.nommbre}">
            <p>${personajes.descripcion}</p>
        </div>
        `
    }))
};