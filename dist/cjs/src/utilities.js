'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const BASE_FONT_SIZE = 16;
const UNIT_PX = 'px';
const UNIT_EM = 'em';
const UNIT_REM = 'rem'; // https://regex101.com/r/zvY2bu/1

const DIGIT_REGEX = new RegExp(String.raw`-?\d+(?:\.\d+|\d*)`);
const UNIT_REGEX = new RegExp(`${UNIT_PX}|${UNIT_EM}|${UNIT_REM}`);
function getUnit(value = '') {
  const unit = value.match(new RegExp(`${DIGIT_REGEX.source}(${UNIT_REGEX.source})`));
  return unit && unit[1];
}
function toPx(value = '') {
  const unit = getUnit(value);
  if (!unit) return value;

  if (unit === UNIT_PX) {
    return value;
  }

  if (unit === UNIT_EM || unit === UNIT_REM) {
    return `${parseFloat(value) * BASE_FONT_SIZE}${UNIT_PX}`;
  }
}
function toEm(value = '', fontSize = BASE_FONT_SIZE) {
  const unit = getUnit(value);
  if (!unit) return value;

  if (unit === UNIT_EM) {
    return value;
  }

  if (unit === UNIT_PX) {
    return `${parseFloat(value) / fontSize}${UNIT_EM}`;
  }

  if (unit === UNIT_REM) {
    return `${parseFloat(value) * BASE_FONT_SIZE / fontSize}${UNIT_EM}`;
  }
}
function toRem(value = '') {
  const unit = getUnit(value);
  if (!unit) return value;

  if (unit === UNIT_REM) {
    return value;
  }

  if (unit === UNIT_EM) {
    return `${parseFloat(value)}${UNIT_REM}`;
  }

  if (unit === UNIT_PX) {
    return `${parseFloat(value) / BASE_FONT_SIZE}${UNIT_REM}`;
  }
}
function rem(value) {
  return value.replace(new RegExp(`${DIGIT_REGEX.source}(${UNIT_PX})`, 'g'), px => toRem(px) ?? px);
}
function tokensToRems(tokenGroup) {
  return Object.fromEntries(Object.entries(tokenGroup).map(([token, properties]) => [token, { ...properties,
    value: rem(properties.value)
  }]) // We loose the `tokenGroup` inference after transforming the object with
  // `Object.fromEntries()` and `Object.entries()`. Thus, we cast the result
  // back to `T` since we are simply converting the `value` from px to rem.
  );
}
function createVar(token) {
  return `--p-${token}`;
}
/**
 * Allowed Polaris keyframes.
 *
 * Result: ['p-keyframes-fade-in', 'p-keyframes-spin', etc...]
 */

function getKeyframeNames(motionTokenGroup) {
  return Object.keys(motionTokenGroup).map(token => token.startsWith('keyframes') ? `p-${token}` : null).filter(Boolean);
}
/**
 * Allowed Polaris token custom properties.
 *
 * Result: ['--p-background', '--p-text', etc...]
 */

function getCustomPropertyNames(tokens) {
  return Object.entries(tokens).map(([_, tokenGroup]) => Object.keys(tokenGroup).map(token => createVar(token))).flat();
}
function removeMetadata(tokenGroup) {
  return Object.fromEntries(Object.entries(tokenGroup).map(entry => {
    const [tokenName, {
      value
    }] = entry;
    return [tokenName, value];
  }));
}
function getMediaConditions(breakpoints) {
  const breakpointEntries = Object.entries(breakpoints);
  const lastBreakpointIndex = breakpointEntries.length - 1;
  return Object.fromEntries(breakpointEntries.map((entry, index) => {
    const [breakpointsTokenName, breakpoint] = entry;
    const upMediaCondition = getUpMediaCondition(breakpoint);
    const downMediaCondition = getDownMediaCondition(breakpoint);
    const onlyMediaCondition = index === lastBreakpointIndex ? upMediaCondition : `${upMediaCondition} and ${getDownMediaCondition(breakpointEntries[index + 1][1])}`;
    return [breakpointsTokenName, {
      // Media condition for the current breakpoint and up
      up: upMediaCondition,
      // Media condition for current breakpoint and down
      down: downMediaCondition,
      // Media condition for only the current breakpoint
      only: onlyMediaCondition
    }];
  }));
}

function getUpMediaCondition(breakpoint) {
  return `(min-width: ${toEm(breakpoint)})`;
}
/**
 * Down media condition breakpoints are being subtracted by 0.05px to prevent
 * them from overwriting up media queries. We experimented with multiple offsets
 * and felt that 0.05px would be the safest across different pixel densities.
 */


function getDownMediaCondition(breakpoint) {
  const offsetBreakpoint = parseFloat(toPx(breakpoint) ?? '') - 0.05;
  return `(max-width: ${toEm(`${offsetBreakpoint}px`)})`;
}

exports.createVar = createVar;
exports.getCustomPropertyNames = getCustomPropertyNames;
exports.getKeyframeNames = getKeyframeNames;
exports.getMediaConditions = getMediaConditions;
exports.getUnit = getUnit;
exports.rem = rem;
exports.removeMetadata = removeMetadata;
exports.toEm = toEm;
exports.toPx = toPx;
exports.toRem = toRem;
exports.tokensToRems = tokensToRems;
