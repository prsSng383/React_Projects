import React, { useState } from "react";
import { Terminal, Database, CheckCircle2, ArrowRight } from "lucide-react";

const Jokes = () => {
  const [jokes, setJokes] = useState(
    <p className="relative">
      Coming right up! Just click the button below{" "}
      <span className="text-4xl absolute top-[100%] left-[40%]">&#128514;</span>
    </p>
  );

  const [loading, setLoading] = useState(false);

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
      {/* Main wrapper → MOBILE = column | DESKTOP = clipped row */}
      <div
        className="h-[90vh] w-[95%] max-w-[1400px] bg-gray-800 rounded-[30px]
                      flex flex-col md:flex-row 
                      relative shadow-2xl overflow-hidden"
      >
        {/* LEFT SECTION */}
        <div
          className="
          w-full md:w-[45%] 
          h-[20vh] md:h-full 
          bg-white text-[#19200B] 
          flex flex-col
          rounded-t-[30px] md:rounded-l-[30px]
          md:absolute md:top-0 md:left-0
          z-10
                    
          /* disable clip-path on small screens */
          md:[clip-path:polygon(0%_0%,85%_0%,100%_100%,0%_100%)]
        "
        >
          {/* Content */}
          <div className="h-full flex flex-col justify-center p-10 md:justify-between md:pr-24 relative">
            {/* Visible on all screens */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-teal-600 font-bold tracking-widest text-xs uppercase">
                <span className="w-8 h-[2px] bg-teal-600"></span> Project 02
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#161D26] to-[#40d2cf]">
                JOKES
              </h1>
            </div>

            {/* Hidden on mobile */}
            <p className="text-gray-400 font-medium text-lg hidden md:block">
              React Functional Components
            </p>

            {/* Hidden on mobile */}
            <div className="space-y-4 hidden md:block">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-50 rounded-xl text-teal-600 shadow-sm">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Why this matters?
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1">
                    <strong>fetch()</strong> is your bridge to the outside world
                    of APIs. It’s how your application communicates, retrieves,
                    and sends data in real time. Mastering it unlocks dynamic
                    app behavior storing user inputs, updating UI from
                    databases, managing authentication, and integrating with
                    third-party services. Without solid control over fetch(),
                    your app remains static and disconnected from the data it
                    needs to feel truly alive.
                  </p>
                </div>
              </div>
            </div>

            {/* Hidden on mobile */}
            <div className="bg-[#161D26] text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group mb-6 hidden md:block">
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
                  <span>Inputs & Properties</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-teal-400" />
                  <span>Event Handling</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-teal-400" />
                  <span>Hooks: useState + fetch()</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                {" "}
                <span className="text-xs text-gray-500">
                  Status: Complete
                </span>{" "}
                <ArrowRight size={16} className="text-teal-400" />{" "}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          className="
          w-full h-[80vh] md:h-full
          bg-linear-to-r from-[#333333] via-[#333333] to-[#c9dd18]
          rounded-b-[30px] md:rounded-r-[30px]
          flex items-center justify-center md:relative
        "
        >
          <div className="h-[90%] w-[90%] md:w-[40%] flex flex-col items-center justify-center gap-10 px-5 rounded-2xl bg-transparent backdrop-blur-2xl bg-linear-120 from-[rgba(255,255,255,0.3)] to-[rgba(0,0,0,0.2)] bg-size-[30px_30px] md:absolute right-[10%]">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-100 bg-green-950 px-2 border border-t-2 border-b-2">
              JOKES!
            </h1>

            <p className="jokestext text-base md:text-xl font-mono bg-green-950 px-3 text-amber-200 border min-w-full min-h-40 md:min-h-60 max-h-60 overflow-scroll">
              {loading ? (
                <span className="text-2xl md:text-4xl">Loading....</span>
              ) : (
                jokes
              )}
            </p>

            <button
              onClick={fetchJokes}
              className="bg-white/50 font-bold backdrop-blur-2xl border-white border-t-2 border-b-2 py-3 px-4 rounded-lg cursor-pointer text-md md:text-lg hover:bg-white/30 transition-all duration-800"
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
