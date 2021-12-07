import React from 'react';

export default function Breakfast() {
  const breakfast = ['Rice', 'Puri', 'Dosa', 'Idly', 'Parotha'];

  const breakfast1 = ['Rice', 'Puri', 'Dosa', 'Idly', 'Parotha'];
  const breakfast2 = ['Rice', 'Puri', 'Dosa', 'Idly', 'Parotha'];

  const DisplayList = breakfast1.map((item, index) => {
    <li key={index.toString()}>
      <label htmlFor={`item-${index}`}>{item}</label>
    </li>;
  });
  return (
    <div>
      <p>Array of food {breakfast}</p>
      <p>Map</p>
      <ul>
        {breakfast.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <hr />
      <ul>{DisplayList}</ul>
    </div>
  );
}
