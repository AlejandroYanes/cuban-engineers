import { CLOSE_MODAL, OPEN_MODAL, SELECT_STORY_POINT } from '../actions/story-points';

const initialState = {
  isOpen: false,
  storyPoints: 5,
};

export default function storyPoints(state = initialState, action: { type: string, payload?: any }) {
  const { type, payload } = action;

  switch (type) {
    case OPEN_MODAL:
      return { ...state, isOpen: true };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };
    case SELECT_STORY_POINT:
      return { ...state, storyPoints: payload };
    default:
      return state;
  }
}
