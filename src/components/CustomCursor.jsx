import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (dot.current)  { dot.current.style.left  = e.clientX + "px"; dot.current.style.top  = e.clientY + "px"; }
      if (ring.current) { ring.current.style.left = e.clientX + "px"; ring.current.style.top = e.clientY + "px"; }
    };
    const onEnter = () => { if (ring.current) ring.current.style.transform = "translate(-50%,-50%) scale(1.6)"; };
    const onLeave = () => { if (ring.current) ring.current.style.transform = "translate(-50%,-50%) scale(1)"; };

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [role=button]").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
