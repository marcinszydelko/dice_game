let draw = function() {
  var ctx;

  ctx = document.getElementById('canvas').getContext('2d');

  ctx.lineWidth = 5;
  ctx.strokeStyle = 'blue';

  ctx.strokeRect(100, 50, 200, 300);
  ctx.fillStyle = 'green';
  ctx.fillRect(100, 50, 200, 300);
}
