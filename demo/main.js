var input = document.querySelector('#input')
var output = document.querySelector('#output')
var form = document.querySelector('#form')

var defaultInput = '3 4 * 2 5 + / 5 4 + *'

input.value = localStorage.getItem('pc_input') || defaultInput

form.addEventListener('submit', function(event) {
  event.preventDefault()

  calculate()
})

function calculate() {
  var value = input.value
  var result = postfixCalculator(value)
  output.innerHTML = ''

  if (result) {
    output.innerHTML = result
  }

  localStorage.setItem('pc_input', value)
}

calculate()
