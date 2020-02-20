import { actionTypes } from '../actions/index';
import successReducer from './successReducer';

test('return false when no state is sent', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test('return true when upon successGuess is fire', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
