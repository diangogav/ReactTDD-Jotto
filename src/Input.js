import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions/index';

class Input extends Component {
  render() {
    const contents = this.props.success
      ? null
      : (
        <form>
          <input
            data-test="input-box"
            id="word-guess"
            type="text"
            placeholder="enter guess"
          />
          <button
            data-test="submit-button"
            type="submit"
          >
            Submit
          </button>
        </form>
      )


    return (
      <div data-test="component-input">
        {contents}
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(Input);
