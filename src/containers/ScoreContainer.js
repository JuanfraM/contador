import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Score from '../components/Score';
import { incrementLeft, decrementLeft, incrementRight, decrementRight } from '../actions/counter';

const mapStateToProps = (state, ownProps) => (checkStateLeft(state, ownProps));

const checkStateLeft = (state, ownProps) => {
  if (ownProps.left) {
    return { score: state.score.left }
  }
  return { score: state.score.right };
}

const checkDispatchLeft = (dispatch, ownProps) => {
  if (ownProps.left) {
    return {
      increment: () => dispatch(incrementLeft()),
      decrement: () => dispatch(decrementLeft()),
    }
  }
  return {
    increment: () => dispatch(incrementRight()),
    decrement: () => dispatch(decrementRight()),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => (checkDispatchLeft(dispatch, ownProps))

const ScoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Score);

const { bool } = PropTypes;

ScoreContainer.propTypes = {
  left: bool.isRequired,
};

export default ScoreContainer;
