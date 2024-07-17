import React, { useMemo, useState } from 'react';
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
  Persent,
  CellFlex,
  ProgressPersent,
  Table,
  TableContainer,
  Td,
  Th,
  Tr,
} from './WordsTableDictionary.styled';
import { IconSvg } from 'components/common/IconSvg';
import { Butn, ButnText } from './WordsTableDictionary.styled';
import { addWordOwnThunk } from 'store/words/wordsThunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import ProgressCircle from 'components/common/ProgressCircle';
import EditDelPopup from './EditDelPopup';

interface Word {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
  owner?: string;
  progress?: number;
  definition?: string;
}

interface WordsTableProps {
  words: Word[];
}

const WordsTableDictionary: React.FC<WordsTableProps> = ({ words }) => {
  const [openPopupId, setOpenPopupId] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();
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
        accessorKey: 'progress',
        header: 'Progress',
        cell: info => {
          const value = info.getValue() as number;
          return (
            <CellFlex>
              <ProgressPersent>
                <Persent>{value} %</Persent>
              </ProgressPersent>
              <ProgressCircle percentage={value} size={26} strokeWidth={5} />
            </CellFlex>
          );
        },
      },
      {
        accessorKey: 'actions',
        header: '',
        cell: info => (
          <CellFlex>
            <Butn
              onClick={() => {
                const id = info.row.original._id;
                setOpenPopupId(prevId => (prevId === id ? null : id));
              }}
            >
              <IconSvg icon="Dot" fill="var(--black)" size="16px" />
            </Butn>
            <EditDelPopup
              data={info.row.original}
              isOpen={openPopupId === info.row.original._id}
              onClose={() => setOpenPopupId(null)}
            />
          </CellFlex>
        ),
      },
    ],
    [openPopupId]
  );

  const handleEditWord = async (word: Word) => {
    console.log('Adding word:', word);
    // await dispatch(addWordOwnThunk(word._id));
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

export default WordsTableDictionary;
