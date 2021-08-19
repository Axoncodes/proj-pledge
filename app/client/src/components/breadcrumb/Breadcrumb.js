import { Link, Route } from 'react-router-dom';

import React from 'react';
import PropTypes from 'prop-types';
// css
import './style.css';
// assets
import logo from '../../assets/images/logo.png';


/**
 * parameters explanation::
 * exit: it declares whether we are going to need that X icon on the upper part of the page(model) to close the model --followingParametersRequired (exitMode);
 * exitMode: declares the style of the X by class to be inside the breadcrumb or be in outer parts of the box --optionsAsParameter (outer);
 * backLink: declares whether we are going to have an option to go one step back down or not (the arrow icon), this one shall be a link;
 * current: the title of the current page;
 * altLink: In case we need some alternative link (like the backLink) to guid the user (example: in signin page showing the signUp link) --followingParametersRequired (altTitle);
 * displayLogo: to declare whether to show the logo in the page or not;
 */

export default function Breadcrumb({
  exit,
  exitMode,
  backLink,
  current,
  altLink,
  altTitle,
  displayLogo,
  mode,
  exitReq,
  children,
  onExit,
  style,
}) {
  return (
    <section id="breadcrumb" style={style}>

      {exit ? (
        <svg
          id="exit"
          className={`${exitMode} ${exitReq?'exitReq':''}`}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
          onClick={onExit}
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
        </svg>
      ) : (
        ''
      )}

      <div className="inner_cover">
        {mode?(
          <div className="row">
            <p className="current">
              {backLink ? (
                <Link to={backLink}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <rect fill="none" height="24" width="24" />
                    <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" />
                  </svg>
                </Link>
              ) : (
                ''
              )}
              {current}
            </p>
            {displayLogo ? (
              <Link to="/">
                <img alt="" className="logo" src={logo} />
              </Link>
            ) : (
              ''
            )}
            </div>

        ):(

          <p className="current">
            {backLink ? (
              <Link to={backLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <rect fill="none" height="24" width="24" />
                  <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" />
                </svg>
              </Link>
            ) : (
              ''
            )}
            {current}
          </p>

        )}

        {mode?(
          <>
            {altLink ? (
              <Link className="altlink mode" to={altLink}>
                {altTitle}
              </Link>
            ) : 
              children
            }
          </>
        ):(
          <div className="block">
            {displayLogo ? (
              <Link to="/">
                <img alt="" className="logo" src={logo} />
              </Link>
            ) : (
              ''
            )}
            {altLink ? (
              <Link className="altlink" to={altLink}>
                {altTitle}
              </Link>
            ) : 
              children
            }
          </div>
        )}
      </div>
    </section>
  );
}

// Breadcrumb.propTypes = {
//   exit: PropTypes.string,
//   exitMode: PropTypes.string,
//   backLink: PropTypes.string,
//   current: PropTypes.string,
//   altLink: PropTypes.string,
//   altTitle: PropTypes.string,
//   displayLogo: PropTypes.string,
//   mode: PropTypes.bool,
// };
