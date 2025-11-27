import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const timelineData = [
  {
    id: 1,
    title: "FORMS", // Long Title Test Case
    subtitle: "The journey begins with ReactJS.",
    image: "/src/assets/Screenshot 2025-11-27 100641.png",
    bg: "/src/assets/Screenshot 2025-11-27 100641.png",
    path:"prj_1"
  },
  {
    id: 2,
    title: "Ascent",
    subtitle: "Climbing higher to find new perspectives.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop",
    bg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Outbound",
    subtitle: "Enjoying the outdoors is a thing of life.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop",
    bg: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Summit",
    subtitle: "Reaching the peak was only the beginning.",
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=2070&auto=format&fit=crop",
    bg: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Expedition",
    subtitle: "Charting unknown territories in the wild.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    bg: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Highland",
    subtitle: "Where the air is thin and spirit is high.",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop",
    bg: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Horizon",
    subtitle: "Chasing the sun across the endless peaks.",
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=2070&auto=format&fit=crop",
    bg: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Alpine",
    subtitle: "Surrounded by the giants of the earth.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    bg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Zenith",
    subtitle: "The ultimate point of the journey.",
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=2070&auto=format&fit=crop",
    bg: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=2070&auto=format&fit=crop"
  },
];

const List = () => {
  const [activeId, setActiveId] = useState(1);
  const [animDirection, setAnimDirection] = useState('up');
  const [key, setKey] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const itemRefs = useRef({});
  const sidebarRef = useRef(null);
  const activeData = timelineData.find(d => d.id === activeId) || timelineData[2];

  useEffect(() => {
    const container = sidebarRef.current;
    const activeElement = itemRefs.current[activeId];

    if (container && activeElement) {
        // Calculate center position
        const topPos = activeElement.offsetTop - (container.clientHeight / 2) + (activeElement.clientHeight / 2);
        container.scrollTo({
            top: topPos,
            behavior: 'smooth'
        });
    }
  }, [activeId]);

  const handleIdClick = (id) => {
    if (id === activeId) return;
    setAnimDirection(id > activeId ? 'up' : 'down');
    setActiveId(id);
    setKey(prev => prev + 1);
  };

  // NEW FUNCTION: Dynamically calculate font styles based on character length
  const getDynamicTitleStyles = (title) => {
    const length = title.length;
    
    // Default Massive (Short titles like "Ascent")
    if (length <= 10) {
      return {
        className: "text-[15vw] md:text-[11vw] leading-[0.8] whitespace-nowrap",
        style: {}
      };
    } 
    // Medium Length (Titles like "Expedition")
    else if (length <= 16) {
      return {
        className: "text-[12vw] md:text-[8vw] leading-[0.85] whitespace-nowrap",
        style: {}
      };
    }
    // Long Length (Titles like "Origins Of The Monkey King")
    else {
      return {
        className: "text-[10vw] md:text-[6vw] leading-[0.9] whitespace-normal break-words max-w-[90%]",
        style: { wordSpacing: '0.2em' } // Add slight breathing room for stacked words
      };
    }
  };

  const titleStyle = getDynamicTitleStyles(activeData.title);

  return (
    // Main App Wrapper
    <div className="relative w-full h-[100dvh] bg-[#0a0a0a] text-white overflow-hidden font-sans selection:bg-white selection:text-black">
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600&display=swap');
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(100px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-100px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          /* Updated duration to 1.2s and smoothed the bezier curve */
          .animate-enter-up { animation: slideUp 1.2s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
          .animate-enter-down { animation: slideDown 1.2s cubic-bezier(0.2, 1, 0.2, 1) forwards; }

          /* Custom Scrollbar Styles - Restored */
          .custom-scrollbar::-webkit-scrollbar {
            width: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.4);
          }
        `}
      </style>

      {/* Fixed Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="\src\assets\lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg" 
          alt="Background" 
          className="w-full h-full opacity-70 grayscale contrast-120"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a] opacity-90"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
      </div>

      {/* 1. Navbar Division */}
      <div className="navbar relative z-50 flex justify-between items-center p-6 md:px-12 w-full h-[80px]">
        <div className="text-xl md:text-2xl font-bold tracking-tighter hover:text-gray-300 cursor-pointer z-50">Projects</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">
          {['Services', 'About', 'Contact'].map((item) => (
             <li key={item} className="cursor-pointer hover:text-white transition-colors duration-300">{item}</li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white cursor-pointer z-[110] relative focus:outline-none p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center space-y-10 animate-enter-down md:hidden">
                 {['Services', 'About', 'Contact'].map((item) => (
                    <span 
                      key={item} 
                      className="text-3xl font-anton uppercase tracking-widest text-gray-300 hover:text-white cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </span>
                 ))}
            </div>
        )}
      </div>

      {/* Wrapper for Side-by-Side Layout */}
      <div className="relative z-10 flex h-[calc(100dvh-80px)] w-full">
        
        {/* 2. Scrollbar List Division */}
        <div className="scrollbarList w-20 md:w-48 h-full flex flex-col justify-center items-center relative z-40 shrink-0">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block"></div>
          
          <svg className="absolute top-[42%] left-[50%] h-40 w-16 text-white/20 hidden md:block pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M 0 10 Q 0 80 45 80" />
          </svg>

          {/* List Numbers */}
          <div 
            ref={sidebarRef}
            className="flex flex-col space-y-6 md:space-y-10 text-center z-50 backdrop-blur-sm py-4 rounded-full max-h-[60vh] md:max-h-[50vh] overflow-y-auto overflow-x-hidden custom-scrollbar w-full items-center px-1 md:px-2 snap-y snap-mandatory touch-pan-y"
          >
            {timelineData.map((item) => (
                <div 
                    key={item.id}
                    ref={(el) => (itemRefs.current[item.id] = el)}
                    onClick={() => handleIdClick(item.id)}
                    className="relative cursor-pointer group transition-all duration-[1200ms] w-full flex justify-center snap-center py-4 md:py-2 min-h-[44px] items-center"
                >
                    {item.id === activeId ? (
                        <div className="flex items-center justify-center md:-ml-4">
                            <span className="text-white font-bold text-xl md:text-2xl font-mono scale-110 transition-transform duration-[1200ms]">0{item.id}</span>
                            <Play size={8} className="ml-1 md:ml-2 fill-white text-white animate-pulse hidden md:block" />
                        </div>
                    ) : (
                        <span className="text-sm md:text-base text-gray-600 font-mono hover:text-gray-300 transition-colors duration-[1200ms] block p-2 md:p-0">
                            0{item.id}
                        </span>
                    )}
                </div>
            ))}
          </div>
        </div>

        {/* 3. Content Division */}
        <div 
            key={key} 
            className={`content flex-1 relative flex flex-col md:flex-row ${animDirection === 'up' ? 'animate-enter-up' : 'animate-enter-down'} h-full w-full overflow-hidden`}
        >
          
          {/* Content LEFT: Title and Subtitle */}
          <div className="contentLeft  w-full md:w-1/2 h-full flex flex-col justify-center items-center relative z-30 pointer-events-none md:pointer-events-auto">
            
            {/* Title - Smart Dynamic Sizing */}
            <div className="relative select-none group text-center w-full flex justify-center px-4">
              <h1 
                className={`${titleStyle.className} text-white uppercase tracking-tighter mix-blend-exclusion transition-all duration-1200 ease-out`}
                style={{ 
                    fontFamily: "'Anton', sans-serif", 
                    willChange: "transform, opacity",
                    ...titleStyle.style
                }}
              >
                {activeData.title}
              </h1>
            </div>

            {/* Subtitle */}
            <div className="relative mt-6 md:mt-12 w-[80%] md:w-64 text-center text-xs text-gray-300 font-light tracking-wide leading-relaxed font-sans mix-blend-difference">
              <div className="w-8 h-[1px] bg-white mb-3 mx-auto"></div>
              <p>{activeData.subtitle}</p>
            </div>

          </div>

          {/* Content RIGHT: Image */}
          <div className="contentRight  w-full md:w-1/2 h-full flex justify-center items-center relative z-20 pb-16 md:pb-0">
             
             {/* Image Card Container */}
             <div className="relative  w-[70vw] h-[30vh] md:w-[80%] md:h-[50%] lg:w-[450px] lg:h-[280px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] transition-all duration-1200 hover:scale-[1.02] hover:-translate-y-2">
              
              <div className="relative bg-amber-200 w-full h-full overflow-hidden rounded-2xl md:rounded-4xl border border-white/10">
                <img 
                  src={activeData.image} 
                  alt={activeData.title} 
                  className="w-full h-full transform transition-transform duration-1200 hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-white/10 pointer-events-none"></div>
              </div>

              {/* Button */}
              <Link to={activeData.path}>
              <button className="absolute -bottom-5 -right-2 md:-bottom-6 md:-left-6 md:right-auto w-12 h-12 md:w-16 md:h-16 bg-[#0a0a0a]/80 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300 group shadow-lg cursor-pointer z-30">
               <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
               </Link> 
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default List