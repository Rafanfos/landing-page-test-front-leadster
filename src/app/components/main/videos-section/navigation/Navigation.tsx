import { navigationBar } from '@/app/consts/videos-list';
import NavigationContainer from './Navigation.styles';

export interface NavigationProps {
  selectedSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ selectedSection, onSectionChange }: NavigationProps) => {
  const handleSectionClick = (section: string) => {
    onSectionChange(section);
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
        <select id='order'>
          <option>Data de publicação</option>
          <option>Ordem Alfabética</option>
        </select>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
