import React from "react";
import fetch from "node-fetch";

import Pokedex from "./Pokedex";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class Form extends React.Component {
  state = {
    pokemon: {
      types: [],
      abilities: []
    },
    search: ""
  };

  _handleChange = event => {
    this.setState({ search: event.target.value });
  };

  _callApi = () => {
    let self = this;
    let pokemonName = this.state.search;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`, {
      method: "GET",
      "Content-Type": "application/x-www-form-urlencoded"
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        //self.state.pokemon = json;
        self.setState({ pokemon: json });

        console.log(json);
      })
      .catch(err => {
        alert(`No existe el pokemon: ${pokemonName}`);
      });
  };

  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3}>
          <TextField
            id="outlined-name"
            label="Pokemon Name"
            onChange={this._handleChange}
            margin="normal"
            value={this.state.search}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this._callApi}
            style={{ marginLeft: "15px", marginTop: "24px" }}
          >
            Search
          </Button>
        </Grid>
        <Pokedex
          name={this.state.pokemon.name}
          types={this.state.pokemon.types}
          abilities={this.state.pokemon.abilities}
          height={this.state.pokemon.height}
          weight={this.state.pokemon.weight}
          number={this.state.pokemon.id}
        />
      </Grid>
    );
  }
}

export default Form;
