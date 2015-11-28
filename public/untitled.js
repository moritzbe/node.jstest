var token = 'LOodo1Ag%2BuFI57oWF28Z1ugDpa1xxl88QG3vuj%2Bo3LEXLB6o%2FhXnfba6pSkPS75DAdeirNRinGHZJn08AKAx3MTBAMaUkL4Gyx79XzHD3ZhP%2ByU30I40nE6oVbr6%2BDkPDcWumx11mWFHuZa%2Bzd%2BpbnICWxG4FWlnUMBVqjwi1izObHO7bAS5hgRF%2B%2FJ7i74fKInGw81qvjv5lUlAcFJikg0PKV9bJGXWoLdJldMsYXE24ralaonnC463uWgpgxSGU010plqvzBMV3Uo%2BFEh9mN3X4IEFFqOO%2FDCPLWFqAq1I6P%2FRBA5MOwf2vZfKu3%2BOJ8Q4ylpJOJfUa3nFnUE3jkkn0HHXO9LuCHCM7VI2aMdS9rKomliBvGodoGmjCNqzhZrrtfzD5kMeI7A0AYeXnRolEVelleZ1I3kxQ3hVBzYy95TWdvT9Zau2qq1OR4VAUY%2BVKpmRWOyEf7WOhpPtx3mdkvt5soGqvZJHMw3CI9EJxeIypQuNXiyAhC9zaLKkosls9Gb3vmG4JeB5dcm8FkRwduE9zP3hN8xdWkjv0lNV7VRkNMhXWFDWgMqxcXoyets1m9R0X9tKirjLO9OtiTiLlySI3Og2lCWQthQFmqKnSqZFv02WRgaoL%2F9E%2BWucyoFur7cdJ%2BIehXcpTK1Ent98lhLj8mqcxhuHVkDhj%2B626yt1tmsii61w1QsJNA9Jo2vuDircbY71GfHPAbnkOryN3F2Rzc22Xuk%2FQZAYo%2FI3mXgExmO61doBiWJewkRHs59v2yVttNS7cNq98St7fKS%2FcrFRKMsQ0xoP7ehVzGTQjl8%2FNI3VsHpPKawRUqUBczpwAZ0z3Li7IkPXqbrNJBmYCnCmm8vdS1kVLaI%2BG5FiW4pB%2Bkc5ez%2FcMk4LDwhI';

var wsURI = "wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize?watson-token=" + token
  + "&model=en-US_BroadbandModel";

var WebSocket = require('ws');
console.log(wsURI);
var websocket = new WebSocket(wsURI);


// When the connection is open, send some data to the server
websocket.onopen = function () {
        console.log ( 'Connection established' );

        var message = {'action': 'start', 'content-type': 'audio/l16;rate=22050'};
		websocket.send(JSON.stringify(message));
        
        var audio_file = 'test-ton.wav';
        connection.send(audio_file);
};

// Log errors
websocket.onerror = function (error) {
        console.log('WebSocket Error ' + error);
};

// Log messages from the server
websocket.onmessage = function (e) {
        console.log('Server: ' + e.data);
}



websocket.onclose = function(evt) { 
		console.log('Connection closed');
 };








//socket.send(blob);

function onMessage(evt) {
  console.log('recognition result in json format: ' + evt.data);
}


//var end = {'action':'stop'};

//{"state":"listening"}

websocket.close();






