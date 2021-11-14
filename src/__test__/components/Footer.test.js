import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('render del titulo', () => {
    expect(footer.find(".Footer-title").text()).toEqual("Platzi Store")
  })
});

//testeo con snapshot, esto se aplica para cuando se tiene que testear componentes que no cambian mucho y se quiere tener una base de como se deberia renderizar
describe('footer snapshot', () => {
  test('validate footer rendered ui', () =>{
    const footer = create(<Footer/>)

    expect(footer.toJSON()).toMatchSnapshot()
  })
})