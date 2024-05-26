import { useEffect, useRef } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import classes from "./NewCommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;
  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, onAddedComment, error]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const comment = commentTextRef.current.value;
    // console.log(props.quoteId);

    sendRequest({ commentData: { text: comment }, quoteId: props.quoteId });
    commentTextRef.current.value = "";

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
