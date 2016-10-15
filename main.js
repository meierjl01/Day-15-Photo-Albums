console.log(albums[0].images[0].url);
var sideLinks = $('.sideLinks');
var header = $('.page-header');
var content = $('.content');


//testing to get album 1 preview on the page:
var album1 = $('<div><img class="pic" src='+albums[0].images[0].url+'><span>Album 1</span></div>');
console.log(album1);
content.append(album1);
