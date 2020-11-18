import React, {Component} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

class GovernmentId extends Component {
    render(){
        const {govId, state, expirationDate, onUpdate, onDelete, classes} = this.props;
        return (
            <div>
                <Card variant = "outlined" className={classes.card}>
                    <CardContent>
                        <h4 style={{textAlign:"center"}}>Government ID</h4>
                        <List  className={classes.list}>
                            <ListItem>
                                <ListItemText primary={govId} secondary="Government ID"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={state} secondary="state"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={expirationDate} secondary="Expiration Date"/>
                            </ListItem>
                            <ListItem>
                                <Button variant="contained" onClick={ onUpdate }>UPDATE</Button>
                                <IconButton aria-label="delete" styles={{backgroundColor:"#fff"}} >
                                    <DeleteIcon onClick={ onDelete }/>
                                </IconButton>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>

            </div>
        );
    }
}

const styles = (theme) => ({
    card: theme.card,
    list: theme.list
});

export default withStyles(styles)(GovernmentId);
