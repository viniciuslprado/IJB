module.exports = {
  // Minimal config to avoid false positives from Tailwind/PostCSS directives
  // This tells stylelint (or the Stylelint VSCode extension) to allow Tailwind at-rules
  // and to use a PostCSS-compatible syntax.
  extends: [
    'stylelint-config-standard'
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer']
    }]
  },
  customSyntax: 'postcss-scss'
}
