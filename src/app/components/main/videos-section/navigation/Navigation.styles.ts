import styled from 'styled-components';

const NavigationContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  ul {
    display: flex;
    gap: 20px;

    li {
      border: 2px solid black;
      border-radius: 40px;
      padding: 10px 20px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
    }

    li:hover {
      background-color: white;
      color: var(--default-blue);
      border-color: var(--default-blue);
    }

    .active {
      background-color: var(--default-blue);
      color: white;
      border-color: var(--default-blue);
    }
  }

  div {
    display: flex;
    gap: 10px;

    label {
      font-weight: bold;
    }
  }
`;

export default NavigationContainer;
