const videoPlayer = document.querySelector('#player');
const canvasElement = document.querySelector('#canvas');
const captureButton = document.querySelector('#capture-btn');
const timerButton = document.querySelector('#timer-btn');
const timerLabel = document.querySelector('#timer-label');
const newImages = document.querySelector('#newImages');

const width = 320;
const height = 240;
let Timer = 3000;
let   zIndex = 1;

// startMedia => activer la camera et demarer le stream
const startMedia = () => {
    if (!('mediaDevices' in navigator)) {
      navigator.mediaDevices = {};
    }
  
    if (!('getUserMedia' in navigator.mediaDevices)) {
      navigator.mediaDevices.getUserMedia = (constraints) => {
        const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  
         if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not supported'));
          } else {
            return new Promise((resolve, reject) => getUserMedia.call(navigator, constraints, resolve, reject));
          }
      };
    }
  
    navigator.mediaDevices.getUserMedia({video: true})
      .then((stream) => {
        videoPlayer.srcObject = stream;
        videoPlayer.style.display = 'block';
      })
    .catch((err) => {
        alert('Aucune camera est active')
    });
  };

// capturer l'image
captureButton.addEventListener('click', (event) => {
    
  const context = canvasElement.getContext('2d');
  setTimeout(function () {
    canvasElement.style.display = 'block';
    videoPlayer.style.display = 'none';
    context.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);

    videoPlayer.srcObject.getVideoTracks().forEach((track) => {
   });
 
   let picture = canvasElement.toDataURL();
   // la photo a enregistrer
   console.log(picture);
    
    }, Timer);
  
  
});

function timerAnimation() {
 
}

timerButton.addEventListener('click', (event) => {
    if (Timer==5000){
        Timer=1000;
    }
    else{
        Timer+=1000;    
    }
    timerLabel.innerHTML=Timer/1000;
  });

window.addEventListener("load", (event) => startMedia());