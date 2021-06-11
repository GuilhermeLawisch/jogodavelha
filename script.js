let result = [null, null, null, null, null, null, null, null, null]
let resultLength = 0

const Add = (value) => {
  if (resultLength%2 === 0) {
    result[value] = 'x'
    document.getElementById(String(value)).setAttribute('value', 'x')
    document.getElementById(String(value)).setAttribute('disabled', true)
  } else {
    result[value] = 'o'
    document.getElementById(String(value)).setAttribute('value', 'o')
    document.getElementById(String(value)).setAttribute('disabled', true)
  }

  resultLength++

  if (resultLength === 9) {
    document.getElementById('result').innerHTML = `Fim do jogo, deu <b>Velha</b>!`
  }

  const winner = Verification()

  if (winner) {
    document.getElementById('result').innerHTML = `O jogador de <b>${winner.toUpperCase()}</b> venceu!`

    document.getElementById('0').setAttribute('disabled', true)
    document.getElementById('1').setAttribute('disabled', true)
    document.getElementById('2').setAttribute('disabled', true)
    document.getElementById('3').setAttribute('disabled', true)
    document.getElementById('4').setAttribute('disabled', true)
    document.getElementById('5').setAttribute('disabled', true)
    document.getElementById('6').setAttribute('disabled', true)
    document.getElementById('7').setAttribute('disabled', true)
    document.getElementById('8').setAttribute('disabled', true)
  } 
}

const Verification = () => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (result[a] && result[a] === result[b] && result[a] === result[c]) {
      return result[a];
    }
  }
  return null;
}

const Reset = () => {
  result = [null, null, null, null, null, null, null, null, null]
  resultLength = 0

  document.getElementById('result').innerHTML = ``

  for (let i = 0; i < 9; i++) {
    const variable = document.getElementById(String(i))
    console.log(i)
    variable.removeAttribute('disabled')
    variable.setAttribute('value', '  ')
  }
}

document.getElementById('0').addEventListener('click', () => Add(0))
document.getElementById('1').addEventListener('click', () => Add(1))
document.getElementById('2').addEventListener('click', () => Add(2))
document.getElementById('3').addEventListener('click', () => Add(3))
document.getElementById('4').addEventListener('click', () => Add(4))
document.getElementById('5').addEventListener('click', () => Add(5))
document.getElementById('6').addEventListener('click', () => Add(6))
document.getElementById('7').addEventListener('click', () => Add(7))
document.getElementById('8').addEventListener('click', () => Add(8))

document.querySelector('input#reset').addEventListener('click', () => Reset())
