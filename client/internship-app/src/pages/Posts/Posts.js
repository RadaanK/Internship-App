import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {useState} from "react";



import Post from './Post/Post';
import useStyles from './styles';
import {} from '../SearchBar/SearchBar.css';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const [query, setQuery] = useState("");

  return (
    <div>
    
    <div className="searchBar">
      <input className="input" placeholder=" Enter Post Title" onChange={event => setQuery(event.target.value)} />
    </div>
      
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.filter(post => {
    if (query === '') {
      return post;
    } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  }).map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
        
      </Grid>

    </div>
  );
};

export default Posts;