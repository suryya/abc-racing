/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS, LOAD_NEWS } from 'containers/App/constants';
import { reposLoaded, newsLoaded, repoLoadingError , newsLoadingError} from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getNews() {
  // Select username from store
  //const username = yield select(makeSelectUsername());
  //const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  //const requestURL = `https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=a736ce0525574cd79079d5a862e14283`;
  const requestURL = `https://newsapi.org/v2/everything?q=horse%20racing&sortBy=popularity&apiKey=a736ce0525574cd79079d5a862e14283`;

  try {
    // Call our request helper (see 'utils/request')
    const newsContent = yield call(request, requestURL);
    yield put(newsLoaded(newsContent));
  } catch (err) {
    yield put(newsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield [takeLatest(LOAD_REPOS, getRepos),
         takeLatest(LOAD_NEWS, getNews)]
}
