import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  //navigate to top of page when refreshed
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const [workout, setWorkout] = useState(null);
  const [battle, setBattle] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ battle, muscles, goal });
    console.log(newWorkout);
    setWorkout(newWorkout);
    window.location.href = "#workout";
  }

  return (
    <>
      <main className="min-h-screen flex flex-col bg-gradient-to-r from-black to-zinc-800 text-white text-sm sm:text-base">
        <Hero />
        <Generator
          battle={battle}
          setBattle={setBattle}
          muscles={muscles}
          setMuscles={setMuscles}
          goal={goal}
          setGoal={setGoal}
          updateWorkout={updateWorkout}
        />
        {workout && <Workout workout={workout} />}
      </main>
    </>
  );
}

export default App;
