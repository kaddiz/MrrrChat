import React, {Component} from 'react';
import { Link }           from 'react-router';
import AppBar             from 'material-ui/AppBar';
import IconButton         from 'material-ui/IconButton';
import IconMenu           from 'material-ui/IconMenu';
import MenuItem           from 'material-ui/MenuItem';
import FlatButton         from 'material-ui/FlatButton';
import Toggle             from 'material-ui/Toggle';
import MoreVertIcon       from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose    from 'material-ui/svg-icons/navigation/close';

const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText={<Link className='link' to='/'>Home</Link>} />
    <MenuItem primaryText={<Link className='link' to='/chat'>Chat</Link>} />
  </IconMenu>
);

Menu.muiName = 'IconMenu';

export default class NavPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <AppBar title="MrrrChat" iconElementRight={<Menu />} />
      </div>
    );
  }
}
