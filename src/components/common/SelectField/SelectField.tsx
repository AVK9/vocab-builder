import React, { useEffect, useRef, useState } from 'react';
import { IconSvg } from '../IconSvg';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import {
  IconBox,
  IconDot,
  IconSvgBox,
  IconSvgFill,
  IconSvgStyled,
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
  onRadioChange: (radioValue: boolean) => void;
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
  const [radio, setRadio] = useState(false);
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
              <IconSvgStyled
                specialStyle={specialStyle}
                icon="x"
                size="20px"
                onClick={clearField}
              />
            )}
            <IconSvgFill
              specialStyle={specialStyle}
              onClick={toggleDropdown}
              icon="angle-small-down-2"
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
            <Label
              specialStyle={specialStyle}
            >
              <RadioInput
                color={color}
                type="radio"
                name="werb"
                value="Regular"
                checked={radio === false}
                onChange={() => {
                  setRadio(false);
                  onRadioChange(false);
                }}
              />
              Regular
            </Label>
            <IconBox
              specialStyle={specialStyle}
              color={color}
              active={radio === false}
            >
              <IconDot color={color} active={radio === false} />
            </IconBox>
          </RadioBox>
          <RadioBox>
            <Label
              specialStyle={specialStyle}
            >
              <RadioInput
                type="radio"
                name="werb"
                value="Irregular"
                checked={radio === true}
                onChange={() => {
                  setRadio(true);
                  onRadioChange(true);
                }}
              />
              Irregular
            </Label>
            <IconBox
              specialStyle={specialStyle}
              color={color}
              active={radio === true}
            >
              <IconDot color={color} active={radio === true} />
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
