(() => {
  const id = "nebula-lunar-console-overlay";
  const old = document.getElementById(id);
  if (old) { old.remove(); return; }
  const overlay = document.createElement("div");
  overlay.id = id;
  overlay.style.cssText = "position:fixed;inset:0;z-index:2147483647;background:#0b0b10;display:flex;flex-direction:column;font-family:system-ui,sans-serif";
  const bar = document.createElement("div");
  bar.style.cssText = "height:42px;flex:0 0 42px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;background:#12121a;color:#eee;border-bottom:1px solid #292934;box-sizing:border-box";
  const title = document.createElement("strong");
  title.textContent = "✦ Nebula AI — Lunar";
  title.style.cssText = "font-size:13px;letter-spacing:.2px";
  const close = document.createElement("button");
  close.textContent = "Close ×";
  close.style.cssText = "border:1px solid #454052;background:#201d2c;color:#eee;border-radius:8px;padding:6px 12px;cursor:pointer";
  close.addEventListener("click", () => overlay.remove());
  const frame = document.createElement("iframe");
  frame.src = "https://lun4rscrip1ts.github.io/Nebula-AI-Lunar/";
  frame.title = "Nebula AI Lunar workspace";
  frame.style.cssText = "width:100%;height:calc(100% - 42px);border:0;background:#0b0b10;flex:1";
  bar.append(title, close);
  overlay.append(bar, frame);
  document.documentElement.appendChild(overlay);
})();