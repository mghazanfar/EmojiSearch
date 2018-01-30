import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

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
