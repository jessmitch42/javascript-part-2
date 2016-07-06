function Tile(type) {
    if (this.type === "water") {
        this.type = this.type;
    }
    else if (this.type === "grass") {
        this.type = this.type;
    }
    else if (this.type === "sand") {
        this.type = this.type;
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

