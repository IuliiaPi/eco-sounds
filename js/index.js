import playList from './playList.js';
console.log(playList);


const listItems = document.querySelector('.list-items');
const backgroundImage = document.querySelector('.main');

playList.forEach((item, index) => {   // or  for(let i = 0; i < playList.length; i++) { }
    const li = document.createElement('li');
    li.classList.add('item');

    li.textContent = item.title;  // or li.textContent = `${playList[index].title}`;
    listItems.append(li);
    // audio.src = item.src;

    li.addEventListener('click', toggleBtn);
    // btnPlay.classList.add('play');
    li.addEventListener('click', (e) => {
        backgroundImage.style.backgroundImage = `url(${item.image})`;
        // li.classList.add('_active');
        // backgroundImage.style.backgroundImage = "url('./assets/images/solovey.jpg')";
        // backgroundImage.url = playList[index].image;
        // document.body.style.backgroundImage = `url(${playList[index].image})`;
    });

});


// player  

const btnPlay = document.querySelector('.play');

let isPlay = false;

function toggleBtn() {
    btnPlay.classList.toggle('pause');
    playAudioPlayer();
}
btnPlay.addEventListener('click', toggleBtn);

const audio = new Audio();

function playAudio() {
    audio.src = "./assets/audio/forest.mp3";
    // audio.src = item.src;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
}

function pauseAudio() {
    audio.pause();
    isPlay = false;
}

function playAudioPlayer() {
    if (!isPlay) {
        playAudio();
    } else {
        pauseAudio();
    }
}


// change color

let buttons = listItems.getElementsByClassName('item');
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('_active')
        };
        this.classList.add('_active');

    });
};


const logo = document.querySelector('.logo');
logo.addEventListener('click', (e) => {
    backgroundImage.style.backgroundImage = "url('./assets/images/forest.jpg')";
    audio.src = "./assets/audio/forest.mp3";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('_active')
    };
});



