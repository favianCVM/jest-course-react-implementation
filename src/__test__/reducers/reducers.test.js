import reducer from '../../reducers'
import ProductMock from '../../__mocks__/ProductMock'
import initialState from '../../initialState';

describe('reducers:::::', () => {
  test('initialstate returnal', () => {
    expect(reducer(initialState, "")).toEqual(initialState)
  })

  test('add to cart ::::', () => {
    const initialState = { 
      cart: [],
    }
    const action = {
      type: "ADD_TO_CART",
      payload: ProductMock,
    }
    const expected = {
      cart: [
        ProductMock
      ]
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })
})