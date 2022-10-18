import { useLayoutEffect, useRef, useState } from 'react';

const Blockquote = ({ author, quote, series }) => {

  const [ boxSize, setBoxSize ] = useState({
    width: 0,
    height: 0
  });

  const quoteRef = useRef();

  useLayoutEffect(() => {
    const { current } = quoteRef;
    const { width, height } = current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [])

  return (
    <>
      <blockquote className="blockquote text-center">
        <p ref={ quoteRef }>{ quote }</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        <p>{ author }</p> at <cite title="series">{ series }</cite>
      </figcaption>
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
};

export default Blockquote;