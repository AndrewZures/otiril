const Immutable = require('immutable');

const initialState = function(){

  const readyColumn = {
    id: "ready",
    name: "Ready",
    cards: [{ id: 'r1',
              title: "Ready Card 1",
              summary: "Ready card one is ready for showtime" },
            { id: 'r2',
              title: "Ready Card 2",
              summary: "Ready Card 2 is ready too" }]
  }

  const workingColumn = {
    id: "working",
    name: "Working",
    cards: [
      { id: 'w1',
        title: "Working Card 1",
        summary: "Working Card 1 is working hard 1" }
    ]
  }

  const finishedColumn = {
    id: "finished",
    name: "Finished",
    cards: [
      { id: 'f1',
        title: "Finished Card 1",
        summary: "Finished Card one is finished fo sho" }
    ]
  }

  const board = {
    columns: [
      readyColumn,
      workingColumn,
      finishedColumn
    ]
  }

  const newCard = {
    defaultText: {
      title: "Card Title"
    },
    currentTitle: ""
  }

  const modal = {
    showModal: false,
    cardData: {}
  }

  const state = {
    board: board,
    newCard: newCard,
    modal: modal
  }

  return state;
}

module.exports = initialState();
