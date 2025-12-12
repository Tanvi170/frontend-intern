import { useState, useEffect } from "react";

interface Question {
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
  },
  {
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
  },
  {
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
  },
  {
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
  },
];
const correctAnswers = ["Meow-Meow", "Ice Cream", "Yellow", "Infinite"];


const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
    const scorePercentage = Math.round(
  (answers.filter((ans, i) => ans === correctAnswers[i]).length / questions.length) * 100
);

  const restartQuiz = () => {
    setAnswers([]);
    setCurrent(0);
    setShowResult(false);
  };


  const handleSubmit = () => {
    setShowResult(true);
  };


  const handleOptionClick = (option: string) => {
    const next = [...answers];
    next[current] = option;
    setAnswers(next);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const prevQuestion = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const progress = ((current + 1) / questions.length) * 100;
  const [animatedScore, setAnimatedScore] = useState(0);

useEffect(() => {
  if (showResult) {
    const correctCount = answers.filter((ans, i) => ans === correctAnswers[i]).length;
    const end = Math.round((correctCount / questions.length) * 100);

    if (end === 0) {
      setAnimatedScore(0);
      return;
    }

    let start = 0;
    const duration = 1200; // 1.2 sec animation
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const counter = setInterval(() => {
      start += 1;
      setAnimatedScore(start);
      if (start >= end) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }
}, [showResult]);



if (showResult) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#F4FDFF]">

      {/* Keep Learning */}
      <button
        className="
          px-6 py-2
          rounded-[10px]
          bg-white
          shadow
          text-[#15313D]
          font-medium
        "
      >
        Keep Learning!
      </button>

      {/* Final Score Text */}
      <h1
        className="
          mt-6
          text-[42px]
          italic
          font-[800]
          text-[#15313D]
          tracking-[-2px]
          font-['DM_Serif_Display',serif]
        "
      >
        Your Final score is
      </h1>

      {/* ⭐ Animated Score Number ⭐ */}
      <div
        className="
          mt-4
          text-[120px]
          italic
          font-[800]
          text-[#15313D]
          font-['DM_Serif_Display',serif]
          transition-all duration-300
        "
      >
        {String(animatedScore).padStart(2, "0")}%
      </div>

      {/* Start Again */}
      <button
        onClick={restartQuiz}
        className="
          mt-6
          px-6 py-2
          rounded-[10px]
          bg-[#CDEEFF]
          text-[#15313D]
          font-medium
          shadow
          hover:bg-[#B8E6FF]
        "
      >
        Start Again
      </button>
    </div>
  );
}


  return (
    <div
      className="
        w-screen h-screen flex items-center justify-center

        bg-[radial-gradient(circle_at_top_left,#BECFEE_0%,#71C6E2_25%,#D9F4FA_60%,#BECFEE_100%)]
        overflow-hidden
      "
    >
      {/* MAIN CONTENT CARD (outer) */}
 <div
  className="
    absolute
    left-0 top-0
    w-[1920px] h-[1080px]
    overflow-hidden
    bg-[linear-gradient(107.96deg,#BECFEE_0%,#71C6E2_50%,#D9F4FA_75%,#BECFEE_100%)]
    backdrop-blur-[100px]
  "
>

        {/* INNER QUIZ RECTANGLE – Figma: 1542×856, top 112, left 189, radius 42, #F4FDFF */}
        {/* INNER QUIZ RECTANGLE – centered */}
<div
  className="
    absolute left-[calc(50%-1625px/2+0.5px)] top-[calc(50%-920px/2)]
    w-[1625px] h-[920px] p-[20px]
    rounded-[40px]
    border-[20px] border-[#C4E6FF]
    bg-[#F4FDFF]
    shadow-[0_0_25px_rgba(0,114,255,0.15)_inset]
  "
>
  
{/* PAW GIF (INSIDE THE QUIZ BOX NOW) */}
<img
  src="/paw.gif"
  alt="paw"
  className="absolute"
  style={{
    width: "165px",
    height: "165px",
    left: "100px",    // aligned inside
    bottom: "10px",  // sits on bottom-left corner
    objectFit: "contain",
  }}
/>

{/* SPEECH BUBBLE */}
<div
  className="absolute bg-white text-[#15313D] shadow-md"
  style={{
    left: "-100px",
    bottom: "160px",
    padding: "16px 26px",
    borderRadius: "22px",
    fontFamily: "'Caveat Brush', cursive",
    fontSize: "32px",
    letterSpacing: "-0.8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    /* NEW → Blue Outline */
    border: "4px solid #7CC9F5",
  }}
>
  Best of Luck!

  {/* Tail */}
  <div
  style={{
    position: "absolute",
    bottom: "-12px",
    left: "160px",
    width: 0,
    height: 0,

    /* Make the tail white fill */
    borderLeft: "14px solid transparent",
    borderRight: "14px solid transparent",
    borderTop: "14px solid white",

    /* NEW → Blue Outline */
    filter: "drop-shadow(0px 0px 0px #7CC9F5)",

    /* OR alternative: border stroke like Figma */
    // borderTop: "14px solid white",
    // borderLeft: "4px solid #7CC9F5",
    // borderRight: "4px solid #7CC9F5",
  }}
></div>

</div>


          {/* TITLE – still using your earlier Figma values */}
          <h1
  className="
    absolute
    top-[94px] left-1/2 -translate-x-1/2
    w-full text-center

    font-['DM_Serif_Display',serif]
    italic font-[400]

    text-[90px]
    leading-[95px]
    tracking-[-4px]

    bg-[linear-gradient(90deg,#15313D_0%,#3CABDA_100%)]
    bg-clip-text text-transparent
  "
>
  Test Your Knowledge
</h1>


          {/* Subtitle (approx; replace with exact top/left when you have them) */}
    <div
  className="
    absolute
    top-[190px]  /* moved a bit higher than before */
    left-1/2 -translate-x-1/2
    w-[422px] h-[45px]
    bg-white
    rounded-[8px]
    flex items-center justify-center
  "
>
  <p
    className="
      text-center           /* text-align: center */
      font-manrope           /* font-family: Manrope */
      font-medium            /* font-weight 500 (Medium) */
      text-[20px]            /* font-size 20px */
      leading-[24px]         /* line-height 24px */
      tracking-[-0.31px]     /* letter-spacing -0.31px */
      text-[#15313D]         /* text color */
    "
  >
    Answer all questions to see your results
  </p>
</div>


         <div
  className="
    absolute
    top-[270px] left-[360px]
    w-[825px]
    flex items-center justify-between
  "
>
  {questions.map((_, index) => (
    <div
      key={index}
      className={`
        h-[6px]
        rounded-full
        transition-all duration-300
        ${index <= current ? "bg-[#0F2D3F]" : "bg-[#E6EEF4]"}
      `}
      style={{ width: "22%" }} /* 4 bars evenly spaced */
    />
  ))}
</div>


          {/* QUESTION BOX */}
<div
  className="
    absolute
    top-[340px] left-[360px]
    w-[896px] h-[78px]
    flex items-center justify-center
    bg-gradient-to-r from-[#C6E9F7] to-[#E5F8FF]
    border border-[#96E5FF]
    rounded-[10px]
    px-[24px] py-[24px]
  "
>
  <h2
    className="
      text-center
      font-inter font-semibold
      text-[22px] leading-[24px]
      tracking-[-0.31px]
      text-[#15313D]
    "
  >
    {current + 1}. {questions[current].question}
  </h2>
</div>

{/* OPTIONS */}
<div
  className="
    absolute
    top-[435px] left-[360px]
    w-[896px] flex flex-col gap-[12px]
  "
>
  {questions[current].options.map((option) => {
  const selected = answers[current] === option;
  return (
    <button
      key={option}
      type="button"
      onClick={() => handleOptionClick(option)}
      className={[
        "h-[78px] w-full flex items-center justify-center rounded-[10px] border px-[24px] text-[22px] leading-[24px] font-inter font-semibold tracking-[-0.31px] transition-all",
        selected
          ? "bg-[#C6E9F7] border-[#96E5FF] text-[#15313D]" // <-- lighter selected color like question box
          : "bg-gradient-to-r from-[#C6E9F7]/10 to-[#E5F8FF]/10 border-[#96E5FF]/50 text-[#15313D] hover:bg-[#E4F2FF]/20",
      ].join(" ")}
    >
      {option}
    </button>
  );
})}

</div>


<div
  className="
    absolute
    bottom-[60px]
    right-[360px]
    flex items-center gap-[16px]
  "
>
  {/* PREV BUTTON */}
  <button
    type="button"
    onClick={prevQuestion}
    disabled={current === 0}
    className="
      flex items-center justify-center
      w-[50px] h-[50px]
      rounded-[12px]
      border border-[#CBD5E1]
      bg-gradient-to-r from-[#C6E9F7] to-[#E5F8FF]
      disabled:opacity-40
      hover:from-[#BFE7F4] hover:to-[#DFF8FF]
      transition-all
    "
  >
    {/* Left straight arrow */}
   <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#4A5C73"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  opacity="1"
>
  <line x1="4" y1="12" x2="20" y2="12" /> {/* horizontal line */}
  <polyline points="10 6 4 12 10 18" />     {/* arrowhead pointing left */}
</svg>
</button>

  {/* NEXT BUTTON */}
  {current < questions.length - 1 && (
    <button
      type="button"
      onClick={nextQuestion}
      className="
        flex items-center justify-center
        w-[50px] h-[50px]
        rounded-[12px]
        bg-gradient-to-r from-[#C6E9F7] to-[#E5F8FF]
        shadow-[0_10px_20px_rgba(28,144,243,0.45)]
        hover:from-[#BFE7F4] hover:to-[#DFF8FF]
        transition-all
      "
    >
      {/* Right straight arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1C90F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="1"
      >
        <line x1="4" y1="12" x2="20" y2="12" /> {/* horizontal line */}
        <polyline points="14 6 20 12 14 18" />   {/* arrowhead */}
      </svg>
    </button>
  )}


{current === questions.length - 1 && (
  <button
    type="button"
    onClick={handleSubmit}
    className="
      h-[45px] px-[32px] rounded-[12px]
      text-[#15313D] text-[16px] font-medium
      shadow-[0_10px_25px_rgba(28,144,243,0.20)]
      hover:opacity-90
    "
    style={{
      background: "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)"
    }}
  >
    Submit
  </button>
)}

</div>



        </div>
      </div>
    </div>
  );
};

export default Quiz;