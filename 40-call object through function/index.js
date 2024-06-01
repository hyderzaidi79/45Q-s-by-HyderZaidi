"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_Name, Album_Title, tracks) {
    let album = {
        artist: artist_Name,
        title: Album_Title,
        tracks: tracks,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("hamza", "phool", 11);
let album2 = make_album("Hadiqa", "rang", 8);
let album3 = make_album("Nusrat", "dil dil");
console.log(album1);
console.log(album2);
console.log(album3);
