const initialState = function(){

  const readyColumn = {
    id: "ready",
    name: "Ready",
    cards: [{ id: 'r1', title: "Ready Card 1" },
            { id: 'r2', title: "Ready Card 2" }]
  }

  const workingColumn = {
    id: "working",
    name: "Working",
    cards: [
      { id: 'w1', title: "Working Card 1" }
    ]
  }

  const finishedColumn = {
    id: "finished",
    name: "Finished",
    cards: [
      { id: 'f1', title: "Finished Card 1" }
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

  const state = {
    board: board,
    newCard: newCard
  }

  return state;
}

module.exports = initialState();
