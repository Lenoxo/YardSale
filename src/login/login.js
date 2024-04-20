const form = document.querySelector('.form')
const errorSpan = document.querySelector('#login-error-message')

form.addEventListener('submit', handleLogin)

async function handleLogin(event) {
  event.preventDefault()
  console.log('detected submit')
  const emailVal = event.target.elements.email.value
  const passwordVal = event.target.elements.password.value

  const { savedEmail, savedPassword } = await getUserData()
  const isEmailCorrect = emailVal === savedEmail
  const isPasswordCorrect = passwordVal === savedPassword

  try {
    if (!isEmailCorrect) throw new Error('Check your email again')
    if (!isPasswordCorrect) throw new Error('Check your password again')

    return window.location.href = '/src'
  } catch (error) {
    renderErrorMessage(error.message)
  }

}

function getUserData() {
  return JSON.parse(localStorage.getItem('user-data'))
}

function renderErrorMessage(message) {
  errorSpan.classList.remove('inactive')
  errorSpan.innerText = message
}
