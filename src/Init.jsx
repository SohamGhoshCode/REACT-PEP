import Dice from './assets/dice.webp'

const Init = ({ toggle }) => {
  return (
    <div className="max-w-5xl mx-auto h-screen flex flex-col md:flex-row justify-center items-center gap-10 px-8">
      <div>
        <img src={Dice} alt="Dices" className="w-full max-w-lg" />
      </div>
      <div className="flex flex-col items-end">
        <h1 className="text-6xl md:text-8xl font-black whitespace-nowrap mb-4">DICE GAME</h1>
        <button 
          onClick={toggle}
          className="bg-yellow-500 text-black px-12 py-2 rounded text-lg font-medium hover:bg-yellow-600 transition-colors"
        >
          Play Game
        </button>
      </div>
    </div>
  );
};

export default Init;
