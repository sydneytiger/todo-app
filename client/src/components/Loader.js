import React from 'react';
import PropTypes from 'prop-type';
import '../css/loader.css';

const Loader = ({ loading, fullscreen }) => {
  if(loading) {
    if(fullscreen){
      return (
        <React.Fragment>
          <div className="loader-front fullscreen">
            <div className="loading"><div></div><div></div></div>
          </div>
          <div className="loader-back fullscreen"></div>
        </React.Fragment>
      )
    } else {
      return <div className="loading"><div></div><div></div></div>
    }
  } else {
    return null;
  }
};

Loader.propTypes = {
  loading: PropTypes.bool
}

export default Loader;