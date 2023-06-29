import { useState } from 'react';
import { navigationBar } from '@/app/consts/videos-list';
import NavigationContainer from './Navigation.styles';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('agency');

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    console.log(section);
  };

  return (
    <NavigationContainer>
      <ul>
        {navigationBar.map(({ id, title }) => (
          <li
            key={id}
            className={activeSection === id ? 'active' : ''}
            onClick={() => handleSectionClick(id)}
          >
            {title}
          </li>
        ))}
      </ul>
      <div>
        <label htmlFor='order'>Ordenar por</label>
        <select id='order'>
          <option>Data de publicação</option>
          <option>Ordem Alfabética</option>
        </select>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
