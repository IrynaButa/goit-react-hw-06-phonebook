import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts-actions';


const Filter = ({ filter, onChangeFilter }) => (
  <div className={styles.form}>
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onChangeFilter} />
    </label>
  </div>
);
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: ({ target: { value } }) =>
    dispatch(actions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
