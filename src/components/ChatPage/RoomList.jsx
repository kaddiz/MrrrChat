import React              from 'react';
import Paper              from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Badge              from 'material-ui/Badge';

import './RoomList.scss';

const style = {
  margin: 0,
  paddingTop: 10,
  paddingLeft: 15,
  paddingBottom: 10,
  backgroundColor: '#00BCD4',
  color: '#fff'
}

export default class RoomList extends React.Component {
  render() {
    return (
      <div className='room-list'>
        <Paper zDepth={1} rounded={false}>
          <h2 style={style}>Room list</h2>
          <List>
            <ListItem>
              Room 2 <Badge badgeContent={4} primary={true}></Badge>
            </ListItem>
            <ListItem>
              Room 1 <Badge badgeContent={12} primary={true}></Badge>
            </ListItem>
            <ListItem>
              Room 3 <Badge badgeContent={8} primary={true}></Badge>
            </ListItem>
          </List>
        </Paper>
      </div>
    );
  }
}
