import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Panel from 'react-bootstrap/lib/Panel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

import './Chat.scss';

export default class Chat extends React.Component {
  render() {
    var chatName = 'Default';

    return (
      <div className='chat'>
        <Panel header={chatName} bsStyle='primary'>
          <ListGroup fill>
            <ListGroupItem>
              <div className='author-name-div'><b>Name 1</b><span>{'12:12 12.10.2016'}</span></div>
              <div>Message 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </ListGroupItem>
            <ListGroupItem>
              <div className='author-name-div'><b>Name 2</b><span>{'12:12 12.10.2016'}</span></div>
              <div>Message 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </ListGroupItem>
            <ListGroupItem>
              <div className='author-name-div'><b>Name 3</b><span>{'12:12 12.10.2016'}</span></div>
              <div>Message 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </ListGroupItem>
            <ListGroupItem>
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
              </blockquote>
            </ListGroupItem>
          </ListGroup>
          <div className='send-message'>
            <FormControl componentClass="textarea" placeholder="Type message..." />
            <Button bsStyle='primary'>Send</Button>
          </div>
        </Panel>
      </div>
    );
  }
}
