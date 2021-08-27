import { call, put } from 'redux-saga/effects';

import api from 'services/api';
import { loadFailure, loadSuccess } from './actions';

export function* load(): unknown {
  try {
    const response = yield call(api.get, 'users/eriksongoncalves/repos');

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
