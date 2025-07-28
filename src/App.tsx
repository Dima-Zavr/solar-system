import { Panel } from './components/Panel/Panel';
import { Scene } from './components/Scene/Scene';
import { Slider } from './components/Slider/Slider';

export const App = () => {
  return (
    <>
      <Scene />
      <Panel className="external_panel">
        <Slider startValue={10} />
      </Panel>
    </>
  );
};
