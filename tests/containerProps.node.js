import tape from 'tape'
import React from 'react'
import HighchartsReact from '../'
import createComponent from 'react-unit'

const test = tape

test('passess down container props', (t) => {
  t.plan(1)
  var component = createComponent.shallow(
    <HighchartsReact containerProps={{ className: 'my-custom-class-name' }} />
  )

  t.equal(component.props.className, 'my-custom-class-name')
})
