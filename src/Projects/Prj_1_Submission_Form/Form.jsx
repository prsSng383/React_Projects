import React, { useState } from "react";
import { Terminal, Database, CheckCircle2, ArrowRight } from "lucide-react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emial, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState({
    english: false,
    maths: false,
    physics: false,
  });
  const [upload, setUpload] = useState("");
  const [url, setUrl] = useState("");
  const [choice, setChoice] = useState("");
  const [about, setABout] = useState("");

  const [data, setData] = useState({});
// These are the states defined for each input element in the form.
  
// Reset handeling logic
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSubject({ english: false, maths: false, physics: false });
    setUpload("");
    setUrl("");
    setChoice("");
    setABout("");
  };

  // Submit logic
  const handleSubmissionForm = (e) => {
    //prevents the default submit nature of the form
    e.preventDefault();

    setData({
      ...data,
      firstName,
      lastName,
      emial,
      contact,
      gender,
      subject,
      upload,
      url,
      choice,
      about,
    });

    console.log("Form Submitted:", {
      firstName,
      lastName,
      emial,
      contact,
      gender,
      subject,
      upload,
      url,
      choice,
      about,
    });

    //After submitting calling the reset function again
    handleReset();
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
                <span className="w-8 h-[2px] bg-teal-600"></span> Project 01
              </div>
              <h1 className="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#161D26] to-[#40d2cf]">
                FORMS
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
                    Forms are the gateway between users and your application
                    logic. Mastering state management here creates the
                    foundation for building complex, interactive data-driven
                    interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. What I learned */}
            <div className="bg-[#161D26] text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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
                  <span>React Hooks useState()</span>
                </li>
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                <span className="text-xs text-gray-500">Status: Complete</span>
                <ArrowRight size={16} className="text-teal-400" />
              </div>
            </div>
          </div>
        </div>



        {/*  RIGHT SECTION (FORM)*/}
        <div className="h-full w-full bg-[url('lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg')] bg-no-repeat bg-cover bg-center flex items-center justify-end rounded-[30px] pl-[40%]">
          {/* Increased width slightly to accommodate 2-column rows, reduced padding */}
          <div className="formcontainer flex flex-col items-start p-4 mr-10 w-[450px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
            <form
              action=""
              className="forum z-50 text-xs w-full rounded-xl flex flex-col gap-1.5 text-gray-100"
            >
              <div className="w-full pb-1 border-b border-white/10 mb-1">
                <h1 className="text-[#40d2cf] text-xl font-bold">
                  Forms in React
                </h1>
                <p className="text-white/60 text-[10px] uppercase tracking-wider">
                  Enter your details below
                </p>
              </div>

              {/* ROW 1: Names */}
              <div className="flex gap-2 w-full">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block mb-0.5 text-[10px] font-medium text-white/80"
                  >
                    First Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter you fistname..."
                    className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-[11px] text-white placeholder-white/30 focus:outline-none focus:border-[#40d2cf] transition-colors"
                    value={firstName}
                    // these value attribute tell the React , something changed in the state , 
                    // re-render the UI .
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastname"
                    className="block mb-0.5 text-[10px] font-medium text-white/80"
                  >
                    Last Name*
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Enter you lastname..."
                    className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-[11px] text-white placeholder-white/30 focus:outline-none focus:border-[#40d2cf] transition-colors"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* ROW 2: Email & Contact */}
              <div className="flex gap-2 w-full">
                <div className="flex-[1.5]">
                  <label
                    htmlFor="email"
                    className="block mb-0.5 text-[10px] font-medium text-white/80"
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-[11px] text-white placeholder-white/30 focus:outline-none focus:border-[#40d2cf] transition-colors"
                    value={emial}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="contact"
                    className="block mb-0.5 text-[10px] font-medium text-white/80"
                  >
                    Contact*
                  </label>
                  <input
                    id="contact"
                    type="number"
                    placeholder="1234..."
                    className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-[11px] text-white placeholder-white/30 focus:outline-none focus:border-[#40d2cf] transition-colors"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="w-full">
                <label className="block mb-0.5 text-[10px] font-medium text-white/80">
                  Gender*
                </label>
                <div className="flex gap-3 p-1 bg-black/20 rounded border border-white/10">
                  {["male", "female", "other"].map((g) => (
                    <div
                      key={g}
                      className="flex items-center gap-1.5 cursor-pointer"
                    >
                      <input
                        id={g}
                        name="gender"
                        value={g}
                        type="radio"
                        className="accent-[#40d2cf] cursor-pointer h-3 w-3"
                        checked={gender === g}
                        // if the logic changes , the React is informed that state has something different now.
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label
                        htmlFor={g}
                        className="capitalize cursor-pointer hover:text-[#40d2cf] transition-colors text-[10px]"
                      >
                        {g}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subject */}
              <div className="w-full">
                <label className="block mb-0.5 text-[10px] font-medium text-white/80">
                  Best Subject*
                </label>
                <div className="flex flex-wrap gap-2">
                  {["english", "maths", "physics"].map((sub) => (
                    <div
                      key={sub}
                      className={`
                        flex items-center gap-1 px-2 py-0.5 rounded-full border transition-all cursor-pointer
                        ${
                          subject[sub]
                            ? "bg-[#40d2cf]/20 border-[#40d2cf] text-[#40d2cf]"
                            : "bg-black/20 border-white/10 text-white/60"
                        }
                     `}
                    >
                      <input
                        id={sub}
                        name="subject"
                        type="checkbox"
                        className="hidden"
                        checked={subject[sub]}
                        onChange={() =>
                          setSubject({ ...subject, [sub]: !subject[sub] })
                        }
                      />
                      <label
                        htmlFor={sub}
                        className="cursor-pointer capitalize font-medium text-[10px]"
                      >
                        {sub}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROW 3: Upload & URL */}
              <div className="flex gap-2 w-full">
                <div className="flex-1">
                  <label
                    htmlFor="upload"
                    className="block mb-0.5 text-[10px] font-medium text-white/80"
                  >
                    Resume*
                  </label>
                  <input
                    id="upload"
                    type="file"
                    className="w-full text-[9px] text-gray-400 file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[9px] file:font-semibold file:bg-[#40d2cf] file:text-gray-900 hover:file:bg-[#3bc2bf] cursor-pointer bg-black/20 rounded border border-white/10"
                    onChange={(e) => setUpload(e.target.files[0])}
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="url"
                    className="block mb-0.5 text-[10px] font-medium text-white/80"
                  >
                    Portfolio*
                  </label>
                  <input
                    id="url"
                    type="url"
                    className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-[11px] text-white placeholder-white/30 focus:outline-none focus:border-[#40d2cf] transition-colors"
                    placeholder="https://..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
              </div>

              {/* Select */}
              <div className="w-full">
                <label
                  htmlFor="select"
                  className="block mb-0.5 text-[10px] font-medium text-white/80"
                >
                  Selection
                </label>
                <select
                  id="select"
                  className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-[11px] text-white focus:outline-none focus:border-[#40d2cf] transition-colors [&>option]:bg-gray-800"
                  value={choice}
                  onChange={(e) => setChoice(e.target.value)}
                >
                  <option value="none">Select Option</option>
                  <option value="A">Option A</option>
                  <option value="B">Option B</option>
                  <option value="C">Option C</option>
                  <option value="D">Option D</option>
                </select>
              </div>

              {/* About */}
              <div className="w-full">
                <label
                  htmlFor="about"
                  className="block mb-0.5 text-[10px] font-medium text-white/80"
                >
                  About*
                </label>
                <textarea
                  id="about"
                  className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-[11px] text-white placeholder-white/30 focus:outline-none focus:border-[#40d2cf] transition-colors h-10 resize-none"
                  placeholder="Bio..."
                  value={about}
                  onChange={(e) => setABout(e.target.value)}
                ></textarea>
              </div>

              {/* Actions */}
              <div className="w-full pt-1.5 mt-1 border-t border-white/10 flex gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-1.5 rounded border border-[#40d2cf] text-[#40d2cf] font-bold hover:bg-[#40d2cf]/10 transition-all uppercase tracking-wide text-[9px]"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  onClick={handleSubmissionForm}
                  className="flex-1 py-1.5 rounded bg-[#40d2cf] text-gray-900 font-bold hover:bg-[#3bc2bf] hover:shadow-[0_0_15px_rgba(64,210,207,0.4)] transition-all uppercase tracking-wide text-[9px]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
