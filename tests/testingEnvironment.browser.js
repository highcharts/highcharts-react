import test from 'tape'

test('is a proper testing environment', (t) => {
  const $input = document.createElement('input')
  $input.id = 'my-id'
  document.body.appendChild($input)
  const $foundInput = document.getElementById('my-id')

  t.equal($input, $foundInput)
  t.end()
})
