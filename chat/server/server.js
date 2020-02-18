// 'use strict';

// const net = require('net');

// const port = process.env.PORT || 3001;
// const server = net.createServer();

// server.listen(port, () => console.log(`Server up on ${port}`));

// let allowedEvents = ['create', 'read', 'update', 'delete', 'error', 'attack'];
// let socketPool = {};

// server.on('connection', (socket) => {
//   const id = `Socket-${Math.random()}`;
//   socketPool[id] = socket;
//   socket.on('data', (buffer) => dispatchEvent(buffer));
//   socket.on('error', (e) => { console.log('SOCKET ERROR', e); });
//   socket.on('end', (e) => { delete socketPool[id]; });
// });

// server.on('error', (e) => {
//   console.error('SERVER ERROR', e.message);
// });

// let dispatchEvent = (buffer) => {

//   try {
//     let command = JSON.parse(buffer.toString().trim());

//     // Push to the pool that matches the event name
//     // You could also skip this check to simply allow any event to pass through
//     if (allowedEvents.includes(command.event)) {

//       for (let socket in socketPool) {
//         let event = JSON.stringify(command);
//         socketPool[socket].write(event)
//       }
//     }
//     else {
//       console.log(`IGNORE ${command.event}`);
//     }
//   } catch (e) { throw new Error(e); }
// };

'use strict';

const net = require('net');
const PORT = process.env.PORT || 3001;
const server = net.createServer();

let socketPool = {};

server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  socketPool[id] = socket;
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('end', () => delete socketPool[id]);
  socket.on('error', (e) => console.error('Socket ERR:', e));
});

function dispatchEvent(buffer) {
  let message = JSON.parse(buffer.toString().trim());
  broadcast(message);
}

function broadcast(message) {
  let payload = JSON.stringify(message);
  for (let socket in socketPool) {
    socketPool[socket].write(payload);
  }
}

server.listen(PORT, () => {
  console.log(`listening on the coolest port: ${PORT}`);
});