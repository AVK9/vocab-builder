import React from 'react';
import styled from 'styled-components';

interface ProgressCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  colorPers?: string;
  color?: string;
}

const CircleContainer = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: relative;
`;

const Svg = styled.svg`
  transform: rotate(-90deg);
`;

const CircleBackground = styled.circle<{ strokeWidth: number; color?: string }>`
  fill: none;
  stroke: ${props => props.color || '#d4f8d3'};
  stroke-width: ${({ strokeWidth }) => strokeWidth};
`;

const CircleProgress = styled.circle<{
  percentage: number;
  strokeWidth: number;
  colorPers?: string;
}>`
  fill: none;
  stroke: ${props => props.colorPers || '#2bd627'};
  stroke-width: ${({ strokeWidth }) => strokeWidth};
  stroke-dasharray: 100;
  stroke-dashoffset: ${({ percentage }) => 100 - percentage};
  transition: stroke-dashoffset 0.5s ease;
`;

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  size = 50,
  strokeWidth = 5,
  colorPers,
  color,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <CircleContainer size={size}>
      <Svg width={size} height={size}>
        <CircleBackground
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          color={color}
        />

        <CircleProgress
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          percentage={percentage}
          colorPers={colorPers}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: (circumference * (100 - percentage)) / 100,
          }}
        />
      </Svg>
    </CircleContainer>
  );
};

export default ProgressCircle;
