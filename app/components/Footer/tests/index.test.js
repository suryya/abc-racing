import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import messages from '../messages';
import Footer from '../index';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <section>
        <FormattedMessage {...messages.licenseMessage}
          values={{
            provider: <A target="_blank" href= "http://wwww.reactboilerplate.com"> reactboilerplate.com </A>,
          }}
          />
      </section>
    )).toBe(true);
  });

  
});
