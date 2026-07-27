import { useState } from 'react'
import Init from './Init'

const Dice = ({ face }) => {
  const diceImages = {
    1: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
    2: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
    3: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
    4: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
    5: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
    6: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
  };

  return (
    <img 
      src={diceImages[face]} 
      alt={`Dice ${face}`} 
      className="w-32 h-32 shadow-2xl rounded-xl object-contain bg-white"
    />
  );
}


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const toggleGamePlay = () => {
    setIsGameStarted(prev => !prev);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    
    setError("");
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore(prev => prev + 2);
    } else {
      setScore(prev => prev - 2);
    }
  };

  if (!isGameStarted) {
    return <Init toggle={toggleGamePlay} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gray-200">
      <header className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto pt-16 px-8 gap-8 md:gap-0">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl font-bold leading-none">{score}</h1>
          <p className="text-xl font-medium mt-2">Total Score</p>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="h-6 mb-2">
            {error && <p className="text-red-500 font-medium">{error}</p>}
          </div>
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => { setSelectedNumber(num); setError(""); }}
                className={`w-16 h-16 text-2xl font-bold border-2 transition-all ${
                  selectedNumber === num 
                    ? "bg-black text-white border-black shadow-lg scale-105" 
                    : "bg-white text-black border-black hover:bg-gray-100"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <p className="text-2xl font-bold mt-4">Select Number</p>
        </div>
      </header>

      <main className="flex flex-col items-center mt-24 pb-12">
        <button 
          onClick={rollDice} 
          className="cursor-pointer transition-transform hover:scale-105 active:scale-95 border-none bg-transparent"
        >
          <Dice face={currentDice} />
        </button>
        <p className="text-2xl font-medium mt-6">Click on dice to roll</p>
        
        <div className="flex flex-col gap-4 mt-10">
          <button 
            onClick={() => {
              setScore(0);
              setSelectedNumber(null);
              setError("");
              setCurrentDice(1);
            }} 
            className="bg-red-500 text-black w-56 py-2 border-2 border-black rounded text-lg font-medium hover:bg-red-600 transition-colors"
          >
            Reset Score
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
