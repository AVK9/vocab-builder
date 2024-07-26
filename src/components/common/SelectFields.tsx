import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IconSvg } from './IconSvg';

const SelectWrapper = styled.div`
  position: relative;
  width: 343px;
  margin-bottom: 40px;
`;

const SelectedItem = styled.div`
  cursor: pointer;
  outline: none;

  border: 1px solid rgba(18, 20, 23, 0.1);
  background-color: #fff;
  border-radius: 15px;
  padding: 12px 24px;
  width: 343px;
  height: 48px;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);

  &:hover {
    border: 1px solid var(--green);
  }
`;

const IconSvgBox = styled.div`
  /* margin-left: 24px; */
  position: absolute;
  bottom: 17px;
  right: 24px;
  display: flex;
  gap: 10px;
`;

const OptionsList = styled.ul<{ isOpen: boolean }>`
  padding: 18px;
  border-radius: 22px;
  overflow-y: auto;
  z-index: 10;
  position: absolute;
  top: 85px;
  list-style: none;
  background-color: #fff;
  width: 100%;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: rgba(18, 20, 23, 0.2);
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  max-height: ${props => (props.isOpen ? 'auto' : '0px')};
  transition: opacity 0.5s, max-height 0.3s ease-in-out;
`;

const OptionItem = styled.li`
  font-family: var(--font-family);
  white-space: nowrap;
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: rgba(18, 20, 23, 0.2);
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: #121417;
  }
  &:last-child {
    border-bottom: none;
  }
`;

interface SelectFieldsProps {
  holder: string;
  categories: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectFields: React.FC<SelectFieldsProps> = ({
  holder,
  onChange,
  categories,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(categories[0]);
  const [isClear, setIsClear] = useState(false);
  const [showName, setShowName] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      setShowName(true);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      event.key === 'Escape' ||
      event.key === ' ' ||
      event.key === 'Spacebar'
    ) {
      setIsOpen(false);
      setShowName(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setShowName(false);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    setIsClear(true);
  };

  const clearField = () => {
    setSelected(categories[0]);
    setIsClear(false);
    setShowName(true);
  };

  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  return (
    <SelectWrapper ref={wrapperRef}>
      <SelectedItem onClick={toggleDropdown}>
        {showName && holder}
        {truncateString(selected, 100)}
      </SelectedItem>
      <IconSvgBox>
        {isClear && (
          <IconSvg icon="x" stroke="black" size="20px" onClick={clearField} />
        )}
        <IconSvg onClick={toggleDropdown} icon="d" fill="black" size="20px" />
      </IconSvgBox>

      <OptionsList isOpen={isOpen}>
        {categories.slice().map((item, index) => (
          <OptionItem key={index} onClick={() => handleSelect(item)}>
            {item}
          </OptionItem>
        ))}
      </OptionsList>
    </SelectWrapper>
  );
};

export default SelectFields;
