import React        from 'react';
import { Link }     from 'react-router';
import Paper        from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  padding: 20,
  marginTop: 10
}

export default class MainPage extends React.Component {
  render() {
    return (
      <div class='container'>
        <Paper style={style} zDepth={1} rounded={false} >
          <h1>Welcome to MrrrChat!</h1>
          <p>Status: 'development'</p>
          <RaisedButton
            label="Let's start!"
            primary={true}
            href='/chat'
          />
        </Paper>
      </div>
    );
  }
}
