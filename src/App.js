import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [isSorting, setIsSorting] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(100);

  useEffect(() => {
    resetArray();
  }, []);

  function resetArray() {
    if (isSorting) return;
    const newArr = [];
    for (let i = 0; i < 30; i++) {
      newArr.push(Math.floor(Math.random() * 300) + 10);
    }
    setArray(newArr);
  }

  const algorithmsInfo = {
    "Bubble Sort": {
      description: "Repeatedly swaps adjacent elements if they are in wrong order.",
      complexity: "Time Complexity: O(n²)",
    },
    "Merge Sort": {
      description: "Divides array into halves and merges them sorted.",
      complexity: "Time Complexity: O(n log n)",
    },
    "Quick Sort": {
      description: "Picks a pivot and partitions the array around it recursively.",
      complexity: "Time Complexity: O(n log n)",
    },
  };

  function getBubbleSortAnimations(array) {
    const animations = [];
    const arr = array.slice();
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        animations.push({ type: "compare", indices: [j, j + 1] });
        if (arr[j] > arr[j + 1]) {
          animations.push({ type: "swap", indices: [j, j + 1] });
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return animations;
  }

  function startSorting() {
    if (isSorting) return;
    setIsSorting(true);

    const animations = getBubbleSortAnimations(array);
    let arrayCopy = array.slice();
    let i = 0;

    function animateStep() {
      if (i >= animations.length) {
        setIsSorting(false);
        return;
      }
      const step = animations[i];
      if (step.type === "swap") {
        const [barOne, barTwo] = step.indices;
        let temp = arrayCopy[barOne];
        arrayCopy[barOne] = arrayCopy[barTwo];
        arrayCopy[barTwo] = temp;
        setArray(arrayCopy.slice());
      }
      i++;
      setTimeout(animateStep, animationSpeed);
    }

    animateStep();
  }

  return (
    <div className="App">
      <h1>Sorting Visualizer</h1>
      <select
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
        disabled={isSorting}
      >
        <option>Bubble Sort</option>
        <option>Merge Sort</option>
        <option>Quick Sort</option>
      </select>
      <div className="algorithm-info">
        <h3>{algorithm}</h3>
        <p>{algorithmsInfo[algorithm].description}</p>
        <p>{algorithmsInfo[algorithm].complexity}</p>
      </div>
      <button onClick={resetArray} disabled={isSorting}>
        Generate New Array
      </button>
      <button
        onClick={startSorting}
        disabled={isSorting || algorithm !== "Bubble Sort"}
      >
        Start Bubble Sort
      </button>
      <label>Speed: </label>
      <input
        type="range"
        min="10"
        max="1000"
        step="10"
        value={animationSpeed}
        onChange={(e) => setAnimationSpeed(Number(e.target.value))}
        disabled={isSorting}
      />
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="array-bar"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
