import React from 'react';

export class EntryComponent extends React.Component {
  render() {
    const { onChange, ...other } = this.props
    return (
      <input onChange={onChange} />
    )
  }
}
