import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage
          {...messages.licenseMessage}
          values={{
            provider: <A target="_blank" href= "http://wwww.reactboilerplate.com"> reactboilerplate.com </A>
          }}
          />
      </section>
      <section>

      </section>
      <section>
        <LocaleToggle />
      </section>
    </Wrapper>
  );
}

export default Footer;
