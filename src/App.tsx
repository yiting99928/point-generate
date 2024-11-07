function App() {
  return (
    <div className="flex">
      <div className="h-screen  shadow-lg">
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
              id="width"
              type="text"
              placeholder="width"
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
              id="height"
              type="text"
              placeholder="height"
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
            >
              <option value="random">random 隨機點</option>
              <option value="array">array 陣列點</option>
              <option value="spiral">spiral 螺旋點</option>
              <option value="concentric">concentric 同心圓點</option>
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
