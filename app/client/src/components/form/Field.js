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
  hideTitle,
  type, 
  link,
  onChange,
  value,
  name,
  required,
  valid,
  message,
  customClass,
  prefix,
  info,
  tooltip,
  options,
  nomargin,
  mode,
}) {

  const name_name = title.toLowerCase().replaceAll(" ", "_");

  function input() {
    return <input
      autoComplete="off"
      className={`input`}
      value={value}
      placeholder={title}
      type={type}
      onChange={onChange}
      name={name?name:name_name}
    />
  }

  function textarea() {
    return <textarea 
      className={`input`}
      rows="4" 
      cols="50"
      placeholder={title}
      onChange={onChange}
      name={name?name:name_name}  
      value={value}
    ></textarea>
  }

  function select() {
    return <select 
      onChange={onChange}
      className={`input`} 
      name={name?name:name_name}>
        {options?options.map((key, data)=>(
          <option key={data} value={key.toLowerCase().replace(" ", "_")}>{key}</option>
        )):''}
        
    </select>
  }

  function display(state) {
    if(state=="textarea") return textarea()
    else if(state=="select") return select()
    else return input()
  }
  
  return (
    <div className={` ${mode?'bkg':''} ${nomargin?'nomargin':''} field ${icon?'icon':''} ${customClass?customClass:''} ${valid?"valid":"invalid"} ${name_name}`}>
      <label className={link ? 'terms' : type == 'submit' ? 'submit' : ''}>
        {icon?
          <div className="image">
            <object
              aria-label="img"
              data={require(`../../assets/images/${!valid?'red-':''}${icon}`)}
            />
          </div>
          :<div></div>
        }
        <div className="block">
          <div className="inputinfo">
            <p className="title">{hideTitle?'':title}</p>
            <p className="message">{message}</p>
            {tooltip?<Tooltip content={tooltip} />:''}
          </div>
          <div className="inputcard">
            <p className="inputPrefix">{prefix}</p>
              {display(type)}
          </div>
        </div>
      </label>
    </div>
  );
}

// Field.propTypes = {
//   icon: PropTypes.string,
//   title: PropTypes.string,
//   hideTitle: PropTypes.bool,
//   type: PropTypes.string,
//   link: PropTypes.string,
//   onChange: PropTypes.func,
//   value: PropTypes.object,
//   name: PropTypes.string,
//   required: PropTypes.bool,
//   valid: PropTypes.bool,
//   message: PropTypes.string,
//   customClass: PropTypes.string,
//   prefix: PropTypes.string,
//   info: PropTypes.string,
//   tooltip: PropTypes.string,
//   options: PropTypes.array,
//   nomargin: PropTypes.bool,
//   mode: PropTypes.bool,
// };
