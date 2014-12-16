var five = require('johnny-five');
var pico = require('node-pico');
var board = new five.Board();
var sinetone = require('./sinetone')

board.on('ready', function() {

  var freq;

  handsense = new five.Sensor({
    pin: 'A5',
    freq: 250
  });

  handsense.on('data', function() {
    console.log(this.value);
    freq = this.value;
  });

  setInterval(function() {
    pico.play(sinetone(freq)).pause();
  },250);

});