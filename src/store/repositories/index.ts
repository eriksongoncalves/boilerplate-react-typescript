import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [
    {
      id: 1,
      name: 'Teste'
    }
  ],
  loading: false,
  error: false
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: false
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, data: [], error: true };
    default:
      return state;
  }
};

export default reducer;
