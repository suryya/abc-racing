/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import NewsList  from 'components/NewsList';
import { HomePage, mapDispatchToProps } from '../index';
import { changeUsername } from '../actions';
import { loadRepos, loadNews } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the news list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} newsfeed={[]} />
    );
    expect(renderedComponent.contains(<NewsList loading error={false} newsfeed={[]} />)).toEqual(true);
  });



  describe('mapDispatchToProps', () => {


      describe('onPageLoad', () => {
        it('should be injected', () => {
          const dispatch = jest.fn();
          const result = mapDispatchToProps(dispatch);
          expect(result.fetchNews).toBeDefined();
        });

        it('should dispatch changeUsername when called', () => {
          const dispatch = jest.fn();
          const result = mapDispatchToProps(dispatch);
          result.fetchNews();
          expect(dispatch).toHaveBeenCalledWith(loadNews());
        });
      });

  });
});
