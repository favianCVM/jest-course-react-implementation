import React from 'react';
import {mount, shallow} from 'enzyme';
import Provider from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe("<Product/>", () => {
  test("product component render", () => {
    const product = shallow(
      <Provider>
        <Product {...ProductMock} />
      </Provider>
    )
    expect(product.length).toEqual(1);
  });

  test("buy button test", () => {
    const handleAddToCar = jest.fn();
    const wrapper = mount(
      <Provider>
        <Product 
          product={ProductMock}
          handleAddToCart={handleAddToCar}
        />
      </Provider>
    )
    wrapper.find('button').simulate('click');
    expect(handleAddToCar).toHaveBeenCalledTimes(1);
  })
})