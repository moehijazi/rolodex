import React, { Component } from 'react';
import './App.css';
import {CardList} from './Components/CardList/CardList';
import {SearchBox} from './Components/SearchBox/SearchBox';
import {CreatureSelector} from './Components/CreatureSelector/CreatureSelector';

class App extends Component {

  constructor(){
    super();

    this.state ={
      monsters: [],
      searchField: '',
      set: 1,
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    


    return (
      <div className="App">
          <h1> Rolodex</h1>
          <SearchBox placeholder='Search Monsters' handleChange={e => this.setState({searchField: e.target.value})} />
          <CreatureSelector handleChange={e=>{this.setState({set: e.target.value}  );}} />
          <CardList monsters={filteredMonsters} set={this.state.set} /> 
      </div>
    );
  }
}

export default App;
