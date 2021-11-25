import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Formik, FormikHelpers } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import * as Yup from 'yup';
import search from '../../helpers/APICalls/search';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import Image from '/Users/decagon/team-candy-cane/client/src/Images/doglanding.png';

export default function LandingPage(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { place, drop }: { place: string; drop: string },
    { setSubmitting }: FormikHelpers<{ place: string; drop: string }>,
  ) => {
    search(place, drop).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item className={classes.root2}>
        <Typography className={classes.welcome} component="h1" variant="h5">
          Find the care your dog deserves
        </Typography>
        <Formik
          initialValues={{
            place: '',
            drop: '',
          }}
          validationSchema={Yup.object().shape({
            place: Yup.string(),
            drop: Yup.string(),
          })}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              {<Typography className={classes.label}>Where</Typography>}
              <TextField
                id="place"
                fullWidth
                margin="normal"
                label=""
                placeholder="AnyWhere"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                variant="outlined"
                name="place"
                autoComplete="place"
                autoFocus
                helperText={touched.place ? errors.place : ''}
                error={touched.place && Boolean(errors.place)}
                value={values.place}
                onChange={handleChange}
              />
              {<Typography className={classes.label}>Drop IN /Drop OFF</Typography>}
              <TextField
                id="drop"
                fullWidth
                margin="normal"
                label=""
                placeholder="mm/dd/yyyy  |   mm/dd/yyyy"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                variant="outlined"
                type="drop"
                autoComplete="current-drop"
                helperText={touched.drop ? errors.drop : ''}
                error={touched.drop && Boolean(errors.drop)}
                value={values.drop}
                onChange={handleChange}
              />
              <Box textAlign="center">
                <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
                  Find My Dog Sitter
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Grid>
      <Grid item className={classes.root3}>
        <img src={Image} alt="landingPageImage" className={classes.dog} />
      </Grid>
    </Grid>
  );
}
