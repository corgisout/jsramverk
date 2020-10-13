import React, { useState } from "react";
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

export const MakeReport = props => {
  const [kmom, setKmom] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();


  function handleSubmit(event) {
      event.preventDefault();

      let data = {
          kmom: kmom,
          content: content
      }

      fetch("http://localhost:1337/reports", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': props.jwt
        },
      })
          .then(response => {
              console.log(props.jwt);
              return response.json();
          }).then(data => {
              console.log(data);
          })
          .catch(error => console.error('Error:', error));
  }
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField value= {kmom} className={classes.textfield} multiline fullWidth placeholder="kmom" name="kmom" size="small" variant="outlined" onInput={ e=>setKmom(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value= {content}
                  className={classes.textfield}
                  fullWidth
                  placeholder="content"
                  name="content"
                  size="small"
                  variant="outlined"
                  multiline
                  InputProps={{
                      className: classes.input,
                  }}
                  onInput={ e=>setContent(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" fullWidth type="submit" variant="contained">
              make report
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default MakeReport;
