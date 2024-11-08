// src/components/ConfigPanel/ArraySettings.tsx
import React from "react";
import { AxesSpacingType } from "../../types/configTypes";

interface ArraySettingsProps {
  axesSpacing: AxesSpacingType;
  setAxesSpacing: (axesSpacing: AxesSpacingType) => void;
}

const ArraySettings: React.FC<ArraySettingsProps> = ({
  axesSpacing,
  setAxesSpacing,
}) => (
  <>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="xSpacing"
      >
        X 軸間距
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="xSpacing"
        type="number"
        placeholder="x spacing"
        min="1"
        max="100"
        value={axesSpacing.x}
        onChange={(e) => setAxesSpacing({ ...axesSpacing, x: +e.target.value })}
      />
    </div>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="zSpacing"
      >
        Y 軸間距
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="zSpacing"
        type="number"
        placeholder="z spacing"
        min="1"
        max="100"
        value={axesSpacing.y}
        onChange={(e) => setAxesSpacing({ ...axesSpacing, y: +e.target.value })}
      />
    </div>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="zSpacing"
      >
        排列方式
      </label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="pattern"
        // value={pattern}
        // onChange={(e) => setPattern(Number(e.target.value) as PatternENUM)}
      >
        {/* <option value={PatternENUM.Random}>Square</option> */}
        <option>Square</option>
        <option>Diamond</option>
        <option>Hexagonal</option>
      </select>
    </div>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="zSpacing"
      >
        旋轉角度
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="zSpacing"
        type="number"
        placeholder="z spacing"
        min="1"
        max="100"
        value={axesSpacing.y}
        onChange={(e) => setAxesSpacing({ ...axesSpacing, y: +e.target.value })}
      />
    </div>
  </>
);

export default ArraySettings;
