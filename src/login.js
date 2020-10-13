import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  textfield:{
      marginTop: theme.spacing(3),
      backgroundColor: "#fff",
      borderRadius: 4,

  },
}));

export const Login = props => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    function handelSubmit(event){
        event.preventDefault();
        let data = {
            email: email,
            password: password
        }
        fetch("http://localhost:1337/login", {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data.data.token);
                props.jwtAuth(data.data.token);
                history.push("/");
            })
            .catch(error => console.error('Error:', error));
        }

        const classes = useStyles();

        return (
          <Container className={classes.container} maxWidth="xs">
            <form onSubmit={handelSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField value= {email} className={classes.textfield} fullWidth placeholder="Email" name="email" size="small" variant="outlined" onInput={ e=>setEmail(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        value= {password}
                        className={classes.textfield}
                        fullWidth
                        placeholder="password"
                        name="password"
                        size="small"
                        type="password"
                        variant="outlined"
                        InputProps={{
                            className: classes.input,
                        }}
                        onInput={ e=>setPassword(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button color="secondary" fullWidth type="submit" variant="contained">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        );
      };
export default Login;
