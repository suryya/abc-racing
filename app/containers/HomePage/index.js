/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError, makeSelectNews } from 'containers/App/selectors';
import H2 from 'components/H2';
import NewsList from 'components/NewsList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadNews } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
import styled from 'styled-components';


const H2CENTRE = styled.h2`
  text-align: center
`;


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }

    this.props.fetchNews();
  }

  render() {
    const { loading, error, newsfeed } = this.props;

    const newsListProps = {
      loading,
      error,
      newsfeed,
    };
    debugger
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          <Section>
            <H2CENTRE>
              <FormattedMessage {...messages.horseraceMessage} />
            </H2CENTRE>


            <NewsList {...newsListProps} />

          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  newsfeed: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]),
  username: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    fetchNews: () => dispatch(loadNews())
  };
}

const mapStateToProps = createStructuredSelector({
  newsfeed: makeSelectNews(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
