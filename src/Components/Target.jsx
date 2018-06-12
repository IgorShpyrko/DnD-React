import React from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem
  }
}

class Target extends React.Component{
  render() {
    const { connectDropTarget, hovered} = this.props;
    const backgroundColor = hovered ? 'lightgreen' : 'white'

    return connectDropTarget(
      <div className='target' style={{ backgroundColor }}>
        Target
        {this.props.children}
      </div>
    )
  }
}

export default DropTarget('item', {}, collect)(Target)