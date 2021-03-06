import React from 'react';
import PropTypes from 'prop-types';

// css
import './style.css';
export default function Alaternative({ action }) {
  return (
    <section id="alaternative">
      <p className="alternativeMethod">or continue with</p>

      <section className="item" id="facebook_auth">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <g id="surface38459121">
              <path
                style={{
                  stroke: 'none',
                  fillRule: 'nonzero',
                  fill: '#1877F2',
                  fillOpacity: 1,
                }}
                d="M 17.523438 9 L 14 9 L 14 7 C 14 5.96875 14.085938 5.316406 15.5625 5.316406 L 17.429688 5.316406 L 17.429688 2.136719 C 16.523438 2.042969 15.609375 1.996094 14.691406 2 C 11.980469 2 10 3.65625 10 6.699219 L 10 9 L 7 9 L 7 13 L 10 13 L 10 22 L 14 22 L 14 12.996094 L 17.066406 12.996094 Z M 17.523438 9 "
              />
            </g>
          </svg>
        </div>
        {action === 'signup'
          ? 'Sign up with Facebook'
          : 'Sign in with Facebook'}
      </section>

      <section className="item" id="google_auth">
        <div className="icon">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path
                fill="#4285F4"
                d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
              />
              <path
                fill="#34A853"
                d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
              />
              <path
                fill="#FBBC05"
                d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
              />
              <path
                fill="#EA4335"
                d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
              />
            </g>
          </svg>
        </div>
        {action === 'signup' ? 'Sign up with Google' : 'Sign in with Google'}
      </section>
    </section>
  );
}

Alaternative.propTypes = {
  action: PropTypes.string,
};
