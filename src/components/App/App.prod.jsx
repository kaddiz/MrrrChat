import Grid                 from 'react-bootstrap/lib/Grid';
import Nav                  from 'react-bootstrap/lib/Nav';
import Navbar               from 'react-bootstrap/lib/Navbar';
import NavItem              from 'react-bootstrap/lib/NavItem';
import LinkContainer        from 'react-router-bootstrap/lib/LinkContainer';
import React                from 'react';
import { Link }             from 'react-router';

import './bootstrap.css';
import './App.scss';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className='app'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'><b>MrrrChat</b></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to='/chat'>
                <NavItem>Chat</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}
