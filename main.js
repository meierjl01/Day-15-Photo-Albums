// console.log(albums[0].images[0].url);
var sideLinks = $('.sideLinks');
var header = $('.page-header');
var content = $('.content');


//testing to get album 1 preview on the page:
// var album1 = $('<div><img class="pic" src='+albums[0].images[0].url+'><span>Album 1</span></div>');
// console.log(album1);
// content.append(album1);


//For Each: need to take each album and also include, the hash for location, their Preview image, and their name in a span.
//Need to append that to the content container, like in the test above
albums.forEach(function(album, i, arr) {
  var albumPreviewItem = $('<a class="previewItem" href="' + album.hash + '"><img src = "' + album.images[0].url + '" /img><h2>' + album.albumName + '</h2></a>');
  content.append(albumPreviewItem);
});


// when an album is clicked, show a new page with all of the photos in that album listed out, under the album name. To the left, show the nav bar on the left so user can click on any of the albums to navigate around

//on a click event, for each loop for album pictures to be displayed:

function pickAlbum (album, i, arr) {
  return album.albumName === 'One';
}

function albumPics (album, i, arr) {
  return album.images;
}
  var chooseAlbum = albums.filter(pickAlbum);
  console.log(chooseAlbum);

  var albumImages = albums.map(albumPics);
  console.log(albumImages);

function pickImage (header, content) {
  console.log('hi');
}

pickImage(header,content);

var previewItem = $('.previewItem');
previewItem.on('click', function(e) {
    console.log('hi');
    content.empty();

albums.forEach(function(album, i, arr) {
      var albumItems = $('<a class="albumItems" href="' + album.images.hash + '"><img src = "' + album.images[i].url + '" /img><h2>' + album.albumName + '</h2></a>');
      content.append(albumItems);
    });

});




// var album1 = albums.filter(function(album, i, arr) {
//   if (album.albumName === 'One') {
//     return true;
//   }
// });
// console.log(album1);
//
// var album1Images = album1.filter(function(image, i, arr) {
//   if (image.)
// });



    // albums.forEach(function(album, i, arr) {
    //   var albumpicItem = $('<a href="' + album[0].images.hash +'">< img src = "' + album[0].images[i].url + '" /img><h2>' + album[0].albumName + '</h2></a>');
    //   content.append(albumpicItem);
    // });
