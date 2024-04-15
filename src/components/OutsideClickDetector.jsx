import { useRef, useEffect } from "react";

const OutsideClickDetector = ({ children, onOutSideClicked }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        onOutSideClicked();
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
  return <div ref={ref}>{children}</div>;
};

export default OutsideClickDetector;
