export const SELECT_STORY_POINT = 'SELECT_STORY_POINT';
export function selectStoryPoint(points: number) {
  return dispatch => dispatch({ type: SELECT_STORY_POINT, payload: points });
}

export const OPEN_MODAL = 'OPEN_MODAL';
export function openModal() {
  return dispatch => dispatch({ type: OPEN_MODAL });
}

export const CLOSE_MODAL = 'CLOSE_MODAL';
export function closeModal() {
  return dispatch => dispatch({ type: CLOSE_MODAL });
}
