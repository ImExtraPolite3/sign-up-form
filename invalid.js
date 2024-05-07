const checkPassword = function() {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const create = document.querySelector('.container-right-bottom > button');
  const invalidText = document.querySelector('.invalid-text');

  create.addEventListener('click', () => {
    if (password.value !== confirmPassword.value) {
      invalidText.classList = 'show-text ';
      password.style.border = 'solid red';
      confirmPassword.style.border = 'solid red';
    } else {
      invalidText.classList = 'invalid-text';
    }
  })
}

checkPassword();