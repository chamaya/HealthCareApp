import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import UserInformation from "./userInformation.js"
import StartingForms from "./startingforms.js"


class Home extends Component {

    static propTypes = {
        user: PropTypes.object
    }


    render(){
      const { user } = this.props;
      if(user){
        return(
          <div>
            <UserInformation user = {user}></UserInformation>
          </div>
        );
      }
      else{
        return(
          <div>
            <StartingForms></StartingForms>
          </div>
        );
      }
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user
});

export default connect(mapStateToProps)(Home);
