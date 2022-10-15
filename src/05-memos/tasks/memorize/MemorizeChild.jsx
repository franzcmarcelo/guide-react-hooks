import { memo } from 'react';

// whitout increment function, just memorized the component,
// because the value of factor is the same, and makes reference
// to the same site in memory, because is a number is a primitive type.

// however, the functions like increment be memorized since
// father component with useCallBack,

// because the function is a reference to a object and the object is not
// a primitive type, so in each render the function is different because the renference change.
// memorizing the function, we will control that the reference to the object is the same.

const MemorizeChild = memo(({
  factor,
  increment
}) => {

  console.log(
    'Component MemorizeChild render',
    factor,
    increment
  );

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => increment(factor)}
    >
      {factor}
    </button>
  )
});

export default MemorizeChild;
