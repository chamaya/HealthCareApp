import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import RequestUserByIdContainer from "./User/Containers/requestuserbyidcontainer";
import AddUserContainer from "./User/Containers/addusercontainer.js";
import User from "./User/Presentational/user";
import MedicalCardInterface from "./MedicalCard/medicalcardinterface.js";
import GovernmentIdInterface from "./GovernmentID/governmentidinterface.js";
import Container from '@material-ui/core/Container';


class Home extends Component {

    static propTypes = {
        user: PropTypes.object
    }


    render(){
      const { user } = this.props;
      if(user){
        return(
          <div>
            <Container maxWidth="sm">
              <User name={user.name} dob={user.dob} email={user.email}></User>
              <MedicalCardInterface userId={user.id}></MedicalCardInterface>
              <GovernmentIdInterface userId={user.id}></GovernmentIdInterface>
            </Container>

          </div>
        );
      }
      else{
        return(
          <div>
            <RequestUserByIdContainer></RequestUserByIdContainer>
            <AddUserContainer></AddUserContainer>
          </div>
        );
      }
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user
});

export default connect(mapStateToProps)(Home);
