import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';

class FilteredEmojis extends React.Component {
  render() {
    return (
      <Paper style={{maxHeight:600, overflow:'auto', height: 600}}>
      <List>
        {
          this.props.emojiData.map((emojiData) => {
            const converted = emojiData.symbol.codePointAt(0).toString(16);
            const src = `//cdn.jsdelivr.net/emojione/assets/png/${converted}.png`;
            return (
              <ListItem button key={emojiData.symbol}>
              <ListItemIcon>
                <img
                  alt={emojiData.title}
                  src={src}
                />
              </ListItemIcon>
              <ListItemText primary={emojiData.title} />
              </ListItem>
            );
          })
        }
      </List>
      </Paper>
    );
  }
}

FilteredEmojis.propTypes = {
  emojiData: PropTypes.array,
};

export default FilteredEmojis;
