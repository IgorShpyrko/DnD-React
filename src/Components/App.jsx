import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Item from './Item';
import Target from './Target';

class App extends React.Component{
  state = {
    items: [
      { id: 1, name: 'item1'},
      { id: 2, name: 'item2'},
      { id: 3, name: 'item3'},
      { id: 4, name: 'item4'},
    ],
    targetItems: []
  }

  moveToTarget1 = (id) => {
    this.setState(prevState => {
      let items = prevState.targetItems;
      const index = items.findIndex(item => item.id === id)
      let newTargetItems = [...this.state.items]
      newTargetItems.push(items[index])
      items.splice(index, 1);
      

      return { 
        targetItems: items,
        items: newTargetItems
      }
    });
  }

  moveToTarget2 = (id) => {
    this.setState(prevState => {
      let items = prevState.items;
      const index = items.findIndex(item => item.id === id)
      let newTargetItems = [...this.state.targetItems]
      newTargetItems.push(items[index])
      items.splice(index, 1);

      return { 
        items: items,
        targetItems: newTargetItems
      }
    });
  }
    
  render() {
    return(
      <div className="App">
        <div className="App-container">
          <Target>
            {this.state.items.map((item, index) => {
              return <Item key={item.id} item={item} handleDrop={(id) => {
                this.moveToTarget2(id)}}/>
            })}
          </Target>
          <Target>
          {this.state.targetItems.map((item, index) => {
            return <Item 
              key={item.id} 
              item={item} 
              handleDrop={(id) => {
                this.moveToTarget1(id)}}/>
              })
            }
          </Target>
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App)
