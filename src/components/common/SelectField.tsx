import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IconSvg } from './IconSvg';

const SelectWrapper = styled.div`
  position: relative;
  width: 343px;
  margin-bottom: 8px;
`;

const Input = styled.div`
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
  transition: border 0.5s ease-in-out;

  &:hover {
    border: 1px solid var(--green);
  }
`;

const IconSvgBox = styled.div`
  position: absolute;
  bottom: 11.5px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const OptionsList = styled.ul<{ isOpen: boolean }>`
  box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
  border: 1px solid rgba(18, 20, 23, 0.1);
  background-color: #fff;
  border-radius: 15px;
  padding: 12px 0px;
  width: 343px;
  overflow-y: auto;
  z-index: 10;
  position: absolute;
  top: 56px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  max-height: ${props => (props.isOpen ? 'auto' : '0px')};
  transition: opacity 0.7s, max-height 0.5s ease-in-out;
`;

const OptionItem = styled.li`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
  padding-left: 24px;

  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: var(--white);
    background-color: rgba(133, 170, 159, 0.5);
  }
  &:last-child {
    border-bottom: none;
  }
`;

interface SelectFieldProps {
  holder: string;
  categories: string[];
  onSelectChange: (selectedValue: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  holder,
  onSelectChange,
  categories,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Categories');
  const [isClear, setIsClear] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      event.key === 'Escape' ||
      event.key === ' ' ||
      event.key === 'Spacebar'
    ) {
      setIsOpen(false);
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
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    console.log('selected', selected);
    setIsOpen(false);
    setIsClear(true);
    onSelectChange(value);
  };

  const clearField = () => {
    setSelected(holder);
    setIsClear(false);
    onSelectChange(holder);
  };

  useEffect(() => {
    onSelectChange(selected);
  }, [selected, onSelectChange]);

  return (
    <SelectWrapper ref={wrapperRef}>
      <Input onClick={toggleDropdown}>{selected}</Input>
      <IconSvgBox>
        {isClear && (
          <IconSvg icon="x" stroke="black" size="20px" onClick={clearField} />
        )}
        <IconSvg
          onClick={toggleDropdown}
          icon="angle-small-down-2"
          size="25px"
          fill="black"
        />
      </IconSvgBox>

      <OptionsList isOpen={isOpen}>
        {categories.map((item, index) => (
          <OptionItem key={index} onClick={() => handleSelect(item)}>
            {item}
          </OptionItem>
        ))}
      </OptionsList>
    </SelectWrapper>
  );
};

export default SelectField;
