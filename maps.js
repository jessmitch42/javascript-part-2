function Tile(type) {
    if (type === "water") {
        this.type = type;
    }
    else if (type === "grass") {
        this.type = type;
    }
    else if (type === "sand") {
        this.type = type;
    };
    }

//method ".isWalkable"

Tile.prototype.isWalkable = function() {
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
};
//random new Tile objects

function randomType() {
    var type;
    var whichRandomTile = Math.random();
    
        if (whichRandomTile < 0.33) {
            type = "water";
        }
        else if (whichRandomTile > 0.66) {
            type = "sand";
        }
        else {
            type = "grass";
        }
    return type;
}


function Map(width, height) {
    this.width = Math.floor(width);
    this.height = Math.floor(height);
    
    var tiles = [];
    
    for (var i = 0; i < height; i++) {
        var row = [];
        for (var j = 0; j < width; j++) {
            var typeR = randomType();
            var tileij = new Tile(typeR);
            row.push(tileij.type);
        }
        tiles.push(row);
    }
    this.tiles = tiles;
};

var testType = randomType();
var testTile = new Tile(testType);
console.log(testTile);
var testmap = new Map(3, 4);
console.log(testmap);


Map.prototype.getWalkable = function() {
    
}

Map.prototype.getAsciiOutput = function() {
    
}

//if isWalkable = true, return ..
// if isWalkable = false, return ..