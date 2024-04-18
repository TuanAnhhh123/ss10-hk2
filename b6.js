"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get length() {
        return this._length;
    }
    set length(length) {
        this._length = length;
    }
}
const song = new Song(1, "Song A", 240);
console.log("Before changes:");
console.log("Name:", song.name);
console.log("Length:", song.length);
song.name = "New Song Name";
song.length = 300;
console.log("\nAfter changes:");
console.log("Name:", song.name);
console.log("Length:", song.length);
