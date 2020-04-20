/*
 * Rules
 * https://stylelint.io/user-guide/rules/
 * https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md
 */
const POSSIBLE_ERRORS = {
  'color-no-invalid-hex': true,
  'function-calc-no-unspaced-operator': true,
  'function-linear-gradient-no-nonstandard-direction': true,
  'string-no-newline': true,
  'unit-no-unknown': true,
  'keyframe-declaration-no-important': true,
  'property-no-unknown': true,
  'declaration-block-no-duplicate-properties': true,
  'declaration-block-no-shorthand-property-overrides': true,
  'block-no-empty': true,
  'selector-pseudo-class-no-unknown': true,
  'selector-pseudo-element-no-unknown': true,
  'selector-type-no-unknown': true,
  'media-feature-name-no-unknown': true,
  'at-rule-no-unknown': true,
  'comment-no-empty': true,
  'no-empty-source': true,
  'no-extra-semicolons': true,
  'no-invalid-double-slash-comments': true,
};

const LIMIT_LANGUAGE_FEATURES = {
  'color-no-hex': 0,
  'function-url-no-scheme-relative': true,
  'shorthand-property-no-redundant-values': true,
  'value-no-vendor-prefix': true,
  // NOTE: might not want this? This just disables the shorthand, which is normally
  // nice. Individual properties like `font-family`, `font-size` still work.
  'property-blacklist': ['font'],
  'property-no-vendor-prefix': true,
  'declaration-no-important': true,
  'declaration-block-single-line-max-declarations': 0,
  // NOTE: This is really effective with CSS modules. Without, it probably
  // gets cumbersome. I'd probably limit this to 4 with modules.
  'selector-max-compound-selectors': 5,
  'selector-max-empty-lines': 0,
  'media-feature-name-no-vendor-prefix': true,
  'at-rule-no-vendor-prefix': true,
};

const STYLISTIC_ISSUES = {
  // Function
  'function-comma-newline-after': 'always-multi-line',
  'function-comma-newline-before': 'never-multi-line',
  'function-max-empty-lines': 0,
  'function-name-case': 'lower',
  'function-parentheses-newline-inside': 'always-multi-line',
  'function-url-quotes': 'always',
  // Number
  'number-leading-zero': 'always',
  'number-no-trailing-zeros': true,
  // String
  'string-quotes': 'single',
  // Length
  'length-zero-no-unit': true,
  // Unit
  'unit-case': 'lower',
  // Value List
  'value-list-comma-space-after': 'always-single-line',
  'value-list-comma-space-before': 'never',
  // Property
  'property-case': 'lower',
  // Declaration
  'declaration-bang-space-after': 'never',
  'declaration-bang-space-before': 'always',
  'declaration-colon-space-after': 'always-single-line',
  'declaration-colon-space-before': 'never',
  // Declaration block
  'declaration-block-semicolon-newline-after': 'always',
  'declaration-block-semicolon-newline-before': 'never-multi-line',
  // Block
  'block-opening-brace-newline-after': 'always',
  'block-opening-brace-space-before': 'always',
  'block-closing-brace-empty-line-before': 'never',
  // Selector
  'selector-attribute-brackets-space-inside': 'never',
  'selector-combinator-space-after': 'always',
  'selector-combinator-space-before': 'always',
  'selector-pseudo-class-case': 'lower',
  'selector-pseudo-class-parentheses-space-inside': 'never',
  'selector-pseudo-element-colon-notation': 'single',
  'selector-type-case': 'lower',
  // Selector list
  'selector-list-comma-newline-after': 'always',
  'selector-list-comma-space-before': 'never',
  // Media feature
  'media-feature-colon-space-after': 'always',
  'media-feature-colon-space-before': 'never',
  'media-feature-range-operator-space-after': 'always',
  'media-feature-range-operator-space-before': 'always',
  // Media query list
  'media-query-list-comma-newline-after': 'never-multi-line',
  'media-query-list-comma-newline-before': 'never-multi-line',
  'media-query-list-comma-space-after': 'always-single-line',
  'media-query-list-comma-space-before': 'never',
  // General / Sheet
  indentation: 2,
  'max-empty-lines': 1,
  'no-eol-whitespace': true,
  'rule-empty-line-before': ['always', { ignore: ['after-comment', 'first-nested'] }],
};

module.exports = {
  rules: { ...POSSIBLE_ERRORS, ...LIMIT_LANGUAGE_FEATURES, ...STYLISTIC_ISSUES },
};
