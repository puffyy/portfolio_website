const sendMail = document.getElementById('contact');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const openBlog = document.getElementById('blog-button');
const copyBtn = document.getElementById('copy');

// Checks if default mail app enabled
sendMail.addEventListener('click', () => {
  var t;

  clearTimeout(t);
  
  // If default mail app not open in 3s open-popup of contact-disabled
  t = setTimeout(() => {
    if(document.hasFocus()) {
      const modal = document.querySelector('#popup-contact-disabled');
      openModal(modal);
  } }, 3000);
});

// Close-button listener
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest(['.popup']);
    closeModal(modal);
  });
});

// Blog-button listener
openBlog.addEventListener('click', () => {
  const modal = document.querySelector('#popup-blog');
  openModal(modal);
});

// Copy-button listener
copyBtn.addEventListener('click', copyMail);

// Open-button Func
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

// Close-button Func
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// Copy-mail Func
function copyMail(cp){
  let e_mail = document.getElementById('e-mail');
  let textArea  = document.createElement('textarea');
  textArea.value = e_mail.innerText;
  document.body.append(textArea);
  textArea.select();

  try {
    let copy = document.execCommand('Copy');
    var status_copy_mail = copy ? 'copied' : 'failed';
    console.log('e-mail adress was ' + status_copy_mail);

    flashElement(copyBtn)
  } catch (err) {
    console.log('Unable to copy!');
  }
  document.body.removeChild(textArea);
}

// Approve mail adress copied func
function flashElement(element) {
  element.classList.add("flash");
  document.addEventListener("transitionend", function() {
    setTimeout(function() {
      element.classList.remove("flash");
    }, 1000);
  });
}



