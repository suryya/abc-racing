import React from 'react';
import { shallow, render } from 'enzyme';

import NewsLink from '../NewsLink';

describe('<NewsLink />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = render(<NewsLink />);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<NewsLink />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<NewsLink id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<NewsLink attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
