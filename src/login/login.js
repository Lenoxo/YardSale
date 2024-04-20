const form = document.querySelector('.form')

form.addEventListener('submit', handleLogin)

function handleLogin(event) {
  event.preventDefault()
  console.log('detected submit')
  const emailVal = event.target.elements.email.value
  const passwordVal = event.target.elements.password.value

  const isEmailCorrect = emailVal === savedEmail
  const isPasswordCorrect = passwordVal === savedPassword
  if (!isEmailCorrect || !isPasswordCorrect) {
    // Return error to client
  } else {
    window.location.href('/')
  }
}
