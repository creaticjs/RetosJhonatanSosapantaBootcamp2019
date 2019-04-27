import React from "react";

class Persona extends React.Component {
  render() {
    return (
      <div>
        <p>Soy una persona y mi nombre es {this.props.nombre}</p>
        <p>Mi genero es:{this.props.genero}</p>
        <p>
          {this.props.genero == "Masculino" ? "Soy un macho" : "Soy una niña"}
        </p>
        <input onChange={this.props.cambiar} type="text" />
      </div>
    );
  }
}

export default Persona;