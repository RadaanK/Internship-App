import Data from "./mock-data.json";
import {useState} from "react";
import "./SearchBar.css";

export default function SearchBar (){
  const [query, setQuery] = useState("")
  return (
    <div className="searchBar">
      <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
      {
  Data.filter(post => {
    if (query === '') {
      return post;
    } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  }).map((post, index) => (
    <div className="box" key={index}>
      <p>{post.title}</p>
      <p>{post.author}</p>
    </div>
  ))
}

    </div>
 )
}