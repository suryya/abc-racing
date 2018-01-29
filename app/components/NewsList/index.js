import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import NewsListItem from 'containers/NewsListItem';

function NewsList({ loading, error, newsfeed }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (newsfeed !== false) {
    return <List items={newsfeed} component={NewsListItem} />;
  }

  return null;
}

NewsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  newsfeed: PropTypes.any,
};

export default NewsList;
