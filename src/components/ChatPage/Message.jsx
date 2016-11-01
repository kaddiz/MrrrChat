import React          from 'react';
import { ListItem }   from 'material-ui/List';

export default class Message extends React.Component {
  render() {
    return (
      <ListItem>
        <div className='author-name-div'><b>{this.props.name}</b><span>{this.props.time}</span></div>
        <div>{this.props.msg}</div>
      </ListItem>
    );
  }
}
