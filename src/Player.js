class Player {
    constructor(x, y, tileSize){
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
    }

    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }

    draw(context){
        context.fillStyle = '#f00';
        context.textBaseLine = 'hanging';
        context.font = '16px Helvetica';
        context.fillText('@', this.x*this.tileSize, this.y*this.tileSize);
    }
}

export default Player;