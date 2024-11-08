import { AxesSpacingType, RangeType } from "../../types/configTypes";
import { PatternENUM } from "../../types/enums";
import ArraySettings from "./ArraySettings";
import ConcentricSettings from "./ConcentricSettings";
import FibonacciSettings from "./FibonacciSettings";
import PatternSelect from "./PatternSelect";
import RandomSettings from "./RandomSettings";
import SpiralSettings from "./SpiralSettings";

interface ConfigPanelProps {
  range: RangeType;
  setRange: (range: RangeType) => void;
  pointSpace: number;
  setPointSpace: (pointSpace: number) => void;
  pattern: PatternENUM;
  setPattern: (pattern: PatternENUM) => void;
  pointCount: number;
  setPointCount: (count: number) => void;
  spiralTurns: number;
  setSpiralTurns: (turns: number) => void;
  axesSpacing: AxesSpacingType;
  setAxesSpacing: (axesSpacing: AxesSpacingType) => void;
}

export default function ConfigPanel({
  range,
  setRange,
  pointSpace,
  setPointSpace,
  pattern,
  setPattern,
  pointCount,
  setPointCount,
  spiralTurns,
  setSpiralTurns,
  axesSpacing,
  setAxesSpacing,
}: ConfigPanelProps) {
  return (
    <div className="h-screen shadow-lg w-72">
      <p className="bg-gray-100 p-3 text-center ">點座標生成設置</p>
      <div className="p-5 flex flex-col gap-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="width"
          >
            Width
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={range.width}
            onChange={(e) => setRange({ ...range, width: +e.target.value })}
            id="width"
            type="number"
            placeholder="width"
            min="1"
            max="500"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="height"
          >
            Height
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={range.height}
            onChange={(e) => setRange({ ...range, height: +e.target.value })}
            id="height"
            type="number"
            placeholder="height"
            min="1"
            max="500"
          />
        </div>
        <PatternSelect pattern={pattern} setPattern={setPattern} />
        <div className="bg-gray-100 rounded-md p-2 pb-1 mb-8 flex flex-col gap-4">
          {pattern === PatternENUM.Random && (
            <RandomSettings
              pointCount={pointCount}
              setPointCount={setPointCount}
              pointSpace={pointSpace}
              setPointSpace={setPointSpace}
            />
          )}
          {pattern === PatternENUM.Array && (
            <ArraySettings
              axesSpacing={axesSpacing}
              setAxesSpacing={setAxesSpacing}
            />
          )}
          {pattern === PatternENUM.Spiral && (
            <SpiralSettings
              spiralTurns={spiralTurns}
              setSpiralTurns={setSpiralTurns}
            />
          )}
          {pattern === PatternENUM.Concentric && (
            <ConcentricSettings
              spiralTurns={spiralTurns}
              setSpiralTurns={setSpiralTurns}
            />
          )}
          {pattern === PatternENUM.Fibonacci && (
            <FibonacciSettings
              spiralTurns={spiralTurns}
              setSpiralTurns={setSpiralTurns}
            />
          )}
        </div>
        <div className="flex items-center justify-center gap-1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto"
            type="button"
          >
            生成點
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            複製座標
          </button>
        </div>
      </div>
    </div>
  );
}
