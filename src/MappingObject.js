import React from 'react';

const MappingObject = () => {
  const breakfast = {
    id3: 'Cheela',
    id4: 'Poha',
    id5: 'Egg Bhurji',
  };

  return (
    <>
      {/* json */}
      {JSON.stringify(Object.keys(breakfast))}

      {Object.keys(breakfast).map((item) => (
        <li keys={item}>{breakfast[item]}</li>
      ))}
    </>
  );
};

export default MappingObject;
