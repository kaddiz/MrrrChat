import React                from 'react';
import NavPanel             from './NavPanel';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#2c3e50',
    primary2Color: '#1a252f',
    accent1Color: '#18bc9c',
  }
});

import './bootstrap.css';
import './App.scss';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='app'>
          <NavPanel />
          <div className='container'>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
