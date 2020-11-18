import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import GovernmentId from '../Presentational/governmentid.js';
import { userUpdatingGovernmentId, deleteGovernmentId } from "../Actions/governmentidactions";


class GovernmentIdContainer extends Component {

    static propTypes = {
        deleteGovernmentId: PropTypes.func.isRequired,
        userUpdatingGovernmentId: PropTypes.func.isRequired,
        isDeletingGovernmentId: PropTypes.bool.isRequired,
        governmentId: PropTypes.object.isRequired,

    }

    render(){
      const { governmentId, deleteGovernmentId, isDeletingGovernmentId, userUpdatingGovernmentId } = this.props;
      if (isDeletingGovernmentId) {
          return <div>Deleting...</div>;
      }
      const { govId, state, expirationDate } = governmentId;
      return(
        <GovernmentId 
        govId={ govId } state={ state } expirationDate={ expirationDate }
        onUpdate={ userUpdatingGovernmentId } onDelete={()=>{ deleteGovernmentId(governmentId.id) }}></GovernmentId>
      )
    }
}

const mapStateToProps = (state) => ({
    governmentId: state.governmentId.governmentId,
    isDeletingGovernmentId: state.governmentId.isDeletingGovernmentId,
});

const mapDispatchToProps = (dispatch) => ({
  userUpdatingGovernmentId: () => dispatch( userUpdatingGovernmentId() ),
  deleteGovernmentId: (id) => dispatch( deleteGovernmentId(id) ),
});


export default connect(mapStateToProps, mapDispatchToProps)(GovernmentIdContainer);
