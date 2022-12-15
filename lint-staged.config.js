module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['eslint --fix'],
  'package.json': ['eslint --fix'],
  '*.vue': ['eslint --fix', 'stylelint --fix'],
  '*.{scss,less,styl,html}': ['stylelint --fix'],
  '*.md': ['eslint --fix'],
}
