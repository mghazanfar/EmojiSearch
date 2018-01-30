import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

/*
 * Simple textInput to recieve user's input with label and onChange function. The onChange function is defined in the class.
 * This handleChange function takes textChange function to handle input whenever a value is changed.
 */

class SearchEmojiField extends React.Component {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
      <div>
        <TextField
          id="search"
          label="Search desired emoji"
          type="search"
          margin="normal"
          onChange={this.handleChange}
          fullWidth
        />
      </div>
    );
  }
}
SearchEmojiField.propTypes = {
  textChange: PropTypes.func,
};
export default SearchEmojiField;
