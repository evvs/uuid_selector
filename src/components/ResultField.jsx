import React from 'react';
import { useSelector } from 'react-redux';


const ResultField = () => {

const textareaValue = useSelector(state => state.result);
const value = textareaValue.length ? textareaValue.map(e=>`'${e}',`).join('').slice(0, -1) : "Can't find UUID or all're duplicated";

return (
  <div className='vh-100 d-flex flex-column'>
    <div className="text-center"><span className="font-weight-light">Result</span></div>
    <div className="overflow-auto border h-100 rounded">
    {value}
    </div>
    <button type="button" className="btn btn-secondary mt-1">Copy</button>
</div>
);
}

export default ResultField;
