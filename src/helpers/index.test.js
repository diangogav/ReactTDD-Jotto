import { getLetterMatchCount } from './index';

describe('letterMatchCount', () => {
  const secretWord = 'party';

  test('should return 0 when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount(secretWord, 'bones');
    expect(letterMatchCount).toBe(0);
  });

  test('should return 3 for `party` secretWord and train `guessWord`', () => {
    const letterMatchCount = getLetterMatchCount(secretWord, 'train');
    expect(letterMatchCount).toBe(3);
  });

  test('duplicate letters test: should return 3 for `party` secretWord and parka `guessWord`', () => {
    const letterMatchCount = getLetterMatchCount(secretWord, 'parka');
    expect(letterMatchCount).toBe(3);
  });
});
