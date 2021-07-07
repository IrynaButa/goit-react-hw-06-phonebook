import React, { Component } from "react";
import shortid from "shortid";
import styles from "./Form.module.css";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'

//import IconButton from '../IconButton/IconButton';
import { ReactComponent as Add } from "../icons/add.svg";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

   nameInputId = shortid.generate();


  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
     
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label>
          Phone number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
        
          />
        </label>

        <button type="submit">
          {" "}
          <Add width="50" height="20" /> Add contact
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number,id }) =>
    dispatch(
      actions.addContact({
        name,
        number,
        id: shortid.generate()
      }),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
