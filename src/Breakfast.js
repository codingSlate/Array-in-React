import React, { useState } from 'react';

export default function list() {
  const list1 = ['Ajwain Puri', 'Aloo Paratha', 'Cheela', 'Poha', 'Egg Bhurji'];
  const list2 = ['Ajwain Puri', 'Aloo Paratha', 'Cheela', 'Poha', 'Egg Bhurji'];

  const [list, setList] = useState(list1);

  // const list = ['Rice', 'Puri', 'Dosa', 'Idly', 'Parotha'];
  const onClickHandler = () => {
    setList(list === list1 ? list2 : list1);
  };

  const DisplayList = list.map((item, index) => (
    <li key={index.toString()}>
      {/* <li key={item}> */}
      <label htmlFor={`item-${index}`}> {item}</label>
      <input type="text" id={`item-${index}`} />
    </li>
  ));

  return (
    <div>
      {/* <p>Array of food {list}</p>
      <p>Map</p>
      <ul>
        {list.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <hr /> */}
      <ul>{DisplayList}</ul>

      <button type="button" onClick={onClickHandler}>
        Change
      </button>
    </div>
  );
}
