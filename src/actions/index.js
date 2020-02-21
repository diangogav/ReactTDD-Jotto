import { getLetterMatchCount } from '../helpers/index';
export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
};

export function guessWord(guessedWord) {
  return function(dispatch, getState) {
    const { secretWord } = getState();
    const letterMatchCount = getLetterMatchCount(secretWord, guessedWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      });
    }
  };
}
