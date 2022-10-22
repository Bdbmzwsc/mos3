import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src="https://camo.githubusercontent.com/fde75f1b5fd80abeebd84222dd0ed8e92c65e33afe3083f09f76825501ec46fa/68747470733a2f2f67697465652e636f6d2f7869616e36362f6d696e6563726166742d6f7074696d616c2d737461727465725f322f7261772f6d61737465722f706963747572652f69636f2e706e67"
            alt="Open"
            width={32}
            height={32} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;