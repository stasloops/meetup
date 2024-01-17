import { useEffect, useRef, useState } from 'react';

export const useAnimationShow = (externalShow) => {
  const [show, setShow] = useState(externalShow);
  const [firstRender, setFirstRenter] = useState(true);

  const initialValue = useRef(externalShow);

  useEffect(() => {
    if (externalShow !== initialValue.current && firstRender) setFirstRenter(false);
  }, [externalShow]);

  return [show, setShow, firstRender];
};
