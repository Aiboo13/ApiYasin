import React from 'react';
import { useState } from 'react';
import Input from '../components/input';
import Button from '../components/Button';
import YasinArab from '../apis/Api';

function Layouts() {
  const [ayat, setAyat] = useState('');
  return (
    <>
    <div className="container mx-5" style={{paddingLeft: '25%'}}>
        <YasinArab />
      </div>
    </>
  );
}

export default Layouts;