function BouncingBall(arena) {
    "use strict";
    this.height = 10;
    this.width  = 10;
    this.x      = 0;
    this.y      = 0;
    this.color  = "#FF0000";
    this.div = document.createElement("DIV");
    this.div.style.height          = this.height.toString() + "px";
    this.div.style.width           = this.width.toString() + "px";
    this.div.style.backgroundColor = this.color;
    this.div.style.left            = this.x.toString() + "px";
    this.div.style.top             = this.y.toString() + "px";

    arena.appendChild(this.div);
}
