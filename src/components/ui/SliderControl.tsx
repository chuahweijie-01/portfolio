import React from 'react';

type SliderControlProps = {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  valueLabel?: string;
  className?: string;
};

const SliderControl: React.FC<SliderControlProps> = ({
  id,
  label,
  min,
  max,
  step,
  value,
  onChange,
  valueLabel,
  className = '',
}) => {
  return (
    <div className='w-full flex items-center gap-5'>
      <label htmlFor={id} className='text-sm whitespace-nowrap'>
        {label}
      </label>
      <input
        id={id}
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className={`flex-1 min-w-0 slider-range ${className}`}
      />
      <span className='text-sm text-amber-400 text-right whitespace-nowrap'>
        {valueLabel ?? (typeof value === 'number' ? value.toFixed(2) : value)}
      </span>
    </div>
  );
};

export default SliderControl;
