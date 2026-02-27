document.getElementById("year").textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
  const frame = document.getElementById("playerFrame");
  const chips = document.querySelectorAll(".links-row .link-chip");

  if (!frame || chips.length === 0) return;

  function setActiveChip(activeBtn) {
    chips.forEach((btn) => {
      const isActive = btn === activeBtn;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function swapEmbed(btn) {
    const src = btn.dataset.embed;
    const height = btn.dataset.height || "152";

    // Update iframe
    frame.src = src;
    frame.height = height;

    setActiveChip(btn);
  }

  chips.forEach((btn) => {
    btn.addEventListener("click", () => swapEmbed(btn));
  });
});