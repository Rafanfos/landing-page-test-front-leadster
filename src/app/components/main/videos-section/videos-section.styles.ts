import styled from 'styled-components';

const VideosSectionContainer = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  .video-list {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    padding: 60px 20px;
    justify-content: space-between;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    gap: 40px;

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

  .no-videos-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 763px;
    font-size: 56px;
    color: var(--text-dark);
  }
`;

export default VideosSectionContainer;
