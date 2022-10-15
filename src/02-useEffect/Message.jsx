import { useEffect, useState } from 'react';

const Message = ({username}) => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // console.log('component mounted');
    return () => {
      // console.log('component unmounted');
    }
  }, [])

  useEffect(() => {

    const onMouseMove = (event) => {
      const { x, y } = event;
      // console.log({ x, y });
      setCoords({ x, y });
    }

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [])

  return (
    <p className='mt-3 text-center'>
      Hola {username}, tus coordenadas son: {JSON.stringify(coords)}
    </p>
  )

}

export default Message;