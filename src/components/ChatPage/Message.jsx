import React          from 'react';
import ListGroupItem  from 'react-bootstrap/lib/ListGroupItem';

export default class Message extends React.Component {
  render() {
    return (
      <ListGroupItem key={this.props.id}>
        <div className='author-name-div'><b>this.props.name</b><span>{this.props.time}</span></div>
        <div>{this.props.msg}</div>
      </ListGroupItem>
    );
  }
}
