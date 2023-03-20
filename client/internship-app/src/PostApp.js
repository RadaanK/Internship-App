import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './pages/Posts/Posts';
import Form from './pages/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';


const PostApp = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg" m={2}>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ p: 5 }} >
              <Box sx={{ height: '11%' }}> </Box>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      
    </Container>
  );
};

export default PostApp;