import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import GovernmentIdContainer from "./Containers/governmentidcontainer";
import AddGovernmentIdContainer from "./Containers/addgovernmentidcontainer";
import UpdateGovernmentIdContainer from "./Containers/updategovernmentidcontainer";
import { userUpdatingGovernmentId, setGovernmentId } from "./Actions/governmentidactions"

class GovernmentIdInterface extends Component {

    static propTypes = {
      cardBeingUpdatedByUser: PropTypes.bool.isRequired,
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
        const { governmentId, cardBeingUpdatedByUser, isSettingGovernmentId } = this.props;
        if(isSettingGovernmentId){
          return(<div>...Setting Government ID</div>)
        }
        else{
          if(governmentId){
            if(cardBeingUpdatedByUser){
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
    cardBeingUpdatedByUser: state.governmentId.cardBeingUpdatedByUser,
    setGovernmentIdError: state.governmentId.setGovernmentIdError,
    isSettingGovernmentId: state.governmentId.isSettingGovernmentId,
});

const mapDispatchToProps = (dispatch) => ({
  userUpdatingGovernmentId: () => dispatch(userUpdatingGovernmentId()),
  setGovernmentId: (userId) => dispatch(setGovernmentId(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GovernmentIdInterface);
