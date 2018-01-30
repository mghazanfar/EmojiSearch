import React from 'react';
import Typography from 'material-ui/Typography';
import SearchEmojiField from './SearchEmojiField';
import FilteredEmojis from './FilteredEmojis';
import filterEmoji from './filterEmoji';
import Emojis from './emojis.jpg';
import Paper from 'material-ui/Paper';

/*
 * This App class has a state filteredEmoji that uses function "filterEmoji(searchText, maxResults)" to filter emojis wrt entered name and also matches
 * that word to relevant keyword.
 * handleSearchChange keeps check on entered value in input field to keep matching emojis and showing in the results.
 */

 const styles = {
    container: {
      backgroundImage: `url(${Emojis})`,
      height:'100vh' 
    },
    inner: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundColor:'rgba(0,0,0,0.85)',
      width:'100%',
      height:'inherit',
      justifyContent:'center'
    },
    p20: {
      padding: 20
    },
    panel: {
      maxWidth:500,
      display:'flex',
      alignItems:'center',
      flexDirection:'column'
    }
  };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji('', 20),
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20),
    });
  }

  render() {
    return (
      <div style={styles.container} >
        <div style={styles.inner}>
          <Paper elevation={23} style={styles.p20}>
            <Typography type="display1" gutterBottom align="center" color="primary">
              Simple Emoji Search App
            </Typography>
            <div style={styles.panel}>
              <SearchEmojiField
                textChange={this.handleSearchChange}
              />
              <FilteredEmojis
                emojiData={this.state.filteredEmoji}
              />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
export default App;
