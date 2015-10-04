const _ = require('ramda');

const MoveCardPosition = function() {

  const moveCardPosition = function(columns, action) {
    const { originalIndex, overIndex, columnId } = action.data
    const column = findColumn(columns, columnId);
    const { card, rest } = partition(column, originalIndex)
    column.cards = _.insert(overIndex, card, rest);
    return columns
  }

  const partition = function(column, originalCardIdx) {
    const partitioned = _.partition((colCard) => card.id === originalCardIdx, column.cards)
    const card = partitioned[0][0]
    const rest = partitioned[1]
    return { card: partitioned[0][0], rest: partitioned[1] }
  }

  const findColumn = function(columns, columnId) {
    return _.find((column) => column.id === columnId, columns)
  }

  return moveCardPosition;
}

module.exports = MoveCardPosition
