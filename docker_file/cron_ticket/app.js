const cron = require('node-cron');

let time = 0;
cron.schedule('1-59/5 * * * * *', () => {
  time++;
  console.log('Tick cada 5 segundos: ', time);
});

console.log('Inicio');