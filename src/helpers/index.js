export const getLetterMatchCount = (secretWord, guessWord) => {
  const secretWordNoRepeatLetters = new Set(secretWord);
  const guessWordNoRepeatLetters = new Set(guessWord);
  return [...secretWordNoRepeatLetters].filter(letter =>
    guessWordNoRepeatLetters.has(letter)
  ).length;
};
