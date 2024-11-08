interface RandomSettingsProps {
  pointCount: number;
  setPointCount: (count: number) => void;
  pointSpace: number;
  setPointSpace: (space: number) => void;
}

const RandomSettings: React.FC<RandomSettingsProps> = ({
  pointCount,
  setPointCount,
  pointSpace,
  setPointSpace,
}) => (
  <>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="pointCount"
      >
        點的數量
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="pointCount"
        type="number"
        placeholder="point count"
        min="1"
        max="1000"
        value={pointCount}
        onChange={(e) => setPointCount(+e.target.value)}
      />
    </div>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="pointSpace"
      >
        最小間距
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="pointSpace"
        type="number"
        placeholder="pointSpace"
        min="1"
        max="500"
        value={pointSpace}
        onChange={(e) => setPointSpace(+e.target.value)}
      />
    </div>
  </>
);

export default RandomSettings;
