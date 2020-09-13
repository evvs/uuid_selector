import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const InputUuidField = ({ header, stateHandler, fieldtype }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const readAndDisplayFile = async (file) => {
    if (!file) {
      console.log('file loading is canceled')
      return;
    }
    const fileReader = new FileReader();
    await fileReader.readAsText(file);
    fileReader.onload = () => {
      setValue(fileReader.result);
      dispatch(stateHandler(fileReader.result));
    };
    fileReader.onerror = (e) => {

      console.error("File could not be read! Code " + e.target.error.code);
  };
  }

  const onChangeHandler = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.value;
    setValue(inputValue)
    dispatch(stateHandler(inputValue));
  };

  const onLoadFileHandler = e => {
    e.preventDefault();
    readAndDisplayFile(e.target.files[0])
  }

  const onDropFileHandler = e => {
    e.preventDefault()
    e.stopPropagation()
    readAndDisplayFile(e.dataTransfer.items[0].getAsFile())
  }

  const onCleanHandler = (e) => {
    e.preventDefault();
    setValue('');
    dispatch(stateHandler(''));
  }

  return (
    <div className="d-flex h-100 flex-column flex-grow-1 mb-1">
      <span className="text-center font-weight-light">{header}</span>
      <textarea
        className="form-control mb-1 h-100"
        value={value}
        onChange={onChangeHandler}
        onDrop={onDropFileHandler}
      >
      </textarea>
      <div className='d-flex justify-content-between'>
        <input type='file' className="form-control-file form-control-sm" accept='.txt'
          onChange={onLoadFileHandler} />
          <button type="button" className="btn btn-secondary btn-sm w-50" onClick={onCleanHandler}>clean input field</button>
      </div>
    </div>
  );
};

export default InputUuidField;