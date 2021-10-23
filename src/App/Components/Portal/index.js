import { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default function Portal({ children, selector }) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!mounted) {
      ref.current = document.querySelector(selector)
      document.querySelector('body').style.overflow = 'hidden';

      setMounted(true);
    }

    return () => {
      if (mounted) {
        document.querySelector('body').style.overflow = 'visible';
      }
    };
  }, [selector, mounted]);

  return mounted ? ReactDOM.createPortal(children, ref.current) : null;
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.string.isRequired,
};
