// src/components/ConfigPanel/PatternSelect.tsx
import React from "react";
import { PatternENUM } from "../../types/enums";

interface PatternSelectProps {
  pattern: PatternENUM;
  setPattern: (pattern: PatternENUM) => void;
}

const PatternSelect: React.FC<PatternSelectProps> = ({
  pattern,
  setPattern,
}) => (
  <div>
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="pattern"
    >
      排列模式
    </label>
    <select
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="pattern"
      value={pattern}
      onChange={(e) => setPattern(Number(e.target.value) as PatternENUM)}
    >
      <option value={PatternENUM.Random}>Random</option>
      <option value={PatternENUM.Array}>Array</option>
      <option value={PatternENUM.Spiral}>Spiral</option>
      <option value={PatternENUM.Concentric}>Concentric</option>
      <option value={PatternENUM.Fibonacci}>Fibonacci</option>
    </select>
  </div>
);

export default PatternSelect;
