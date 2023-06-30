import { useState } from 'react';
import Navigation from './navigation/Navigation';
import VideosSectionContainer from './videos-section.styles';
import { leads, navigationBar, IVideos } from '@/app/consts/videos-list';
import Image from 'next/image';
import thumbnail from '../../../../../public/assets/images/thumbnail.png';
import Pagination from './pagination/Pagination';

const VideosSection = () => {
  const [selectedSection, setSelectedSection] = useState<string>(
    navigationBar[0].id
  );
  const [videos, setVideos] = useState<IVideos[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);

    if (section === 'leads generation') {
      setVideos(leads);
    } else {
      setVideos([]);
    }
  };

  return (
    <VideosSectionContainer>
      <Navigation
        selectedSection={selectedSection}
        onSectionChange={handleSectionChange}
      />
      {videos.length > 0 ? (
        <>
          <ul className='video-list'>
            {videos
              .filter(({ page }) => page === currentPage)
              .map((video) => (
                <li key={video.id}>
                  <figure>
                    <Image
                      src={thumbnail}
                      alt='thumbail'
                      width={350}
                      height={200}
                    />
                  </figure>
                  <div className='text-content'>
                    <span>{video.title}</span>
                  </div>
                </li>
              ))}
          </ul>
          <Pagination
            videos={videos}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <div className='no-videos-section'>
          <span>There isn't videos for this section yet...</span>
        </div>
      )}
    </VideosSectionContainer>
  );
};

export default VideosSection;
