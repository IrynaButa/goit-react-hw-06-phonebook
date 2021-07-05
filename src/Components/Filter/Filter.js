import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => (
  <div className={styles.form}>
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  </div>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
