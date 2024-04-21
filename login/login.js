import { getUserData } from "../utils/getUserData.js"
const form = document.querySelector('.form')
const errorSpan = document.querySelector('#login-error-message')

form.addEventListener('submit', handleLogin)

async function handleLogin(event) {
  event.preventDefault()
  const emailVal = event.target.elements.email.value
  const passwordVal = event.target.elements.password.value

  try {
    const userData = await getUserData()
    if (!userData) {
      throw new Error(`You don't have an account yet, create one`)
    }

    const isEmailCorrect = emailVal === userData.savedEmail
    const isPasswordCorrect = passwordVal === userData.savedPassword

    if (!isEmailCorrect) throw new Error('Check your email again')
    if (!isPasswordCorrect) throw new Error('Check your password again')

    return window.location.href = '../index.html'
  } catch (error) {
    renderErrorMessage(error.message)
  }

}

function renderErrorMessage(message) {
  errorSpan.classList.remove('inactive')
  errorSpan.innerText = message
}
