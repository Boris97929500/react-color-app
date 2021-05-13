import React, { Component } from "react";
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from "./PaletteFooter";
import './Palette.css';
import { withStyles } from "@material-ui/styles";

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  colors: {
    height: "90%"
  }
}

class Palette extends Component {
  constructor(props){
    super(props);
    this.state= {level:500, format:'hex'};
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(newLevel){
    this.setState({level:newLevel})
  }
  changeFormat(val){
    this.setState({format:val});
  }

  render() {
    const { level, format } = this.state;
    const {colors, paletteName, id} = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = colors[level].map(color=>(
      <ColorBox background={color[format]} 
      name={color.name} 
      key={color.id} 
      moreUrl={`/palette/${id}/${color.id}`}
      showingFullPalette={true}
      />
    ))

    return (
      <div className={classes.Palette}>
        <Navbar 
          level={this.state.level} 
          changeLevel={this.changeLevel} 
          handleChange={this.changeFormat}
          showingAllColors
        />
        <div className={classes.colors}>
          {colorBoxes}
        </div>
          <PaletteFooter paletteName={paletteName} />
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
