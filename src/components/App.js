import React from 'react';
import InputUuidField from './InputUuidField';
import { setInit, setDuplicates } from '../slices/uuidData'
import ResultField from './ResultField';

function App() {
  return (
    <div className='d-flex container'>
      <section className='d-flex flex-column justify-content-between v-100 pl-1  w-50'>
        <InputUuidField header={'Initial'} stateHandler={setInit} type='init' />
        <InputUuidField header={'Duplicates'} stateHandler={setDuplicates} type='duplicates' />
        </section>
      <section className='ml-1 w-50'>
        <ResultField />
      </section>
    </div>
  );
}

export default App;
