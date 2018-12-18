import * as React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Button from '../../packages/button'

describe('Button', () => {
  it('sets data attributes on alert', () => {
    const wrapper = shallow(<Button data-test="test-id" data-id="12345" />)
    expect(wrapper.prop('data-test')).toBe('test-id')
    expect(wrapper.prop('data-id')).toBe('12345')
  })
})
