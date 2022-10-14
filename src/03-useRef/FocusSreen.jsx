import { useRef } from 'react';

const FocusSreen = () => {

  const inputRef = useRef();

  const onFocusInput = () => {
    inputRef.current.select();
  }

  const onClearInput = () => {
    inputRef.current.value = '';
    onFocusInput();
  }

  return (
    <div>
      <div className='mb-4'>
        <h3 className="mb-3"> FocusSreen </h3>
        <div>
          <span className="badge rounded-pill text-bg-dark fs-6"> useRef </span>
        </div>
      </div>
      <input
        ref={ inputRef }
        className="form-control"
        type="text"
        placeholder="Your name"
      />
      <button className="btn btn-primary mt-3" onClick={ onFocusInput }> Focus </button>
      <button className="btn btn-success ms-2 mt-3" onClick={ onClearInput }> Clear </button>
    </div>
  )
}

export default FocusSreen