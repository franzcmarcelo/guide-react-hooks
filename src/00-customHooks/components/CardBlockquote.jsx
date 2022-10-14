import { Blockquote } from '../../04-useLayoutEffect';

const CardBlockquote = ({ dataBlockquote, onNextQuote }) => {
    const { quote_id } = dataBlockquote;
    return (
      <div className="card">
        <div className="card-body d-flex flex-column align-items-center gap-3">
          <h5 className="card-title">Quote {quote_id}</h5>
          <Blockquote {...dataBlockquote} />
          <button className="btn btn-primary" onClick={onNextQuote} >Next Quote</button>
        </div>
      </div>
    );
  }

  export default CardBlockquote;