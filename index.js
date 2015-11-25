'use strict';

module.exports = function (input) {
  return input
    .replace(/<->/gim, '↔')
    .replace(/<=>/gim, '⇔')
    .replace(/<-/gim, '←')
    .replace(/->/gim, '→')
    .replace(/<=/gim, '⇐')
    .replace(/=>/gim, '⇒');
};
