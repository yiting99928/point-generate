interface FibonacciSettingsProps {
  spiralTurns: number;
  setSpiralTurns: (count: number) => void;
}

const FibonacciSettings: React.FC<FibonacciSettingsProps> = ({
  spiralTurns,
  setSpiralTurns,
}) => (
  <>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="spiralTurns"
      >
        角度
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="spiralTurns"
        type="number"
        placeholder="spiral turns"
        min="1"
        max="100"
        value={spiralTurns}
        onChange={(e) => setSpiralTurns(+e.target.value)}
      />
    </div>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="spiralTurns"
      >
        密度
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="spiralTurns"
        type="number"
        placeholder="spiral turns"
        min="1"
        max="100"
        value={spiralTurns}
        onChange={(e) => setSpiralTurns(+e.target.value)}
      />
    </div>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="spiralTurns"
      >
        點數量
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="spiralTurns"
        type="number"
        placeholder="spiral turns"
        min="1"
        max="100"
        value={spiralTurns}
        onChange={(e) => setSpiralTurns(+e.target.value)}
      />
    </div>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="spiralTurns"
      >
        旋轉角度
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="spiralTurns"
        type="number"
        placeholder="spiral turns"
        min="1"
        max="100"
        value={spiralTurns}
        onChange={(e) => setSpiralTurns(+e.target.value)}
      />
    </div>
  </>
);

export default FibonacciSettings;