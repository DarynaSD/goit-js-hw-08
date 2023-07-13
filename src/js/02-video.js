// додати як залежність (через npm) бібліотеки Vimeo і Lodash

//Ініціалізація плеєра у файлі скрипта 

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const locStorKey = 'videoplayer-current-time';

// player.on('play', function() {
//     console.log('played the video!');
// });


player.on('timeupdate', throttle(play, 1000));

function play(event) {
  localStorage.setItem(locStorKey, event.seconds);
};

player.setCurrentTime(JSON.parse(localStorage.getItem(locStorKey)) || 0);
