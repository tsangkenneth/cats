import { connect } from 'react-redux';
import { removeCatItem } from '../actions'
import CatItemsList from '../components/CatItemsList';

const mapStateToProps = (state) => {
  return {
    catItems: state.catItems
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveButtonClick: (index) => {
      dispatch(removeCatItem(index));
    }
  }
}

const CatItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatItemsList);

export default CatItemsContainer;
