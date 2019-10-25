const POSSIBLE_ERRORS = {
  'property-no-unknown': [true, { ignoreProperties: ['/^\\+/', 'composes', 'absolute', 'fixed', 'relative', 'size'] }],
  'declaration-block-no-duplicate-properties': [
    true,
    {
      ignoreProperties: ['composes'],
    },
  ],
  'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
  'at-rule-no-unknown': [
    true,
    { ignoreAtRules: ['value', 'use', 'mixin', 'property', 'define-mixin', 'mixin-content'] },
  ],
};

module.exports = {
  rules: { ...POSSIBLE_ERRORS },
};
