// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelector = document.getElementById('horn-select');
  const hornImg = document.querySelector('#expose img');
  const hornAudio = document.querySelector("[type='audio']");
  
  const sliderVol = document.getElementById('volume');
  const sliderIcon = document.querySelector('#volume-controls img');

  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelector.addEventListener('change', changeHorn);
  sliderVol.addEventListener('input', adjustVolume);
  playButton.addEventListener('click', playSound);

  
  function changeHorn() {
    const hornSelected = hornSelector.value;
    hornImg.src = `assets/images/${hornSelected}.svg`;
    hornAudio.src = `assets/audio/${hornSelected}.mp3`;
  }

  function adjustVolume() {
    const volume = Number(sliderVol.value);
    hornAudio.volume = volume / 100;

    if(volume === 0) {
      sliderIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if(volume < 33) {
      sliderIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if(volume < 67) {
      sliderIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      sliderIcon.src = 'assets/icons/volume-level-3.svg';
    }
  }

  function playSound() {
    hornAudio.play();

    if(hornSelector.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  }
}