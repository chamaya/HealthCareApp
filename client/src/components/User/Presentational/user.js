import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

class User extends Component {
    render(){
        const {name, email, dob} = this.props;
        return (
            <Container maxWidth="sm">
                <h5>{ name } </h5>
                <h5>{ dob }</h5>
                <h5>{ email }</h5>
            </Container>
        );
    }
}

export default User;
