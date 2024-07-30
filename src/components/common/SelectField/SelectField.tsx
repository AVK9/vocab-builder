import React, { useEffect, useRef, useState } from 'react';
import { IconSvg } from '../IconSvg';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import {
  IconBox,
  IconDot,
  IconSvgBox,
  Input,
  InputWrapper,
  Label,
  OptionItem,
  OptionsList,
  RadioBlock,
  RadioBox,
  RadioInput,
  SelectBox,
  SelectWrapper,
} from './SelectField.styled';

interface SelectFieldProps {
  holder: string;
  color?: string | undefined;
  categories: string[];
  onSelectChange: (selectedValue: string) => void;
  onRadioChange: (radioValue: string) => void;
  specialStyle?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  holder,
  onSelectChange,
  categories,
  onRadioChange,
  color,
  specialStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Categories');
  const [isClear, setIsClear] = useState(false);
  const [radio, setRadio] = useState('Regular');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();

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
    <SelectBox specialStyle={specialStyle}>
      <SelectWrapper specialStyle={specialStyle} ref={wrapperRef}>
        <InputWrapper specialStyle={specialStyle}>
          <Input specialStyle={specialStyle} onClick={toggleDropdown}>
            {selected}
          </Input>
          <IconSvgBox>
            {isClear && (
              <IconSvg
                icon="x"
                stroke="black"
                size="20px"
                onClick={clearField}
              />
            )}
            <IconSvg
              onClick={toggleDropdown}
              icon="angle-small-down-2"
              size="25px"
              fill="black"
            />
          </IconSvgBox>
        </InputWrapper>
        <OptionsList isOpen={isOpen}>
          {categories.map((item, index) => (
            <OptionItem key={index} onClick={() => handleSelect(item)}>
              {item}
            </OptionItem>
          ))}
        </OptionsList>
      </SelectWrapper>
      {selected === 'verb' ? (
        <RadioBlock>
          <RadioBox>
            <Label active={radio === 'Regular'}>
              <RadioInput
                color={color}
                type="radio"
                name="werb"
                value="Regular"
                checked={radio === 'Regular'}
                onChange={() => {
                  setRadio('Regular');
                  onRadioChange('Regular');
                }}
              />
              Regular
            </Label>
            <IconBox color={color} active={radio === 'Regular'}>
              <IconDot color={color} active={radio === 'Regular'} />
            </IconBox>
          </RadioBox>
          <RadioBox>
            <Label active={radio === 'Irregular'}>
              <RadioInput
                type="radio"
                name="werb"
                value="Irregular"
                checked={radio === 'Irregular'}
                onChange={() => {
                  setRadio('Irregular');
                  onRadioChange('Irregular');
                }}
              />
              Irregular
            </Label>
            <IconBox color={color} active={radio === 'Irregular'}>
              <IconDot color={color} active={radio === 'Irregular'} />
            </IconBox>
          </RadioBox>
        </RadioBlock>
      ) : (
        ''
      )}
    </SelectBox>
  );
};

export default SelectField;
