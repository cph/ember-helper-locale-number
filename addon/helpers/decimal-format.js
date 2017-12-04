import Ember from 'ember';

/**
 * The default decimal formatting options for the default Locale.
 * @type {{style: string}}
 */
const defaultOptions = {style: 'decimal'};
/**
 * Instantiate a basic NumberFormat in the browser's locale that will be used for basic formatting.
 * @type {Intl.NumberFormat}
 */
const formatter = new Intl.NumberFormat(undefined, defaultOptions);

export function decimalFormat([number], options) {
  if (Ember.isBlank(number) || isNaN(number)) {
    return '';
  }
  if (Ember.$.isEmptyObject(options)) {
    return formatter.format(number);
  } else {
    return number.toLocaleString(undefined, Ember.$.extend(defaultOptions, options));
  }
}

export default Ember.Helper.helper(decimalFormat);
