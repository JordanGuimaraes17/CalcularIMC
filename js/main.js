import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, calculetIMC } from './util.js'

// variaveis
const form = document.querySelector('form')
const inputHeigth = document.querySelector('#heigth')
const inputWeigth = document.querySelector('#weigth')

inputWeigth.oninput = () => AlertError.close()
inputHeigth.oninput = () => AlertError.close()

form.onsubmit = e => {
  e.preventDefault()
  const weigth = inputWeigth.value
  const heigth = inputHeigth.value
  const weigthOrHeigthNotAnumber = notANumber(weigth) || notANumber(heigth)
  if (weigthOrHeigthNotAnumber) {
    AlertError.open()
    return
  }
  AlertError.close()
  const result = calculetIMC(weigth, heigth)
  displayResultMesage(result)
}

function displayResultMesage(result) {
  const message = `Seu IMC é de ${result}`
  Modal.open()
  Modal.message.innerHTML = message
}
