import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Badge from 'react-bootstrap/lib/Badge';
import Panel from 'react-bootstrap/lib/Panel';

export default class RoomList extends React.Component {
  render() {
    return (
      <div>
        <Panel header='Room list' bsStyle='primary'>
          <ListGroup>
            <ListGroupItem href="#">Link 1 <Badge>12</Badge></ListGroupItem>
            <ListGroupItem href="#">Link 2 <Badge>12</Badge></ListGroupItem>
            <ListGroupItem href="#">Link 3 <Badge>12</Badge></ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    );
  }
}
