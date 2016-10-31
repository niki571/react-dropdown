import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './component/dropdown';


let regionList =  [
    {
      "id": 1,
      "label": "U.S",
      "value": "North America"
    },
    {
      "id": 2,
      "label": "Non-U.S",
      "value": "Europe, the Middle East and Africa, APAC"
    }
  ];

ReactDOM.render(
  <Dropdown list={regionList}>
  </Dropdown>,
  document.querySelector('#dropdown')
);