const _ = require("ramda");

const ToggleEditableReducer = function(modal) {
  return _.merge(modal, { editable: !modal.editable })
}

module.exports = ToggleEditableReducer;
