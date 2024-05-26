import classes from './QuoteItem.module.css';
import {Link} from "react-router-dom/cjs/react-router-dom.min"
const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link  className='btn' to={`Quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
