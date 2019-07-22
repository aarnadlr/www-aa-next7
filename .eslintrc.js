module.exports = {
  extends: [
    // 'last'
    // ,'prettier'
    // ,
    "airbnb"
  ],
  rules: {
    'max-len': 'off',
    'quotes': ['warn', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': ['warn', 'prefer-single'],
    'semi': ['warn', 'always']
  }
};
