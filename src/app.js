const openCamera = require('./openCamera');
const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');

openCamera(function(stream){
    playVideo(stream, 'localStream')
            const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream });

            p.on('signal', token => {
                $('#txtMysignal').val(JSON.stringify(token));
            });
            $('#btnConnect').click(() => {
                const tokenFriend = JSON.parse($('#txtFriendsignal').val());
                p.signal(tokenFriend);
            });
            p.on('stream' , friendStream => playVideo(stream, 'friendStream'));

});



