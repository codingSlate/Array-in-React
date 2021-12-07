import React, { useState } from 'react';

export default function list() {
  const [showAll, setShowAll] = useState(true);
  const list = [
    { id: 1, name: 'Ajwain Puri', healthy: true },
    { id: 2, name: 'Aloo Paratha', healthy: false },
    { id: 3, name: 'Cheela', healthy: true },
    { id: 4, name: 'Poha', healthy: false },
    { id: 5, name: 'Egg Bhurji', healthy: true },
  ];

  return (
    <div>
      {list
        .filter((item) => (showAll ? true : item.healthy))
        .map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}

      <button type="button" onClick={() => setShowAll(true)}>
        Show All
      </button>
      <button type="button" onClick={() => setShowAll(false)}>
        Show only Healthy
      </button>
    </div>
  );
}
