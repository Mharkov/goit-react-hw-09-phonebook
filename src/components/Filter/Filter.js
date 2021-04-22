import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contact/contact-actions';
import * as contactSelectors from '../../redux/contact/contact-selectors';

const Filter = ({}) => {
  const dispatch = useDispatch();
  const value = useSelector(contactSelectors.getFilter);
  const onFilter = (e) => dispatch(actions.contactFilter(e.target.value));

  return (
    <div>
      Find contacts by name
      <input type="text" value={value} onChange={onFilter} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

// const mapStateToProps = (state) => ({
//   value: contactSelectors.getFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onFilter: (e) => dispatch(actions.contactFilter(e.target.value)),
// });

// export default connect(null, mapDispatchToProps)(Filter);

export default Filter;
