const playVideo = require('./playVideo');

function openCamera() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true})
    .then(stream => playVideo())
    .catch( err => console.log(err));
}

module.exports = openCamera;