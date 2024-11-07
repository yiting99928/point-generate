import { useState } from "react";
interface RangeType {
  width: number;
  height: number;
}

type PatternType = "random" | "array" | "spiral" | "concentric";

function App() {
  const [range, setRange] = useState<RangeType>({
    width: 100,
    height: 100,
  });
  const [rotate, setRotate] = useState<number>(0);
  const [space, setSpace] = useState<number>(0);
  const [pattern, setPattern] = useState<PatternType>("random");

  return (
    <div className="flex">
      <div className="h-screen shadow-lg w-72">
        <p className="bg-gray-100 p-3 text-center ">點座標生成設置</p>
        <div className="p-5">
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
              onChange={(e) => setPattern(e.target.value as PatternType)}
            >
              <option value="random">random</option>
              <option value="array">array</option>
              <option value="spiral">spiral</option>
              <option value="concentric">concentric</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rotate"
            >
              旋轉角度
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rotate"
              type="number"
              placeholder="rotate"
              min="1"
              max="360"
              value={rotate}
              onChange={(e) => setRotate(parseInt(e.target.value, 10))}
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="space"
            >
              最小間距
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="space"
              type="number"
              placeholder="space"
              min="1"
              max="500"
              value={space}
              onChange={(e) => setSpace(+e.target.value)}
            />
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

      <div className="grow">canvas</div>
    </div>
  );
}

export default App;
