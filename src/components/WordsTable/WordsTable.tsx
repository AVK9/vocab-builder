import React, { useMemo } from 'react';
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import {
  Head,
  Icon,
  InnerContainer,
  LastRowTd,
  Table,
  TableContainer,
  Td,
  Th,
  Tr,
} from './WordsTable.styled';
import { IconSvg } from 'components/common/IconSvg';
import { Butn, ButnText } from './WordsTable.styled';
interface Word {
  en: string;
  ua: string;
  category: string;
  definition?: string;
}

interface WordsTableProps {
  words: Word[];
}

const WordsTable: React.FC<WordsTableProps> = ({ words }) => {
  const columns = useMemo<ColumnDef<Word>[]>(
    () => [
      {
        accessorKey: 'en',
        header: () => (
          <Head>
            Word
            <Icon>
              <IconSvg icon="uk" />
            </Icon>
          </Head>
        ),
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'ua',
        header: () => (
          <Head>
            Translation
            <Icon>
              <IconSvg icon="ua" />
            </Icon>
          </Head>
        ),
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'category',
        header: 'Category',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'actions',
        header: '',
        cell: info => (
          <Butn onClick={() => handleAddWord(info.row.original)}>
            <ButnText>Add to dictionary </ButnText>
            <IconSvg icon="arrow-right" stroke="var(--green)" />
          </Butn>
        ),
      },
    ],
    []
  );

  const handleAddWord = (word: Word) => {
    console.log('Adding word:', word);
  };

  const table = useReactTable({
    data: words,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer>
      <InnerContainer>
        <Table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Th>
                ))}
              </Tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <Tr key={row.id}>
                {row
                  .getVisibleCells()
                  .map(cell =>
                    rowIndex === table.getRowModel().rows.length - 1 ? (
                      <LastRowTd key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </LastRowTd>
                    ) : (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    )
                  )}
              </Tr>
            ))}
          </tbody>
        </Table>
      </InnerContainer>
    </TableContainer>
  );
};

export default WordsTable;
