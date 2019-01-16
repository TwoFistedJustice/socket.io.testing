const client = require ('socket.io-client')

const url = 'http://localhost:3000/';
const socket = client (url);
const socket2 = client (url);

// var testServer = require('./testServer');

const expect = require ('expect');

const seedRooms = {
  one: 'Room1',
  two: 'Room2',
}

describe ('Suite of unit tests', function () {
  var rooms;
  
  before ((done) => {
    var testServer = require('./testServer');
    
    socket.on ('connect', function () {
      socket.emit('join', seedRooms.one);
    });
    
    socket2.on ('connect', function () {
      socket2.emit('join', seedRooms.two);
    });
    
    
    socket.on('updateRoomsList', (data) => {
      rooms = data;
      console.log('Client heard the "updateRoomsList" event and passed the data:', rooms);
      done(); // runs twice as many tests, half pass
    });
    
    // done(); // runs correct number of tests, but all fail.
  });
  
  
  after((done) => {
    socket.close();
    socket2.close();
    done();
  });
  
  
  it ('should get the list of rooms', (done) => {
    // var expected = [rooms.one, rooms.two]
    // var expected = [seedRooms.two, seedRooms.one]
    var expected = ['thing1', 'thing2'];
    
    expect(rooms).toBeAn('array');
    expect (rooms).toEqual (expected);
    
    done();
  });
  
});


// I tried emitting an event from the it() and listening from the test file but that didn't work