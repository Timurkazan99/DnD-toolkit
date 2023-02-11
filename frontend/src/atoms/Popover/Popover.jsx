import React, {useEffect, useRef, useState} from 'react';
import "./Popover.scss";

const Popover = ({targetRef, children, show, onHide, className }) => {
  const popoverRef = useRef(null);
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
    arrow: 0,
  });

  useEffect(() => {
    if(targetRef.current && popoverRef.current) {
      const x = targetRef.current.offsetLeft - (popoverRef.current.offsetWidth / 2) + (targetRef.current.offsetWidth / 2);
      const y = targetRef.current.offsetHeight + targetRef.current.offsetTop + 4;
      const arrow = popoverRef.current.offsetWidth / 2 - 8;
      setTranslate({x, y, arrow});
    }
  }, [targetRef, popoverRef, show]);

  useEffect(() => {
    if (!show) return;

    const handleClick = (e) => {
      if(!popoverRef.current) return;
      if (!popoverRef.current.contains(e.target) && !targetRef.current.contains(e.target)) {
        onHide()
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [show, onHide]);

  return (
    <div
      className={show ? `popover ${className}` : 'popover hidden'}
      style={{transform: `translate(${translate.x}px, ${translate.y}px)`}}
      ref={popoverRef}
    >
      <div
        style={{transform: `translate(${translate.arrow}px, 0px)`}}
        className="popover-arrow"
      />
      {children}
    </div>
  );
};

export default Popover;
