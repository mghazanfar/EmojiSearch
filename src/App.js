import React from 'react';
import Title from './Title';
import SearchEmojiField from './SearchEmojiField';
import FilteredEmojis from './FilteredEmojis';
import filterEmoji from './filterEmoji';
import Emojis from './emojis.jpg';
import Paper from 'material-ui/Paper';

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
      <div style={{ backgroundImage: `url(${Emojis})`, height:'100vh' }} >
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'rgba(0,0,0,0.85)', width:'100%', height:'inherit', justifyContent:'center'}}>
        <Paper elevation={23} style={{padding:20}}>
        <Title/>
        <div style={{maxWidth:500, display:'flex', alignItems:'center', flexDirection:'column'}}>
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
