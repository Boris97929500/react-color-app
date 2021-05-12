import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Palette from "./Palette";
import PaletteList from './PaletteList';
import seedColors from "./seedColors";
import {generatePalette} from './colorHelpers';

class App extends Component {
  constructor(props){
    super(props);
    this.findPalette = this.findPalette.bind(this);
  }

  findPalette(id){
    return seedColors.find( function(palette){
      return palette.id===id
    }  );
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={ ()=><PaletteList palettes={seedColors}/> } />
        <Route exact path='/palette/:id' render={
          routeProps=><Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}/>
        <Route  path='*' exact render={ ()=><h1>404 PAGE NOT FOUND</h1> } />
      </Switch>


    );
  }
}

export default App;
