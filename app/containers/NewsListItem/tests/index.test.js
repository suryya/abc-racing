/**
 * Test the repo list item
 */

import React from 'react';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';

import ListItem from 'components/ListItem';
import { NewsListItem } from '../index';

const renderComponent = (props = {}) => render(
  <IntlProvider locale="en">
    <NewsListItem {...props} />
  </IntlProvider>
);

describe('<NewsListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
      },
      "author": "Sarah Buhr",
      "title": "Here’s how to live stream the Grammys tonight",
      "description": "Don’t have a TV or just want to watch Kesha, Cardi B and Lady Gaga walk the red carpet from the comfort of your laptop? Thanks to modern tech, that’s possible tonight. James Corden kicks off the 60th annual Grammy awards this evening, Sunday, January 28, at 7…",
      "url": "http://techcrunch.com/2018/01/28/heres-how-to-live-stream-the-grammys-tonight/",
      "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2018/01/gettyimages-910324026.jpg",
      "publishedAt": "2018-01-28T17:58:19Z",
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(
      <NewsListItem item={item} />
    );
    expect(renderedComponent.find(ListItem).length).toBe(1);
  });

  // it('should not render the current username', () => {
  //   const renderedComponent = renderComponent({
  //     item,
  //     currentUser: item.owner.login,
  //   });
  //   expect(renderedComponent.text()).not.toContain(item.owner.login);
  // });

  // it('should render usernames that are not the current one', () => {
  //   const renderedComponent = renderComponent({
  //     item,
  //     currentUser: 'nikgraf',
  //   });
  //   expect(renderedComponent.text()).toContain(item.owner.login);
  // });

  // it('should render the repo name', () => {
  //   const renderedComponent = renderComponent({ item });
  //   expect(renderedComponent.text()).toContain(item.name);
  // });

  // it('should render the issue count', () => {
  //   const renderedComponent = renderComponent({ item });
  //   expect(renderedComponent.text()).toContain(item.open_issues_count);
  // });

  // it('should render the IssueIcon', () => {
  //   const renderedComponent = renderComponent({ item });
  //   expect(renderedComponent.find('svg').length).toBe(1);
  // });
});
