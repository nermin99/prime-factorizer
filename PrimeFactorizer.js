function handleSubmit(e) {
  e.preventDefault()

  const input = e.target.elements.primeinput.value
  if (input > Number.MAX_SAFE_INTEGER) {
    console.error('Number is greater than MAX_SAFE_INTEGER')
    document.querySelector('#result').innerHTML = 'Number is too big!'
    return
  }

  const primes = factorize(input)

  let html = primes.join(' ')
  if (primes.length === 1) {
    html += '<br><b>prime</b>'
  }
  document.querySelector('#result').innerHTML = html
}

function factorize(input) {
  console.time('Execution Time')
  let n = input
  let i = 2
  const primes = []

  while (i <= Math.floor(Math.sqrt(n))) {
    if (n % i === 0) {
      primes.push(i)
      n /= i
    } else if (i === 2) {
      i++
    } else {
      i += 2
    }
  }
  primes.push(n)

  console.timeEnd('Execution Time')
  return primes
}
