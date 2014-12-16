function sinetone(freq) {
  var phase = 0,
  phaseStep = freq / 24000;

  return {
    process: function(L, R) {
      for (var i = 0; i < L.length; i++) {
        L[i] = R[i] = Math.sin(6.28318 * phase) * 0.25;
        phase += phaseStep;
      }
    }
  };
}

module.exports = sinetone;