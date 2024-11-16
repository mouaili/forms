import React from 'react';
import Car from './Car';

class Form extends React.Component {
  state = {
    userName: '',
    color: '',
    colors: ['', 'green', 'blue', 'red', 'orange', 'black'],
    comment: '',
    width: 175,
    id: 1,
  };

  handleChangePseudoValue = e => {
    console.log(e.target.value);
    this.setState({ userName: e.target.value });
  };

  handleChangeColorValue = e => {
    console.log(e.target.value);
    this.setState({ color: e.target.value });
  };

  handleChangeWidthValue = e => {
    console.log(e.target.value);
    this.setState({ width: e.target.value });
  };

  handleChangeCommentValue = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.setState({
      userName: '',
      color: '',
      comment: '',
      width: 175,
    });
    console.log(`
        UserName: ${this.state.userName} \n
        Color: ${this.state.color} \n
        Comment: ${this.state.comment} \n
        Width: ${this.state.width} \n
        id: ${this.state.id} \n
        `);
  };

  render() {
    return (
      <div>
        <h1>Le formulaire</h1>

        <Car color={this.state.color} width={this.state.width} />
        <form onSubmit={this.handleSubmitForm}>
          <div>
            <label htmlFor="pseudo">Pseudo : </label>
            <input
              type="text"
              name={this.state.userName}
              id={this.state.id}
              value={this.state.userName}
              onChange={this.handleChangePseudoValue}
            />
          </div>
          <div>
            <label htmlFor="color">Changer de couleur : </label>
            <select
              onChange={this.handleChangeColorValue}
              value={this.state.color}
            >
              {this.state.colors &&
                this.state.colors.map((color, i) => {
                  return (
                    <option key={i} value={color}>
                      {color}
                    </option>
                  );
                })}
            </select>
            <div>
              <label htmlFor="width">
                Changer les dimensions du véhicule :{' '}
              </label>
              <input
                type="number"
                value={this.state.width}
                onChange={this.handleChangeWidthValue}
              />
            </div>
          </div>

          <div>
            <label htmlFor="comments">Commentaire : </label>
            <textarea
              style={{ color: this.state.color }}
              rows="5"
              cols="75"
              value={this.state.comment}
              onChange={this.handleChangeCommentValue}
            ></textarea>
          </div>
          <button>Valider votre choix</button>
        </form>
      </div>
    );
  }
}

export default Form;
