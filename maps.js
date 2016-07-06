function Tile(type) {
    if (this.type === "water") {
        this.type = type;
    }
    else if (this.type === "grass") {
        this.type = type;
    }
    else if (this.type === "sand") {
        this.type = type;
    }
    this.type
    function isWalkable(type) {
        if (this.type === "water") {
            return false;
        }
        else if (this.type === "grass") {
            return true;
        }
        else if (this.type === "sand") {
            return true;
        }
        else {
            return false;
        }
    }
}

// var jess = new Tile("water");
// console.log(jess);

function Map(width, height) {
    this.width = width;
    this.height = height;
    this.tile
}