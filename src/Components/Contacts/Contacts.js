import React from "react";
import PropTypes from "prop-types";
import styles from "./Contacts.module.css";

import shortid from "shortid";

import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
import IconButton from "../IconButton/IconButton";
import { ReactComponent as Delete } from "../icons/trash.svg";
import { ReactComponent as Phone } from "../icons/phone.svg";
//import { ReactComponent as IconUser } from '../../img/user.svg';

const Contacts = ({ contacts, onDeleteContact,id }) => (
   
  <ul className={styles.formContacts}>
    {contacts.map(({id, name, number}) => (
      <li key={id}>
        <Phone width="30" height="20" />
        {name}
        {" : "}
        {number}
        <IconButton
          onClick={() => onDeleteContact(id)}
          title="delete"
          aria-label="Delete tag"
        >
          <Delete width="20" height="20" />
        </IconButton>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
 onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,

};
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(Contacts);