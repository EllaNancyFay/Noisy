var five = require('johnny-five');
var pico = require('pico');
var board = new five.Board();

board.on('ready', function() {

  handsense = new five.Sensor({
    pin: 'A5',
    freq: 250
  });

  handsense.on('data', function() {
    console.log(this.value)
  });
});