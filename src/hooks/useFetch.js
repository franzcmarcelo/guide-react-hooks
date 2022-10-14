import { useEffect, useState } from 'react';

const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  });

  const getFetch = async () => {
    try {
      setState({
        ...state,
        isLoading: true
      });
      const response = await fetch(url);
      const data = await response.json();
      setState({
        ...state,
        data,
        isLoading: false
      });
    } catch (error) {
      setState({
        ...state,
        hasError: error,
        isLoading: false
      });
    }
  }

  useEffect(() => {
    getFetch();
  }, [url])

  return {
    ...state
  };
}

export default useFetch