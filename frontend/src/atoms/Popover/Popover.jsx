import React, {useEffect, useRef, useState, useMemo} from 'react';
import "./Popover.scss";

const defOffset = {
  x: 0,
  y: 0,
  arrow: 0,
};

const getOffset = (targetRef, popoverRef) => {
  if(targetRef.current && popoverRef.current) {
    const x = targetRef.current.offsetLeft - (popoverRef.current.offsetWidth / 2) + (targetRef.current.offsetWidth / 2);
    const y = targetRef.current.offsetHeight + targetRef.current.offsetTop + 4;
    const arrow = popoverRef.current.offsetWidth / 2 - 8;
    return {x, y, arrow};
  }

  return defOffset
}

const Popover = ({targetRef, children, show, onHide, className }) => {

  if(!show) {
    return null;
  }

  const popoverRef = useRef(null);
  const [translate, setTranslate] = useState(defOffset);

  useEffect(() => {
    setTranslate(getOffset(targetRef, popoverRef));
    setTimeout(() => {
      popoverRef.current.classList.remove('hidden');
    }, 0);
  }, [targetRef, popoverRef]);



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
      className={`popover ${className} hidden`}
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
