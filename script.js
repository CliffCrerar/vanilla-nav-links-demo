console.log('Nav Links Demo in Vanilla!');

// declare some tooling - these are function declarations
const byId = id => document.getElementById(id),
  byTag = tag => document.getElementsByTagName(tag),
  create = el => document.createElement(el),
  log = (...params) => console.log(...params);

// create nav elements

const navUnorderedList = create('ul');
navUnorderedList.classList.add('navbar-nav nav');

// this is a function expression - know the diffs
function getNavLinksData() {
  return fetch(byTag('a')[0].href);
}

function setNavLinksFromData(data) {
  const navBar = byTag('nav')[0];
  // navBar.classList.add('navbar');
  navBar.appendChild(navUnorderedList);
  setTimeout(() => {
    toggleSpinner();
    data.forEach(appendNavlinksToUnorderedList);
  }, 1000);
}

function createAnchor({ href, innerHTML, title }) {
  const newAnchor = create('a');
  newAnchor.title = title;
  newAnchor.innerHTML = innerHTML;
  newAnchor.href = href;

  return newAnchor;
}

function createNewListItem(anchor) {
  const newListItem = create('li');
  newListItem.classList.add('nav-link');
  newListItem.appendChild(anchor);
  // log(anchor.pathname);
  // if (location.pathname === anchor.pathname) {
  //   anchor.classList.add('active');
  // }
  return newListItem;
}

function appendNavlinksToUnorderedList(e) {
  navUnorderedList.appendChild(createNewListItem(createAnchor(e)));
}

window.onload = function() {
  getNavLinksData().then(response => {
    response.json().then(setNavLinksFromData);
  });
  document.body.prepend(spinner);
};
