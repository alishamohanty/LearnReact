export default function courseReducer(state = [], actions) {
  switch (actions.type) {
  case 'CREATE_COURSE':
    return [...state, { ...actions.course }];
  default:
    return state;
  }
}
