import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  gap: 10px;
`;

const ListItem = styled.li`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: rgba(18, 20, 23, 0.8);

  &:not(:first-child)::before {
    content: '•';
    margin-right: 10px;
  }
`;

const BulletList: React.FC = () => {
  const list = ['Word', 'Translation', 'Grammar', 'Progress'];

  return (
    <List>
      {list.map((i, index) => (
        <ListItem key={index}>{i}</ListItem>
      ))}
    </List>
  );
};

export default BulletList;
