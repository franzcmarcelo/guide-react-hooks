import { memo } from 'react'

const Counter = memo(({ count }) => {

  // console.log('Component memo render ->', count);

  return (
    <small>{ count }</small>
  )
});

export default Counter;