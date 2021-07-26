console.log('Nav Links Demo in Vanilla!');

// declare some tooling - these are function declarations
const byId = id => document.getElementById(id),
  byTag = tag => document.getElementsByTagName(tag),
  create = el => document.createElement(el),
  clone = el => Object.assign({}, el);

// create nav elements
const navUnorderedList = create('ul');
const navLink = create('li');

// this is a function expression - know the diffs
function getNavLinksData() {
  return fetch();
}
