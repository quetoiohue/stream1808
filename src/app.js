const openCamera = require('./openCamera');

const $ = require('jquery');
const Peer = require('simple-peer');

const p = new Peer({ initiator: location.hash === '#1' , trickle: false});

p.on('signal' , token => { 
    $('#txtMysignal').val(JSON.stringify(token))
 });
 p.on('connect', (connect) => {
    console.log('CONNECT');
  })
  
 $('#btnConnect').click(() => {
     const tokenFriend  = JSON.parse($('#txtFriendsignal').val());
     p.signal(tokenFriend);
 });

