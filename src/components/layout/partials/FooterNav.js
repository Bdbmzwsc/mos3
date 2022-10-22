import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="https://github.com/SkyWorldStudio">Contact</Link>
        </li>
        <li>
          <Link to="https://skyworldstudio.top">About us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;