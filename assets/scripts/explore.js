// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const voiceSelect = document.getElementById("voice-select")
  const inputTxt = document.getElementById("text-to-speak");
  const smileyFace = document.querySelector('#explore img');
  const talk = document.querySelector('button')


  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    if (voices.length === 0) return;

    voiceSelect.innerHTML = '';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  } 

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talk.addEventListener('click', smileyTalk);

  function smileyTalk() {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    smileyFace.src = 'assets/images/smiling-open.png';

    synth.speak(utterThis);

    const checkSpeaking = setInterval(() => {
      if(synth.speaking) {
        smileyFace.src = 'assets/images/smiling-open.png';
      }
      else {
        smileyFace.src = 'assets/images/smiling.png';
        clearInterval(checkSpeaking);
      }
    }, 100);
  }
}