import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import GovernmentIdContainer from "./Containers/governmentidcontainer";
import AddGovernmentIdContainer from "./Containers/addgovernmentidcontainer";
import UpdateGovernmentIdContainer from "./Containers/updategovernmentidcontainer";
import { userUpdatingGovernmentId, setGovernmentId } from "./Actions/governmentidactions"

class GovernmentIdInterface extends Component {

    static propTypes = {
      governmentIdBeingUpdatedByUser: PropTypes.bool.isRequired,
      userId: PropTypes.number.isRequired,
      isSettingGovernmentId: PropTypes.bool.isRequired,
      governmentId: PropTypes.object,
      setGovernmentId: PropTypes.func,
      setGovernmentIdError: PropTypes.object,
    }
    
    componentDidMount(){
      const{governmentId, userId, setGovernmentId, setGovernmentIdError, isSettingGovernmentId} = this.props;
      if(!governmentId && !setGovernmentIdError && !isSettingGovernmentId){
        setGovernmentId(userId);
      }
    }

    render(){
        const { governmentId, governmentIdBeingUpdatedByUser, isSettingGovernmentId } = this.props;
        if(isSettingGovernmentId){
          return(<div>...Setting Government ID</div>)
        }
        else{
          if(governmentId){
            if(governmentIdBeingUpdatedByUser){
              return(
                <UpdateGovernmentIdContainer></UpdateGovernmentIdContainer>
              );
            }
            else{
              return(
                <GovernmentIdContainer></GovernmentIdContainer>
              )
            }
          }
          return (
              <div>
                  <h2>Add a Government ID</h2>
                  <AddGovernmentIdContainer></AddGovernmentIdContainer>
              </div>
          );
      }
    }
}

const mapStateToProps = (state) => ({
    governmentId: state.governmentId.governmentId,
    governmentIdBeingUpdatedByUser: state.governmentId.governmentIdBeingUpdatedByUser,
    setGovernmentIdError: state.governmentId.setGovernmentIdError,
    isSettingGovernmentId: state.governmentId.isSettingGovernmentId,
});

const mapDispatchToProps = (dispatch) => ({
  userUpdatingGovernmentId: () => dispatch(userUpdatingGovernmentId()),
  setGovernmentId: (userId) => dispatch(setGovernmentId(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GovernmentIdInterface);
