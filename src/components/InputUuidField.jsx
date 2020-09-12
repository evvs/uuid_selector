import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setResult, setInit, setDuplicates } from '../slices/uuidData';

const InputUuidField = ({ header, stateHandler, type }) => {

  const [value, setValue] = useState('');

  const onFileLoadingHandler = async (file) => {
    const actions = {
      init: setInit,
      duplicates: setDuplicates,
    };
    const fileReader = new FileReader();
    await fileReader.readAsText(file);
    fileReader.onload = () => {
      dispatch(actions[type](fileReader.result));
      dispatch(setResult());
      setValue(fileReader.result);
    };
  };

  const dispatch = useDispatch();
  const onChangeHandler = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.value;
    setValue(inputValue)
    dispatch(stateHandler(inputValue));
    dispatch(setResult());
  };


  return (

      <div className="d-flex h-100 flex-column flex-grow-1 mb-1">
        <span className="text-center font-weight-light">{header}</span>
        <textarea 
        className="form-control mb-1 h-100"
        value={value}
        onChange={onChangeHandler}
        >
        </textarea>
        <div className='d-flex justify-content-between'>
          <input type='file' className="form-control-file form-control-sm" accept='.txt' onChange={e => onFileLoadingHandler(e.target.files[0])}/>
          </div>
      </div>

  );
};

export default InputUuidField;