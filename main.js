console.log(albums[0].images[0].url);

var div = $('<div></div>');
var album1 = $('<img class="pic" src='+albums[0].images[0].url+'><span>Album 1</span>');
console.log(album1);

console.log(div);

div.append(album1);
