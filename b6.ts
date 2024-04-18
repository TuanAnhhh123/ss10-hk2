class Song {
    public readonly id: number;
    private _name: string;
    private _length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this._name = name;
        this._length = length;
    }


    get name(): string {
        return this._name;
    }


    set name(name: string) {
        this._name = name;
    }


    get length(): number {
        return this._length;
    }


    set length(length: number) {
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
