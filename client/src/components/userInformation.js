import React, {Component} from 'react';
import User from "./User/Presentational/user";
import MedicalCardInterface from "./MedicalCard/medicalcardinterface.js";
import GovernmentIdInterface from "./GovernmentID/governmentidinterface.js";
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";


class UserInformation extends Component {
    render(){
      const { user, history } = this.props;
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
      setTimeout(()=>{ history.push("/") }, 0)
      return <div>No User Selected</div>
    }
}

const mapStateToProps = (state) => ({
  user: state.user.user
});
export default connect(mapStateToProps)(UserInformation);
