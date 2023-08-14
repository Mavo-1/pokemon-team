import { useState, useEffect } from "react";
import axios from "axios";
import {Button} from 'reactstrap'



const Post = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text"
      )
      .then((response) => setPost(response.data));
  }, []);
  return (
    <>
      {post && (
        <div className="position-relative">
          <span className="d-block pb-4 h2 text-dark border-bottom border-gray">
            Choose Your Pokemon Team!
            
          </span>
          <Button type="submit"  color="success" >Catch New Pokemon</Button>

          <article
            className="pt-5 text-secondary text-justify"
            style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}
          >
            {post}
          </article>
        </div>
      )}
    </>
  );
};

export default Post;