var tape = require('tape')
var addAssertions = require('extend-tape')
var renderer = require('react-test-renderer/shallow').createRenderer()
var jsxEquals = require('tape-jsx-equals')
var React = require('react')
var HighchartsReact = require('../')
var test = addAssertions(tape, { jsxEquals })

test('renders container', function (t) {
  t.plan(1)
  renderer.render(React.createElement(HighchartsReact, {
    constructorType: 'chart',
    options: { series: [{ data: [1, 2, 3] }] }
  }))
  var actual = renderer.getRenderOutput()

  t.jsxEquals(
    actual,
    React.createElement('div', { ref: function noRefCheck () {} })
  )
})
