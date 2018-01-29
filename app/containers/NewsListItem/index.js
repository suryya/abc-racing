/**
 * NewsListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import A from 'components/A';
import Img from 'components/Img';

import { makeSelectCurrentUser , makeSelectNews } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
// import IssueIcon from './IssueIcon';
// import IssueLink from './IssueLink';
import NewsLink from './NewsLink';
import Wrapper from './Wrapper';
import styled from 'styled-components';

const DIVNWS = styled.div`
  list-style: none;
  margin: 6px 1px;
  padding: 2em 0em;
`;

const DIVWRAP = styled.div`
  width: 100%
`;

const NewsImg  = styled(Img)`
  width: 100%;
  margin: 0 auto;
  display: block;
`;

//  max-height: 30em;
//   overflow-y: auto;

export class NewsListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    let nameprefix = '';

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner

    // if (item.owner.login !== this.props.currentUser) {
    //   nameprefix = `${item.owner.login}/`;
    // }

    // Put together the content of the repository
    const content = (
      <Wrapper>

        { (item.url && item.title) ?
          (<DIVWRAP>
              <p><NewsLink href={item.url} target="_blank">{item.title}</NewsLink></p>
              { item.urlToImage ?  (<NewsImg src={item.urlToImage} alt={item.title} />) : null }
              <DIVNWS>{item.description}</DIVNWS>
           </DIVWRAP>) : null }

        {/*<RepoLink href={item.html_url} target="_blank">
          {nameprefix + item.name}
        </RepoLink>
        <IssueLink href={`${item.html_url}/issues`} target="_blank">
          <IssueIcon />
          <FormattedNumber value={item.open_issues_count} />
        </IssueLink>*/}

      </Wrapper>
    );

    debugger
    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item.publishedAt}`} item={content} />
    );
  }
}

NewsListItem.propTypes = {
  item: PropTypes.object
};

export default connect(createStructuredSelector({
  newsContent: makeSelectNews()
}))(NewsListItem);
