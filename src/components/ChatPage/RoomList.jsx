import React              from 'react';
import Paper              from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';

import './RoomList.scss';

const style = {
  margin: 0,
  paddingTop: 10,
  textAlign: 'center',
  paddingBottom: 10,
  backgroundColor: '#42A5F5',//'#00BCD4',
  color: '#fff'
}

export default class RoomList extends React.Component {
  render() {
    return (
      <div className='room-list'>
        <Paper zDepth={1} rounded={false} style={{backgroundColor: '#FAFAFA'}}>
          <h2 style={style}>Room list</h2>
          <List>
            <ListItem>Room 2</ListItem>
            <ListItem>Room 1</ListItem>
            <ListItem>Room 3</ListItem>
          </List>
        </Paper>
      </div>
    );
  }
}
