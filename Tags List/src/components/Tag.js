import React from 'react';

import { useDispatch } from 'react-redux/es/exports';

import { removeTag } from '../Redux/Tags/tagAction';

import * as Unicons from '@iconscout/react-unicons';

import './Tag.css'

const Tag = ({ tagData }) => {

    const dispatch = useDispatch()

    return (
        <div className='tag'>
            <span onClick={() => dispatch(removeTag(tagData))}><Unicons.UilTrash /></span>
            <p>{tagData.title}</p>
        </div>
    );
};

export default Tag;