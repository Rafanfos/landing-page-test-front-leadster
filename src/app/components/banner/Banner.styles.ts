import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: var(--light-blue);
  min-height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .balloon {
      border: 4px solid var(--default-blue);
      border-radius: 40px 40px 40px 0;
      padding: 5px;
      margin-bottom: 20px;

      h4 {
        text-transform: uppercase;
        color: var(--default-blue);
        font-size: 14px;
      }
    }

    h3 {
      font-weight: 500;
      font-size: 48px;
      color: var(--default-black);
    }

    .big-title {
      border-bottom: 1px solid gray;
      position: relative;
      padding: 0 20px 20px 20px;
      display: flex;
      justify-content: center;

      h2 {
        color: var(--default-blue);
        font-size: 90px;
      }

      img {
        position: absolute;
        top: 10px;
        right: 2px;
      }
    }

    p {
      margin-top: 20px;
      color: var(--default-black);
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

export default BannerContainer;
