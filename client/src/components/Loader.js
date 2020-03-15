import React from 'react';
import '../css/loader.css';

const Loader = ({ loading, fullscreen }) => {
  if(loading) {
    if(fullscreen){
      return (
        <React.Fragment>
          <div className="loader-front">
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-secondary spinner-xl" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div className="loader-back"></div>
        </React.Fragment>
      )
    } else {
      // return null;
      return (
        <div className="spinner-center text-secondary d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
  } else {
    return null;
  }
};

export default Loader;