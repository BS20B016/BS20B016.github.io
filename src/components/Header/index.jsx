import React from 'react';
import './header.css';
import { Dropdown } from '../Dropdown';

export const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
  return (
    <div className="header">
      <Dropdown
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
    </div>
  );
};
