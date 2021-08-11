import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Tooltip from '../tooltip/Tooltip';

// css
import './style.css';


/**
 * parameters explanation::
 * icon: declares the name of the svg image as icon of the field (Warning: it has to be available in {assets/images} directory);
 * title: the init name of the field;
 * type: type of the input --options (email, text, number, tel);
 * link: {optional} for cases such as the link in Terms;
 */

export default function Field({ 
  icon, 
  title, 
  type, 
  link,
  handleInput,
  value,
  name,
  required,
  valid,
  message,
  customClass,
  prefix,
  info,
  tooltip,
}) {

  const name_name = title.toLowerCase().replace(" ", "_");
  
  return (
    <div className={`field ${icon?'icon':''} ${customClass?customClass:''} ${valid?"valid":"invalid"} ${name_name}`}>
      <label className={link ? 'terms' : type == 'submit' ? 'submit' : ''}>
        {icon?
        <div className="image">
          <object
            aria-label="img"
            data={require(`../../assets/images/${!valid?'red-':''}${icon}`)}
          />
        </div>
        :<div></div>}
        <div className="block">
          <div className="inputinfo">
            <p className="title">{title}</p>
            <p className="message">{message}</p>
            {tooltip?<Tooltip content={tooltip} />:''}
          </div>
          <div className="inputcard">
            <p className="inputPrefix">{prefix}</p>
            <input
              value={value.name_name}
              placeholder={title}
              type={type}
              onChange={handleInput}
              name={name?name:name_name}
            />
          </div>
        </div>
      </label>
    </div>
  );
}

Field.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string,
  handleInput: PropTypes.func,
  value: PropTypes.object,
  name: PropTypes.string,
  required: PropTypes.bool,
  valid: PropTypes.bool,
  message: PropTypes.string,
  customClass: PropTypes.string,
  prefix: PropTypes.string,
  info: PropTypes.string,
  tooltip: PropTypes.string,
};
