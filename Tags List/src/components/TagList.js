import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";

import { addTag } from "../Redux/Tags/tagAction";

import Tag from "./Tag";

import "./TagList.css";

const TagList = () => {
  const [title, setTitle] = useState('')

  const valueHandler = (e) => {
    setTitle(e.target.value)
  };

  const clickHandler = () => {
    addTag(title);
    setTitle('')
    return addTag(title);
  };

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h2 className="title">Tags List</h2>
      <p className="description">Press Enter To Add The Tag</p>
      <div className="inputTag">
        <ul>
          <input
            className="input"
            value={title}
            onChange={valueHandler}
            type="text"
            maxLength="20"
            placeholder="Enter Tag"
            onKeyUp={(e) => e.key === 'Enter' && e.target.value !== '' && dispatch(clickHandler())}
          />
          
        { 
            state.length !== 0 &&
            state.map(tag => <li key={uuidv4()}><Tag tagData={tag} /></li>)
        }
        </ul>

      </div>
    </div>
  );
};

export default TagList;
