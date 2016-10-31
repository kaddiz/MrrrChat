import React          from 'react';

export default class Message extends React.Component {
  render() {
    return (
      <div>
        <div className='author-name-div'><b>{this.props.name}</b><span>{this.props.time}</span></div>
        <div>{this.props.msg}</div>
      </div>
    );
  }
}
