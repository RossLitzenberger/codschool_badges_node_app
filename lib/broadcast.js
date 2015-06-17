'use strict';

var axon = require('axon');
var socket = axon.socket('pub');

/**
 *  Bind the pub socket to localhost:8001
 */
socket.bind(8001);

/**
 *  publish the badge to the pub/sub system
 */
exports.send = function(badge){
  socket.send(badge);
};
