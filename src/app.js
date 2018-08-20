const openCamera = require('./openCamera');

const $ = require('jquery');
const Peer = require('simple-peer');
const playVideo = require('./playVideo');

openCamera(function (stream) {
    playVideo(stream , 'localStream');
    const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream });

    p.on('signal', token => {
        $('#txtMysignal').val(JSON.stringify(token))
    });
    p.on('stream' , friendStream = playVideo(friendStream , 'FriendStream'));

    $('#btnConnect').click(() => {
        const tokenFriend = JSON.parse($('#txtFriendsignal').val());
        p.signal(tokenFriend);
    });

})
