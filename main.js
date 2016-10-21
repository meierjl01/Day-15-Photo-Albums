// console.log(albums[0].images[0].url);
// console.dir(window);

//testing to get album 1 preview on the page:
// var album1 = $('<div><img class="pic" src='+albums[0].images[0].url+'><span>Album 1</span></div>');
// console.log(album1);
// content.append(album1);


//For Each: need to take each album and also include, the hash for location, their Preview image, and their name in a span.
//Need to append that to the content container, like in the test above


// when an album is clicked, show a new page with all of the photos in that album listed out, under the album name. To the left, show the nav bar on the left so user can click on any of the albums to navigate around

//on a click event, for each loop for album pictures to be displayed:

//per Max: you can use a hashchange event instead of click event -- says look at the whole window and if the hash changes, it needs to run a specific function. within that, it either needs to go to a specific album or a specific picture or to the main home page (3 different functions).

//to target one specific Album:

//   if (album.albumName === 'One') {
//     return album.albumName;

//ideally, run more functions in here, within the if statement. build a nav funciton?


//   }
//   else if (album.albumName === 'Two') {
//     return album.albumName;
//   }
//   else if (album.albumName === 'Three') {
//     return album.albumName;
//   }
//   else if (album.albumName === 'Four') {
//     return album.albumName;
//   }
//   else if (album.albumName === 'Five') {
//     return album.albumName;
//   }
//   else if (album.albumName === 'Six') {
//     return album.albumName;
// }


// function albumPics(album, i, arr) {
//     return album.images;
// }
// var chooseAlbum = albums.filter(pickAlbum);
// console.log(chooseAlbum);
//
// var albumImages = albums.map(albumPics);
// console.log(albumImages);
//
// function pickImage(header, content) {
//     console.log('hi');
// }
//how to get it to go back to home, move to just one image


var sideLinks = $('.sideLinks');
var header = $('.page-header');
var content = $('.content');


function renderHome() {
    content.empty();
    sideLinks.empty();
    var albumPic = albums.map(function(album, i, array) {
        return album.albumPreview;
    });
    var albumpreview = albums.forEach(function(album, i, arr) {
        var albumPreviewItem = $('<a class="previewItem" href="' + album.hash + '"><img src = "' + album.images[0].url + '" /img><h2>' + album.albumName + '</h2></a>');
        content.append(albumPreviewItem);
    });
}

var previewItem = $('.previewItem');
previewItem.on('click', function(e) {
    location.hash = album.hash;
});

function renderAlbum(album, i, arr) {
    content.empty();
    albums.forEach(function(images, i, arr) {
        var albumItems = $('<div><img src = "' + album.images[i].url + '" /img><h2>' + album.images[i].imageName + '</h2></div>');
        content.append(albumItems);
    });
}

//nav bar code (needs styling):
// function renderNav() {
//     albums.forEach(function(album, i, arr) {
//         var navs = $('<a href="#' + album.albumName + '"><button>' + album.albumName + '</button></a>');
//         sideLinks.append(navs);
//     });
// }


function hashChangeEvent(e) {
    var siteLocation = location.hash;
    if (siteLocation === '') {
        renderHome();
    } else {
      siteLocation.indexOf;
      renderAlbum()
    }
    }
}

$(window).on('hashchange', hashChangeEvent);

hashChangeEvent();
