import React, { useMemo } from 'react';
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { Table, TableContainer, Td, Th, Tr } from './WordsTable.styled';

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
        header: 'Word',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'ua',
        header: 'Translation',
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
          <button onClick={() => handleAddWord(info.row.original)}>Add</button>
        ),
      },
    ],
    []
  );

  const handleAddWord = (word: Word) => {
    // Додайте ваш обробник подій для додавання слова тут
    console.log('Adding word:', word);
  };

  const table = useReactTable({
    data: words,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer>
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
          {table.getRowModel().rows.map(row => (
            <Tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default WordsTable;
