import React from 'react'
import {mount, shallow} from 'enzyme'
import { create } from 'react-test-renderer'
import ProviderMock from '../../__mocks__/ProviderMock'
import Header from '../../components/Header'

//El provider mock es para que, como el componente header usa mapstatetoprops no lanze error al tratar de conseguir el estate mediante el props ( se podria decir que es un "router/provider" falso para probar)
describe('<Header />', () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>
  )

  test('test del header render', () => {
    expect(header.length).toEqual(1)
  })
})

describe('header snapshot', () => {
  test('validate header rendered ui', () => {
    const header = create(
      <ProviderMock>
        <Header/>
      </ProviderMock>
    )

    expect(header.toJSON()).toMatchSnapshot()
  })
})

