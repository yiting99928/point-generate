import { useState } from "react";
import ConfigPanel from "./components/ConfigPanel/ConfigPanel";
import GraphsSection from "./components/GraphsSection";
import { AxesSpacingType, RangeType } from "./types/configTypes";
import { PatternENUM } from "./types/enums";

function App() {
  const [range, setRange] = useState<RangeType>({
    width: 100,
    height: 100,
  });
  const [pointSpace, setPointSpace] = useState<number>(0);
  const [pattern, setPattern] = useState<PatternENUM>(PatternENUM.Random);
  const [pointCount, setPointCount] = useState<number>(5);
  const [axesSpacing, setAxesSpacing] = useState<AxesSpacingType>({
    x: 10,
    y: 10,
  });
  const [spiralTurns, setSpiralTurns] = useState<number>(5);

  return (
    <div className="flex">
      <ConfigPanel
        range={range}
        setRange={setRange}
        pointSpace={pointSpace}
        setPointSpace={setPointSpace}
        pattern={pattern}
        setPattern={setPattern}
        pointCount={pointCount}
        setPointCount={setPointCount}
        spiralTurns={spiralTurns}
        setSpiralTurns={setSpiralTurns}
        axesSpacing={axesSpacing}
        setAxesSpacing={setAxesSpacing}
      />
      <GraphsSection range={range} />
    </div>
  );
}

export default App;
