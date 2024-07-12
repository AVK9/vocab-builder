import React from 'react';
import { PaginationContainer, PageButton, Dot } from './Pagination.styled';
import { IconSvg } from 'components/common/IconSvg';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPages = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push(-1); // Dot
      }
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push(-1); // Dot
      }
      pages.push(totalPages);
    }
    return pages;
  };

  const pages = getPages();

  return (
    <PaginationContainer>
      <PageButton onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        <IconSvg icon="First" fill="black" size="16px" />
      </PageButton>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IconSvg icon="Prev" fill="black" size="16px" />
      </PageButton>
      {pages.map((page, index) =>
        page === -1 ? (
          <Dot key={index}>
            <IconSvg icon="Dot" fill="black" size="10px" />
          </Dot>
        ) : (
          <PageButton
            key={index}
            isActive={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        )
      )}
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IconSvg icon="Next" fill="black" size="16px" />
      </PageButton>
      <PageButton
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <IconSvg icon="Last" fill="black" size="16px" />
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
