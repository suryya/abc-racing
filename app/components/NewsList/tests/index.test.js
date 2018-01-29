import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

//import RepoListItem from 'containers/RepoListItem';

import NewsListItem from 'containers/NewsListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import NewsList from '../index';

describe('<NewsList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <NewsList loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NewsList
          loading={false}
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the repositories if loading was successful', () => {
    const newsfeed = [{
        "source": {
            "id": null,
            "name": "Flickr.com"
        },
        "author": "bgfotologue",
        "title": "Horse racing fan.",
        "description": "#HongKong #HKJC #JockeyClub  Bell Chan | BGfotologue   follow me on : Facebook Page |  Instagram",
        "url": "https://www.flickr.com/photos/bellchan/27422347319",
        "urlToImage": "https://c1.staticflickr.com/5/4692/27422347319_f96ab2e69c_b.jpg",
        "publishedAt": "2017-12-21T15:50:10Z",
    }];
    const renderedComponent = shallow(
      <NewsList
        loading={false}
        error={false}
        newsfeed={newsfeed}
      />
    );

    expect(renderedComponent.contains(<List items={newsfeed} component={NewsListItem} />)).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <NewsList
        loading={false}
        error={false}
        newsfeed={false}
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
