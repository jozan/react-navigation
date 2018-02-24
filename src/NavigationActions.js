const BACK = 'Navigation/BACK';
const INIT = 'Navigation/INIT';
const NAVIGATE = 'Navigation/NAVIGATE';
const RESET = 'Navigation/RESET';
const SET_PARAMS = 'Navigation/SET_PARAMS';
const URI = 'Navigation/URI';
const COMPLETE_TRANSITION = 'Navigation/COMPLETE_TRANSITION';

const createAction = (type, fn) => {
  fn.toString = () => type;
  return fn;
};

const back = createAction(BACK, (payload = {}) => ({
  type: BACK,
  key: payload.key,
}));

const init = createAction(INIT, (payload = {}) => {
  const action = {
    type: INIT,
  };
  if (payload.params) {
    action.params = payload.params;
  }
  return action;
});

const navigate = createAction(NAVIGATE, payload => {
  const action = {
    type: NAVIGATE,
    routeName: payload.routeName,
  };
  if (payload.params) {
    action.params = payload.params;
  }
  if (payload.action) {
    action.action = payload.action;
  }
  return action;
});

const reset = createAction(RESET, payload => ({
  type: RESET,
  index: payload.index,
  key: payload.key,
  actions: payload.actions,
}));

const setParams = createAction(SET_PARAMS, payload => ({
  type: SET_PARAMS,
  key: payload.key,
  params: payload.params,
}));

const uri = createAction(URI, payload => ({
  type: URI,
  uri: payload.uri,
}));

const completeTransition = createAction(COMPLETE_TRANSITION, payload => ({
  type: COMPLETE_TRANSITION,
}));

export default {
  // Action constants
  BACK,
  INIT,
  NAVIGATE,
  RESET,
  SET_PARAMS,
  URI,
  COMPLETE_TRANSITION,

  // Action creators
  back,
  init,
  navigate,
  reset,
  setParams,
  uri,
  completeTransition,
};
