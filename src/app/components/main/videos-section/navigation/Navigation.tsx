import { useState } from 'react';
import { navigationBar } from '@/app/consts/videos-list';
import NavigationContainer from './Navigation.styles';

export interface NavigationProps {
  selectedSection: string;
  onSectionChange: (section: string) => void;
  onSortChange: (sortBy: string) => void;
}

const Navigation = ({
  selectedSection,
  onSectionChange,
  onSortChange,
}: NavigationProps) => {
  const handleSectionClick = (section: string) => {
    onSectionChange(section);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = event.target.value;
    onSortChange(sortBy);
  };

  return (
    <NavigationContainer>
      <ul>
        {navigationBar.map(({ id, title }) => (
          <li
            key={id}
            className={selectedSection === id ? 'active' : ''}
            onClick={() => handleSectionClick(id)}
          >
            {title}
          </li>
        ))}
      </ul>
      <div>
        <label htmlFor='order'>Ordenar por</label>
        <select id='order' onChange={handleSortChange}>
          <option value='publication'>Data de publicação</option>
          <option value='alphabetical'>Ordem Alfabética</option>
        </select>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
