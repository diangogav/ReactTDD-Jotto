import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let content;
  if (props.guessedWords.length === 0) {
    content =
      <div data-test='guess-instructions'>
        <span>Instructions</span>
      </div>
  } else {
    content =
      <div data-test='guessed-words'>
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th><th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
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