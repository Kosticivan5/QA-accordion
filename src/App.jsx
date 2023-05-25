import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

function App() {
  return (
    <main className="mt-16 min-h-screen w-11/12 m-auto">
      <article className="flex flex-col items-center bg-white max-w-3xl  rounded-2xl mx-auto">
        <h1 className="capitalize text-3xl  font-semibold underline mt-6 mb-8 text-center">
          frequently asked questions
        </h1>
        {data.map((question) => {
          return <Questions key={question.id} {...question} />;
        })}
      </article>
    </main>
  );
}

export default App;
