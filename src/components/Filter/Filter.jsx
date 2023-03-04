import React from 'react';

import { Label, Input } from './Filter.styled';
import { setFilterValue } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusFilter } from 'redux/selector';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleChange = e => {
    dispatch(setFilterValue(e.target.value))
  }

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name='filter'
        placeholder='Enter filter'
        value={filter}
        onChange={handleChange}
      />

    
    </Label>
  );
};

export default Filter;
