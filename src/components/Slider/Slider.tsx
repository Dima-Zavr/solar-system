import { Slider as UISlider } from '@consta/uikit/Slider';
import { useState } from 'react';

interface IProps {
  startValue: number;
}

export const Slider = ({ startValue }: IProps) => {
    const [value, setValue] = useState<number>(startValue);
  return (
    <div className="slider">
      <UISlider label={`Значение ${value}`} onChange={setValue} value={value} />
    </div>
  );
};
