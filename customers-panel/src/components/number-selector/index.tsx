import { Plus, Minus } from 'lucide-react';

interface INumberSelectorProps {
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>
}

function NumberSelector({limit, setLimit}: Readonly<INumberSelectorProps>) {

  const handleDecrease = () => {
    if (limit > 1) setLimit(limit - 1);
  };

  const handleIncrease = () => {
    if (limit < 20) setLimit(limit + 1);
  };

  return (
    <div className="flex items-center space-x-2">

      <button
        onClick={handleDecrease}
        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        <Minus size={16} className="text-gray-700" />
      </button>

      <input
        type="number"
        value={limit}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (value >= 1 && value <= 20) setLimit(value);
        }}
        className="w-16 text-center border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-gray-200"
        min="1"
        max="20"
      />


      <button
        onClick={handleIncrease}
        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        <Plus size={16} className="text-gray-700" />
      </button>
    </div>
  );
}

export default NumberSelector;
