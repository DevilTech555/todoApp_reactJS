import React from 'react';
import "./App.css";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({list,newItem: ""});
    }
  }

  deletItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({list: updatedlist});
  }

  updateInput(input){
    this.setState({newItem: input});
  }

  render(){
    return(
      <div>
        <h1 className="app-title">Todo APP</h1>
        <div className="container1">
          Add an Item...
          <br/>
          <input type="text" className="input-text" placeholder="write a todo" required value={this.state.newItem} onChange={e => this.updateInput(e.target.value)}/>
          <button className="add-btn" onClick={() => this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>Add todo</button>
          <div className="list">
            <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button className="button" onClick={()=>{this.deletItem(item.id)}}>Delete</button>
                </li> 
              );
            })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;