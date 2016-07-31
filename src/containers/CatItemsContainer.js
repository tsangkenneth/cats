import { connect } from 'react-redux';
import CatItemsList from '../components/CatItemsList';

const mapStateToProps = (state) => {
  return {
    catItems: state.catItems
  }
};

const CatItemsContainer = connect(
  mapStateToProps
)(CatItemsList);

export default CatItemsContainer;
