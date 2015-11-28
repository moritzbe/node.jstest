var token = 'Jw%2B5FHEePeioi5dEmgJx5UBbjM5ZGNysrIZ2S5oYykLeOF9Gd9zIE7h1VFg3g8C2V21pjFb%2BOH8El63B2NFwu88u3IeyXMRY%2BAn6g1yLuzxczNhDhr%2FWDn8WnTbLCTzxi6bRrZ0SNQpyZ5qfoyWmkrt5k4umi2bjZrhVCHBioazQ11vYuLv1CbNOVChbAJktmBFIuIFR%2FKxs9AA2%2BE9uR3Sd3GiCpy6X6xzHE2j6wuOp9yHYxRexl6E%2FhdBdGxPrkqQNQcLaKmasB6ekZDavKP7kYq%2BaGX6OamfqSL2kUFT11qwkEtJ5kOUqFyctgCj3KIcBaF%2BkW4lbJ63GCQ16RiRQjJF4odAsBu1l5pOD8hxh4qehaad2vhLa2i5iRhWQFWeq8fT%2BtT3OuqjjLfhuHz1z08aYjyRyT9WqOep9kFVey1hAG88WdpeqfU7hfcqIzPkv%2BZ0RTj5ATx0vcgVTwthY3HoR46LZ%2BaZnkFuJinywegIPmwgmgKEAmtUoo9nMCbCYTMX278h3HwQ6IXqFy7aG4P%2BDxk%2BDhLhnta%2B41GckW03eC6UuKkq0o%2B01ZJsfUl6Rw4pMxOmR6htrmd3%2FWeGBLMxHWQ%2FoBOCrmCl5rkA7%2FwQ%2F0OHpwHZ4ZPKDOYKRW4PtmVPjBDzr0oLu2jTPq4KzoB%2FvT2eV8y17tQ3RC6dVmqCKCEWSw5FG5%2FBaQ0eX%2FeLy0ReHXPKZdIqc%2FdWywmERXPpVkTQmGSuVopq3M%2B%2FZNDjfu4Rw2m3iuExcqnmqAsumAHAGdHUBoZ5yAQdSjAhGFy22OgIqrDiyVVr%2FQXziBFN481YBKn%2Bd7HFbkwXL95w9EFVqUZDCY4UVKzb2wHJ3YUj1Z%2BKPtyQ8LBQRR07Z62lnBByuJQeo67LaoItq';

var wsURI = "wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize?watson-token=" + token
  + "&model=en-US_BroadbandModel";

//var WebSocket = require('ws');
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






