import React                from 'react';
import { Link }             from 'react-router';
import AppBar               from 'material-ui/AppBar';
import IconButton           from 'material-ui/IconButton';
import NavigationClose      from 'material-ui/svg-icons/navigation/close';
import FlatButton           from 'material-ui/FlatButton';

export default class NavPanel extends React.Component {
  render() {
    return (
      <AppBar
        title={<Link to='/'>MrrrChat</Link>}
        iconElementRight={<FlatButton label={<Link to='/chat'>Chat</Link>} />}
      />
    );
  }
}
