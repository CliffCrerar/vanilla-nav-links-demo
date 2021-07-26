const spinnerHtml = `
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <span>Loading navlinks . . .</span>
`;

const spinner = document.createElement('div');
const spinnerShow = true;

spinner.innerHTML = spinnerHtml;
spinner.classList.add('nav-spinner');
spinner.classList.add('mt-3');
spinner.classList.add('hide');
spinner.classList.add('d-flex');
spinner.classList.add('justify-content-center');
spinner.classList.add('align-items-center');

function hideSpinner() {
  spinner.classList.remove('d-flex');
  spinner.classList.add('d-none');
}

function showSpinner() {
  spinner.classList.add('d-flex');
  spinner.classList.remove('d-none');
}

function toggleSpinner() {
  spinnerShow ? hideSpinner() : showSpinner();
  spinnerShow != spinnerShow;
}
