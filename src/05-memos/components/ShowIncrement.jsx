import { memo } from 'react';

const ShowIncrement = memo(({ increment }) => {

  // console.log('Component ShowIncrement render');

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={ () => {
          increment(5)
        } }
      > +1
      </button>
    </>
  )
});

export default ShowIncrement