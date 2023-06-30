import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IVideos } from '@/app/consts/videos-list';
import PaginationContainer from './Pagination.styles';

export interface PaginationProps {
  videos: IVideos[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  videos,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const [pages, setPages] = useState<{ page: number; id: number }[]>([]);

  useEffect(() => {
    const pagesQuantity = videos[videos.length - 1]?.page || 0;
    const updatedPages = Array.from({ length: pagesQuantity }, (_, index) => ({
      page: index + 1,
      id: index,
    }));
    setPages(updatedPages);
    console.log(pages);
  }, [videos]);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PaginationContainer>
      <span>Página</span>
      <ul>
        {pages.map(({ id, page }) => (
          <li
            className={currentPage === page ? 'active-page' : ''}
            key={id}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
