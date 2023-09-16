import React from 'react';

function Mentors() {
  const panelists = [
    {
      name: 'Panelist 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam nec nisl commodo semper.',
    },
    {
      name: 'Panelist 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam nec nisl commodo semper.',
    },
    {
      name: 'Panelist 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam nec nisl commodo semper.',
    },
  ];

  return (
    <div>
      <h1>Panelists</h1>
      <div className="panelist-list">
        {panelists.map((panelist, index) => (
          <div key={index} className="panelist">
            <h2>{panelist.name}</h2>
            <p>{panelist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentors;

