import tape from 'tape'
import addAssertions from 'extend-tape'
import { createRenderer } from 'react-test-renderer/shallow'
import jsxEquals from 'tape-jsx-equals'
import React from 'react'
import HighchartsReact from '../'

const renderer = createRenderer()
const test = addAssertions(tape, { jsxEquals })

test('renders charts container', (t) => {
  t.plan(1)
  renderer.render(
    <HighchartsReact
      constructorType={'chart'}
      options={{ series: [{ data: [1, 2, 3] }] }}
    />
  )
  const actual = renderer.getRenderOutput()

  t.jsxEquals(
    actual,
    React.createElement('div', { ref: function noRefCheck () {} })
  )
})
