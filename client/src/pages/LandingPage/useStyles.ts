import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  root2: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root3: {
    width: '715px',
  },
  dog: {
    width: '100%',
    height: '100vh',
  },
  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    alignItems: 'center',
  },
  label: {
    fontSize: 19,
    marginTop: '30px',
    color: 'black',
    paddingLeft: '5px',
  },
  inputs: {
    height: '2rem',
    padding: '5px',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 190,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: '#f14140',
    fontWeight: 'bold',
  },
  welcome: {
    paddingBottom: 20,
  },
}));

export default useStyles;
