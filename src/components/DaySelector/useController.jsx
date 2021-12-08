import { useState } from 'react';

const useController = () => {
  const [isContentVisible, setVisibility] = useState(false);

  const state = {
    isContentVisible,
  };

  return {
    state,
    setVisibility,
  };
};

export default useController;
