import { useEffect } from "react";

export function useSkillBars() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const fill = entry.target.querySelector(".skill-bar-fill");
          const width = fill?.dataset.width;

          if (fill && width) {
            setTimeout(() => {
              fill.style.width = `${width}%`;
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".skill-card").forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
}
