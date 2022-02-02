window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Status = window.blockly.js.blockly.Status || {};

/**
 * Status
 */
window.blockly.js.blockly.Status.changesStatusArgs = [];
window.blockly.js.blockly.Status.changesStatus = async function() {

  this.cronapi.memory.changeValueStatus("memory-status-805175", 'cancelado');
}
