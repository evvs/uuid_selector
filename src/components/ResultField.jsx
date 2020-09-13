import React from 'react';
import { useSelector } from 'react-redux';


const ResultField = () => {

  const textareaValue = useSelector(state => state.result);
  const value = textareaValue.length ? textareaValue.map(e => `'${e}',`).join('').slice(0, -1) : "Can't find UUID or all're duplicated";
  const ref = React.createRef();

  const onClickHandler = (e) => {
    e.preventDefault();
    const text = ref.current.innerText
    const myTemporaryInputElement = document.createElement("input");
    myTemporaryInputElement.type = "text";
    myTemporaryInputElement.value = text;
    document.body.appendChild(myTemporaryInputElement);
    myTemporaryInputElement.select();
    document.execCommand("Copy");
    document.body.removeChild(myTemporaryInputElement);
  }

  return (
    <div className='vh-100 d-flex flex-column'>
      <div className="text-center"><span className="font-weight-light">Result</span></div>
      <div className="overflow-auto border h-100 rounded" ref={ref}>
        {value}
      </div>
      <button type="button" className="btn btn-secondary mt-1" onClick={onClickHandler}>Copy</button>
    </div>
  );
}

export default ResultField;
