import React, {Component} from 'react';
import RequestUserByIdContainer from "./User/Containers/requestuserbyidcontainer";
import AddUserContainer from "./User/Containers/addusercontainer.js";


class StartingForms extends Component {
    render(){
      return(
        <div>
            <RequestUserByIdContainer></RequestUserByIdContainer>
            <AddUserContainer></AddUserContainer>
        </div>
      );
    }
}
export default StartingForms;
