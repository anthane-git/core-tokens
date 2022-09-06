'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utilities = require('./utilities.js');
var breakpoints = require('./token-groups/breakpoints.js');
var depth = require('./token-groups/depth.js');
var font = require('./token-groups/font.js');
var legacy = require('./token-groups/legacy.js');
var colors = require('./token-groups/colors.js');
var motion = require('./token-groups/motion.js');
var shape = require('./token-groups/shape.js');
var spacing = require('./token-groups/spacing.js');
var zIndex = require('./token-groups/zIndex.js');

const metadata = createMetadata({
  breakpoints: utilities.tokensToRems(breakpoints.breakpoints),
  colors: colors.colors,
  depth: depth.depth,
  font: utilities.tokensToRems(font.font),
  legacy: utilities.tokensToRems(legacy.legacy),
  motion: motion.motion,
  shape: utilities.tokensToRems(shape.shape),
  spacing: utilities.tokensToRems(spacing.spacing),
  zIndex: zIndex.zIndex
});
/**
 * Identity function that simply returns the provided tokens with metadata, but additionally
 * validates the input matches the `Metadata` type exactly and infers all members.
 */

function createMetadata(metadata) {
  return metadata;
}

exports.createMetadata = createMetadata;
exports.metadata = metadata;
