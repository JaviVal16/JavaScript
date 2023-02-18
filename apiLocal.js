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
            <div id="container">
            <img src="${personajes.img}" alt="${personajes.nommbre}">
                <div class="box-text">
                    <h3>${personajes.nombre}</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            <p>${personajes.descripcion}</p>
        </div>
        `
        }))
};
