import { useState, useEffect } from "react";

function HeroName() {
  const greeting  = "Hi, I'm";
  const firstName = "Azad";
  const lastName  = "Hossain";

  const [greetDone,    setGreetDone]    = useState(false);
  const [firstDone,    setFirstDone]    = useState(false);
  const [greetCount,   setGreetCount]   = useState(0);
  const [firstCount,   setFirstCount]   = useState(0);
  const [lastCount,    setLastCount]    = useState(0);
  const [cursorVisible,setCursorVisible]= useState(true);

  const reset = () => {
    setGreetDone(false); setFirstDone(false);
    setGreetCount(0);    setFirstCount(0); setLastCount(0);
  };

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  // Type greeting
  useEffect(() => {
    if (greetCount < greeting.length) {
      const t = setTimeout(() => setGreetCount((c) => c + 1), 70);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setGreetDone(true), 200);
      return () => clearTimeout(t);
    }
  }, [greetCount]);

  // Type firstName
  useEffect(() => {
    if (!greetDone) return;
    if (firstCount < firstName.length) {
      const t = setTimeout(() => setFirstCount((c) => c + 1), 90);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setFirstDone(true), 150);
      return () => clearTimeout(t);
    }
  }, [greetDone, firstCount]);

  // Type lastName
  useEffect(() => {
    if (!firstDone) return;
    if (lastCount < lastName.length) {
      const t = setTimeout(() => setLastCount((c) => c + 1), 90);
      return () => clearTimeout(t);
    }
  }, [firstDone, lastCount]);

  // Loop restart
  const allDone = lastCount === lastName.length;
  useEffect(() => {
    if (!allDone) return;
    const t = setTimeout(() => reset(), 2000);
    return () => clearTimeout(t);
  }, [allDone]);

  return (
    <h1 style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1, marginBottom: "2rem" }}>

      {/* "Hi, I'm" */}
      <div className="text-2xl md:text-3xl font-light tracking-widest mb-3"
        style={{ color: "rgba(255,255,255,.35)", minHeight: "2rem" }}>
        {greeting.slice(0, greetCount)}
        {!greetDone && (
          <span style={{ opacity: cursorVisible ? 1 : 0, color: "#c8a97e", transition: "opacity .1s" }}>|</span>
        )}
      </div>

      {/* "Azad" */}
      <div className="text-6xl md:text-7xl xl:text-8xl font-light tracking-tight mb-1 overflow-hidden"
        style={{ color: "rgba(255,255,255,.15)" }}>
        {firstName.split("").map((ch, i) => (
          <span key={i} style={{
            display: "inline-block",
            opacity: i < firstCount ? 1 : 0,
            transform: i < firstCount ? "translateY(0)" : "translateY(40px)",
            transition: `opacity 0.4s ease ${i * 40}ms, transform 0.5s ease ${i * 40}ms`,
          }}>{ch}</span>
        ))}
      </div>

      {/* "Hossain" */}
      <div className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight" style={{ minHeight: "5rem" }}>
        {lastName.split("").map((ch, i) => (
          <span key={i} className={i < lastCount ? "gold-shimmer" : ""}
            style={{
              display: "inline-block",
              fontFamily: "'Cormorant Garamond', serif",
              opacity: i < lastCount ? 1 : 0,
              transform: i < lastCount ? "translateY(0) scale(1)" : "translateY(50px) scale(.8)",
              transition: `opacity 0.5s ease ${i * 50}ms, transform 0.6s cubic-bezier(.34,1.56,.64,1) ${i * 50}ms`,
              WebkitTextFillColor: i < lastCount ? undefined : "rgba(200,169,126,.08)",
            }}>{ch}</span>
        ))}
        {!allDone && firstDone && (
          <span style={{ opacity: cursorVisible ? 1 : 0, color: "#c8a97e", transition: "opacity .1s", fontSize: "0.8em" }}>|</span>
        )}
      </div>
    </h1>
  );
}

export default HeroName;
