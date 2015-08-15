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
  }

}

module.exports = Game
