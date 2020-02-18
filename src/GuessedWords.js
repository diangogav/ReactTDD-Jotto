import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let content;
  if (props.guessedWords.length === 0) {
    content =
      <div data-test='guess-instructions'>
        <span>Instructions</span>
      </div>
  }
  return (
    <div data-test='component-guessed-words'>
      {content}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}


export default GuessedWords;