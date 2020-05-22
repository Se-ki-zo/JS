const container = document.querySelector('.container');
const songsContainer = container.querySelector('.songs-container');
const addButton = container.querySelector('.input__btn_add');
const resetButton = container.querySelector('.input__btn_reset');
const artistInput = document.querySelector('.input__text_artist');
const songInput = document.querySelector('.input__text_song');
const coverHeading = document.querySelector('.cover__heading');
const form = document.forms.add;
const artist = form.elements.artist;
const song = form.elements.song;
const playListTitles = [
    'Игорь Тальков. Лучшее',
    'Музыка категории Б',
    'Подборка с фестиваля FYRE'
];

function doubleClickHandler(event) {
    event.target.textContent = playListTitles[Math.floor(Math.random() * playListTitles.length)];

    document.querySelector('.cover__heading').removeEventListener('dblclick', doubleClickHandler);
}

document.querySelector('.cover__heading').addEventListener('dblclick', doubleClickHandler);


function renderAdded() {
    const songs = songsContainer.querySelectorAll('.song');
    const noSongsElement = container.querySelector('.no-songs');

    if (songs.length === 0) {
        resetButton.setAttribute('disabled', true);
        resetButton.classList.add('input__btn_disabled');
        noSongsElement.classList.remove('no-songs_hidden');
    } else {
        resetButton.removeAttribute('disabled');
        resetButton.classList.remove('input__btn_disabled');
        noSongsElement.classList.add('no-songs_hidden');
    }
}

// функция принимает два параметра
function createSong(artistValue, songValue) {
    // выносим логику создания элемента из функции addSong
    const trackContainer = document.createElement('div');
    trackContainer.classList.add('song');

    const artistElement = document.createElement('h4');
    artistElement.classList.add('song__artist');
    artistElement.textContent = artistValue; // первый параметр используем здесь

    const titleElement = document.createElement('p');
    titleElement.classList.add('song__title');
    titleElement.textContent = songValue; // а второй здесь

    const songButtonElement = document.createElement('button');
    songButtonElement.classList.add('song__like');

    trackContainer.appendChild(artistElement);
    trackContainer.appendChild(titleElement);
    trackContainer.appendChild(songButtonElement);

    // необходимо вернуть элемент трека
    return trackContainer;
}

function addSong(event) {
    event.preventDefault();

    const form = document.forms.add;
    const artist = form.elements.artist;
    const song = form.elements.song;

    // вызываем функцию createSong, передавай ей аргументы
    const trackContainer = createSong(artist.value, song.value);

    // дальше ничего не изменилось
    songsContainer.appendChild(trackContainer);

    form.reset();

    renderAdded();

    addButton.setAttribute('disabled', true);
    addButton.classList.add('input__btn_disabled');
}

function resetPlaylist() {
    songsContainer.innerHTML = '';

    renderAdded();
}

addButton.addEventListener('click', addSong);
resetButton.addEventListener('click', resetPlaylist);

renderAdded();

songsContainer.addEventListener('click', function (event) { //NEW
    if (event.target.classList.contains('song__like')) {
        event.target.classList.toggle('song__like_active');
    }
});

form.addEventListener('input', function (event) {
    const form = event.currentTarget;
    const artist = form.elements.artist;
    const song = form.elements.song;

    if (artist.value.length === 0 || song.value.length === 0) {
        addButton.setAttribute('disabled', true);
        addButton.classList.add('input__btn_disabled');
    } else {
        addButton.removeAttribute('disabled');
        addButton.classList.remove('input__btn_disabled');
    }
});