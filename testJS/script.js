/* Объявления классов */

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }

  createSong() {
    const trackContainer = document.createElement('div');
    const artistElement = document.createElement('h4');
    const titleElement = document.createElement('p');
    const songButtonElement = document.createElement('button');

    trackContainer.classList.add('song');
    artistElement.classList.add('song__artist');
    artistElement.textContent = this.artist;
    titleElement.classList.add('song__title');
    titleElement.textContent = this.title;
    songButtonElement.classList.add('song__like');

    trackContainer.appendChild(artistElement);
    trackContainer.appendChild(titleElement);
    trackContainer.appendChild(songButtonElement);

    this.songElement = trackContainer;

    return trackContainer;
  }

  setEventListeners() {
    this
      .songElement
      .querySelector('.song__like')
      .addEventListener('click', this.like);
  }

  like(event) {
    event.target.classList.toggle('song__like_active');
  }
}

class Playlist {
  constructor(container) {
    this.container = container;
    this.songs = [];
  }

  render() {
    const noSongsElement = document.querySelector('.no-songs');

    if (this.songs.length === 0) {
      noSongsElement.classList.remove('no-songs_hidden');
    } else {
      noSongsElement.classList.add('no-songs_hidden');
    }
  }

  addSong(songElement) {
    this.songs.push(songElement);
    this.container.appendChild(songElement);
    this.render();
  }

  reset() {
    this.songs = [];
    this.container.innerHTML = '';
    this.render();
  }
}

/* Переменные */

const resetButton = document.querySelector('.input__btn_reset');
const form = document.forms.add;
const playlist = new Playlist(document.querySelector('.songs-container'));

playlist.render();

/* Слушатели событий */

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = form.elements.title;
  const artist = form.elements.artist;
  const song = new Song(title.value, artist.value);

  playlist.addSong(song.createSong());
  song.setEventListeners();
  form.reset();
});

resetButton.addEventListener('click', function () {
  playlist.reset();
  playlist.render();
});