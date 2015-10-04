const _ = require("ramda");

const ResetModalReducer = function(modal) {
  return _.merge(modal, { presentedData: _.clone(modal.data) })
}

module.exports = ResetModalReducer;
