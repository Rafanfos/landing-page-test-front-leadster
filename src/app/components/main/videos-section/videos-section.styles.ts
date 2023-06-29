import styled from 'styled-components';

const VideosSectionContainer = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  .video-list {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    padding: 20px;

    li {
      width: 350px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: 20px;
      overflow: hidden;

      figure {
        width: 100%;
        height: 200px;
      }

      .text-content {
        width: 100%;
        height: 100px;
        padding: 20px;

        span {
          color: var(text-dark);
          font-weight: 600;
        }
      }
    }
  }
`;

export default VideosSectionContainer;
