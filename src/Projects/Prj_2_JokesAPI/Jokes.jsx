import React, { useState } from "react";
import { Terminal, Database, CheckCircle2, ArrowRight } from "lucide-react";
const Jokes = () => {
  const [jokes, setJokes] = useState(
    <p className="relative">Coming right up! Just click the button below <span className="text-4xl absolute top-[100%] left-[40%]">&#128514;</span></p>
  );

  const[loading , setLoading] = useState(false);
  const fetchJokes = async () => {
    setLoading(true);
    const res = await fetch(
      "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
    );
    const data = await res.json();
    setLoading(false);
    setJokes(data.joke);
  };

  return (
    <div className="min-h-screen w-full bg-[#161D26] text-white flex items-center justify-center p-4 font-sans">
      <div className="h-[90vh] w-[95%] max-w-[1400px] bg-gray-800 rounded-[30px] flex items-center justify-center relative shadow-2xl overflow-hidden">
        {/*  LEFT SECTION (DESIGNED) */}
        <div className="h-full w-[45%] bg-white text-[#19200B] flex flex-col justify-between rounded-l-[30px] absolute top-0 left-0 z-10 [clip-path:polygon(0%_0%,85%_0%,100%_100%,0%_100%)]">
          {/* Decorative Background Elements */}
          <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-[10%] right-[20%] w-60 h-60 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          {/* Content Container */}
          <div className="h-full flex flex-col justify-between p-10 pr-24 relative">
            {/* 1. Heading */}
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2 text-teal-600 font-bold tracking-widest text-xs uppercase mb-2">
                <span className="w-8 h-[2px] bg-teal-600"></span> Project 02
              </div>
              <h1 className="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#161D26] to-[#40d2cf]">
                JOKES
              </h1>
              <p className="text-gray-400 font-medium text-lg">
                React Functional Components
              </p>
            </div>

            {/* 2. Why it is important */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-50 rounded-xl text-teal-600 shadow-sm">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Why this matters?
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1">
                    <strong>fetch()</strong> is your bridge to the outside world of APIs. It’s
                    how your application communicates, retrieves, and sends data
                    in real time. Mastering it unlocks dynamic app
                    behavior storing user inputs, updating UI from databases,
                    managing authentication, and integrating with third-party
                    services. Without solid control over fetch(), your app
                    remains static and disconnected from the data it needs to
                    feel truly alive.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. What I learned */}
            <div className="bg-[#161D26] text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group mb-6">
              <div className="absolute inset-0 bg-linear-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-center gap-2 mb-4 text-teal-400">
                <Terminal size={18} />
                <span className="font-mono text-xs tracking-wider">
                  LEARNING_LOG.md
                </span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-teal-400" />
                  <span>State Management</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-teal-400" />
                  <span>Inputs & it's properties</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-teal-400" />
                  <span>React Event Handling logic</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-teal-400" />
                  <span>React Hooks useState() , fetch()</span>
                </li>
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                <span className="text-xs text-gray-500">Status: Complete</span>
                <ArrowRight size={16} className="text-teal-400" />
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="h-full w-full bg-linear-to-r from-[#333333] via-[#333333] to-[#dd1818] relative">
          <div className="container h-[80%] w-[40%] flex flex-col items-center justify-center gap-10 px-5 absolute left-[50%] top-[50%] -translate-y-[50%] rounded-2xl bg-transparent backdrop-blur-2xl bg-linear-120 from-[rgba(255,255,255,0.3)] to-[rgba(0,0,0,0.2)] bg-size-[30px_30px]">
            <h1 className="text-4xl font-bold text-gray-100 bg-green-950 px-2 border border-t-2 border-b-2">
              JOKES!
            </h1>
            <p className="jokestext text-xl font-mono bg-green-950 px-3 text-amber-200 border min-w-full min-h-60 max-h-60 overflow-scroll">
              {loading ? <p className="absolute text-4xl top-[40%] left-[30%]">Loading....</p> : jokes}
            </p>
            <button
              onClick={fetchJokes}
              className="jokesbutton bg-white/50 font-bold backdrop-blur-2xl border-white border-t-2 border-b-2 py-4 px-3 rounded-lg cursor-pointer text-lg hover:bg-white/30 transition-all duration-800"
            >
              Generate new!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jokes;
