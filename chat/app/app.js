// 'use strict';

// const net = require('net');

// const client = new net.Socket();

// client.connect(3001, 'localhost', () => { });

// function sendEvent(quit) {
//   const events = ['create', 'foo', 'read', 'baz', 'update', 'bing', 'rain', 'attack', 'error', 'bark', 'error'];
//   let eventName = events[Math.floor(Math.random() * events.length)];
//   let event = JSON.stringify({ event: eventName, payload: `${eventName} just happened!` });
//   client.write(event, () => {
//     if (quit) { client.end(); }
//   });
// }

// // Fire one event
// sendEvent(true);

// // Fire a random event every .5 seconds...
// // setInterval( sendEvent, 500 );

'use strict';

const inquirer = require('inquirer');
const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => {});

let name = '';
const messages = [];

function sendMessage(text) {
  console.log('sending message:', text);
  let message = `[${name}]: ${text}`;
  let event = JSON.stringify({ event: 'message', payload: message });
  client.write(event);
}

client.on('data', (data) => {
  let event = JSON.parse(data);
  if (event.event === 'message') {
    messages.push(event.payload);
    console.clear();
    messages.forEach(message => console.log(message));
    console.log('');
  }
});

async function getName() {
  console.clear();
  let input = await inquirer.prompt({ 'name': 'name', 'message': 'what is your name?' });
  name = input.name;
}

async function getInput() {
  let input = await inquirer.prompt([ { 'name': 'text', 'message': ' ' } ]);
  sendMessage(input.text);
  getInput();
}

getName();
getInput();