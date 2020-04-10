import { CLOSE_MODAL, closeModal, OPEN_MODAL, openModal, SELECT_STORY_POINT, selectStoryPoint } from '../story-points';

const dispatch = jest.fn();

describe('story point actions', () => {
  beforeEach(() => {
    dispatch.mockClear();
  });

  it('should dispatch an action to open the modal', () => {
    openModal()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: OPEN_MODAL });
  });

  it('should dispatch an action to close the modal', () => {
    closeModal()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: CLOSE_MODAL });
  });

  it('should dispatch an action to set the selected story point', () => {
    selectStoryPoint(5)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: SELECT_STORY_POINT, payload: 5 });
  });
});
