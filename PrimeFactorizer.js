function handleSubmit(e) {
  e.preventDefault()

  const input = e.target.elements.primeinput.value
  const primes = factorize(input)

  let html = primes.join(' ')
  if (primes.length == 1) {
    html += '<br><b>prime</b>'
  }
  document.querySelector('#result').innerHTML = html
}

function factorize(input) {
  let n = input
  let i = 2

  const primes = []

  while (i <= Math.floor(Math.sqrt(n))) {
    if (n % i == 0) {
      primes.push(i)
      n /= i
    } else if (i == 2) {
      i++
    } else {
      i += 2
    }
  }
  primes.push(n)

  return primes
}
