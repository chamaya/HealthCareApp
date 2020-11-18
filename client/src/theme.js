import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  card:{
    display:"inline-block",
    float: "left"
  },
  list:{
    width: '100%',
    backgroundColor: "#eee",
    padding:"0rem"
  },
});

export default theme;