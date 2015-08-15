const Game = {

  knightPosition: [1, 7],
  observer: null,

  emitChange(){
    this.observer(this.knightPosition);
  },

  observe(o) {
    if(this.observer) { throw new Error("too many observers"); }

    this.observer = o;
    this.emitChange();
  },

  moveKnight(position) {
    this.knightPosition = position;
    this.emitChange();
  },

  canMoveKnight(position) {
    const [px, py] = position
    const [x, y] = this.knightPosition;
    const dx = px - x;
    const dy = py - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
           (Math.abs(dx) === 1 && Math.abs(dy) === 2);
  }

}

module.exports = Game
