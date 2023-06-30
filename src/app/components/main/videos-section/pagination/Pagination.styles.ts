import styled from 'styled-components';

const PaginationContainer = styled.nav`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-dark);
  font-size: 16px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 3px;
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }

    li:hover {
      color: var(--default-blue);
    }

    .active-page {
      border: 1px solid var(--default-blue);
      color: var(--default-blue);
    }
  }
`;

export default PaginationContainer;
