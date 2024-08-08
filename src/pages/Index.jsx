import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Cat } from "lucide-react"

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const catFacts = [
    "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
    "The first cat in space was a French cat named Felicette in 1963.",
    "Cats spend 70% of their lives sleeping.",
    "A group of cats is called a clowder.",
    "Cats have a third eyelid called the nictitating membrane."
  ];

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-64 rounded-lg shadow-md mb-6"
        />
        <p className="text-xl text-gray-700 mb-6">{catFacts[factIndex]}</p>
        <Button onClick={nextFact} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Next Cat Fact
        </Button>
      </div>
    </div>
  );
};

export default Index;
