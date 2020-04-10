/* tslint:disable:max-line-length */
import storyPoints from '../story-points';
import { CLOSE_MODAL, OPEN_MODAL, SELECT_STORY_POINT } from '../../actions/story-points';
const initialState = {
  isOpen: false,
  storyPoints: 5,
};

describe('story points reducer', () => {
  it('should set the isOpen state to true when it receives an action of type OPEN_MODAL', () => {
    const state = storyPoints(initialState, { type: OPEN_MODAL });
    expect(state.isOpen).toBe(true);
  });

  it('should set the isOpen state to false when it receives an action of type CLOSE_MODAL', () => {
    const state = storyPoints(initialState, { type: OPEN_MODAL });
    const nextState = storyPoints(state, { type: CLOSE_MODAL });
    expect(nextState.isOpen).toBe(false);
  });

  it('should set the storyPoints state to the value passed as payload it receives an action of type SELECT_STORY_POINT', () => {
    const state = storyPoints(initialState, { type: SELECT_STORY_POINT, payload: 1 });
    expect(state.storyPoints).toBe(1);
  });
});
