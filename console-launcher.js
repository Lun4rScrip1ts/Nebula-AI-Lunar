(() => {
  const existing = document.getElementById("nebula-lunar-panel");
  if (existing) { existing.remove(); return; }

  const style = document.createElement("style");
  style.id = "nebula-lunar-panel-style";
  style.textContent = `
    #nebula-lunar-panel{position:fixed;z-index:2147483647;top:90px;left:calc(100vw - 430px);width:410px;height:570px;min-width:320px;min-height:300px;max-width:calc(100vw - 20px);max-height:calc(100vh - 20px);display:flex;flex-direction:column;resize:both;overflow:hidden;background:#0e0d15;color:#f3f1fb;border:1px solid #51466f;border-radius:15px;box-shadow:0 20px 70px #0009;font:13px/1.5 system-ui,-apple-system,Segoe UI,sans-serif}
    #nebula-lunar-panel *{box-sizing:border-box}
    #nebula-lunar-panel button,#nebula-lunar-panel input,#nebula-lunar-panel textarea{font:inherit}
    #nebula-lunar-panel button{cursor:pointer}
    #nebula-lunar-panel .nl-head{height:48px;flex-shrink:0;display:flex;align-items:center;gap:9px;padding:0 11px;background:#171522;border-bottom:1px solid #302b3d;cursor:move;user-select:none}
    #nebula-lunar-panel .nl-mark{width:27px;height:27px;display:grid;place-items:center;border-radius:9px;background:linear-gradient(135deg,#a58aff,#6443c8);font-size:16px}
    #nebula-lunar-panel .nl-brand{font-weight:700;flex:1;font-size:12px}#nebula-lunar-panel .nl-brand span{color:#b9a6ff}
    #nebula-lunar-panel .nl-head button{border:1px solid #3b354b;background:#242033;color:#e9e4ff;border-radius:7px;width:27px;height:27px}
    #nebula-lunar-panel .nl-tabs{display:flex;gap:5px;padding:9px 11px;border-bottom:1px solid #292535}
    #nebula-lunar-panel .nl-tab{background:transparent;border:1px solid transparent;color:#a9a5b9;padding:6px 10px;border-radius:8px;font-size:11px}
    #nebula-lunar-panel .nl-tab.active{background:#8d70ff20;border-color:#8066d455;color:#e1d8ff}
    #nebula-lunar-panel .nl-content{flex:1;min-height:0;display:flex;flex-direction:column}
    #nebula-lunar-panel .nl-chat{padding:12px;overflow:auto;flex:1}
    #nebula-lunar-panel .nl-welcome{padding:14px 4px 18px;text-align:center}
    #nebula-lunar-panel .nl-orbit{font-size:26px;color:#b7a3ff}
    #nebula-lunar-panel h3{font-size:20px;line-height:1.2;margin:6px 0 8px;letter-spacing:-.5px}
    #nebula-lunar-panel .nl-muted{color:#9994ac;font-size:11px}
    #nebula-lunar-panel .nl-bubble{white-space:pre-wrap;overflow-wrap:anywhere;border:1px solid #322d40;background:#191722;border-radius:11px;padding:10px 11px;margin:9px 0;font-size:12px}
    #nebula-lunar-panel .nl-bubble.user{background:#28213b;border-color:#4b3c70}
    #nebula-lunar-panel .nl-composer{padding:10px;border-top:1px solid #302b3d;background:#14121c}
    #nebula-lunar-panel textarea{width:100%;resize:vertical;min-height:74px;max-height:170px;border:1px solid #3b354b;background:#0e0d15;color:#f5f1ff;border-radius:10px;padding:10px;outline:none}
    #nebula-lunar-panel .nl-row{display:flex;gap:7px;align-items:center;margin-top:8px}
    #nebula-lunar-panel .nl-btn{border:1px solid #49405f;background:#272235;color:#eee8ff;border-radius:8px;padding:7px 10px;font-size:11px}
    #nebula-lunar-panel .nl-primary{border-color:#8d75ee;background:linear-gradient(135deg,#9c80ff,#7055d3);color:#fff;font-weight:650}
    #nebula-lunar-panel .nl-status{font-size:10px;color:#9892a9;flex:1}
    #nebula-lunar-panel .nl-repo{display:none;flex:1;min-height:0;flex-direction:column;padding:11px;gap:9px}
    #nebula-lunar-panel .nl-repo input{width:100%;background:#111019;border:1px solid #3b354b;border-radius:8px;color:#f3efff;padding:9px}
    #nebula-lunar-panel .nl-files{overflow:auto;flex:1;border:1px solid #302b3d;border-radius:8px;padding:5px}
    #nebula-lunar-panel .nl-file{display:block;width:100%;text-align:left;border:0;background:transparent;color:#d4cee5;padding:7px;border-radius:6px;overflow-wrap:anywhere;font-size:11px}
    #nebula-lunar-panel .nl-file:hover{background:#8d70ff20}
    #nebula-lunar-panel .nl-preview{max-height:110px;overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;background:#09090e;border:1px solid #302b3d;border-radius:8px;padding:8px;color:#c4bfd4;font:10px/1.5 monospace}
    #nebula-lunar-panel .nl-hidden{display:none!important}
    @media(max-width:500px){#nebula-lunar-panel{left:8px;top:65px;width:calc(100vw - 16px);height:calc(100vh - 80px)}}
  `;
  document.head.appendChild(style);

  const panel = document.createElement("section");
  panel.id = "nebula-lunar-panel";
  panel.innerHTML = `
    <header class="nl-head"><div class="nl-mark">✦</div><div class="nl-brand">Nebula <span>AI</span> <span style="color:#77718b;font-weight:400">/ Lunar</span></div><button class="nl-min" title="Minimize">−</button><button class="nl-close" title="Close">×</button></header>
    <nav class="nl-tabs"><button class="nl-tab active" data-tab="chat">Assistant</button><button class="nl-tab" data-tab="repo">Repository</button></nav>
    <div class="nl-content">
      <div class="nl-chat"><div class="nl-welcome"><div class="nl-orbit">✦</div><h3>What are we working<br>on today?</h3><div class="nl-muted">Write a prompt, or add public GitHub code as context.</div></div><div class="nl-messages"></div></div>
      <div class="nl-composer"><textarea class="nl-prompt" placeholder="Message Nebula…"></textarea><div class="nl-row"><button class="nl-btn nl-add-context">＋ Add repo context</button><span class="nl-status">Opens ChatGPT in a new tab</span><button class="nl-btn nl-primary nl-send">↑ Send</button></div></div>
      <div class="nl-repo"><input class="nl-owner" value="Lun4rScrip1ts/Nebula-AI-Lunar" aria-label="Repository owner and name"><div class="nl-row" style="margin-top:0"><button class="nl-btn nl-primary nl-load">Load public files</button><span class="nl-status nl-repo-status">Public repositories only</span></div><div class="nl-files">Load a repository to see files.</div><pre class="nl-preview">Select a file to preview it.</pre><button class="nl-btn nl-use-file">Add selected file to prompt</button></div>
    </div>`;
  document.documentElement.appendChild(panel);

  const q = selector => panel.querySelector(selector);
  let selectedFile = null;
  let selectedFiles = [];
  const messages = q(".nl-messages");
  const chat = q(".nl-chat");
  const composer = q(".nl-composer");
  const repoView = q(".nl-repo");
  function addMessage(role, text) {
    const bubble = document.createElement("div");
    bubble.className = "nl-bubble " + role;
    bubble.textContent = text;
    messages.appendChild(bubble);
    chat.scrollTop = chat.scrollHeight;
  }
  function tab(name) {
    q(".nl-chat").classList.toggle("nl-hidden", name !== "chat");
    composer.classList.toggle("nl-hidden", name !== "chat");
    repoView.style.display = name === "repo" ? "flex" : "none";
    panel.querySelectorAll(".nl-tab").forEach(b => b.classList.toggle("active", b.dataset.tab === name));
  }
  panel.querySelectorAll(".nl-tab").forEach(b => b.addEventListener("click", () => tab(b.dataset.tab)));
  q(".nl-add-context").addEventListener("click", () => tab("repo"));
  q(".nl-close").addEventListener("click", () => { panel.remove(); style.remove(); });
  q(".nl-min").addEventListener("click", () => {
    const minimized = panel.dataset.minimized === "1";
    panel.dataset.minimized = minimized ? "0" : "1";
    panel.style.height = minimized ? "570px" : "48px";
    panel.querySelector(".nl-tabs").classList.toggle("nl-hidden", !minimized);
    panel.querySelector(".nl-content").classList.toggle("nl-hidden", !minimized);
    panel.style.resize = minimized ? "both" : "none";
  });

  const head = q(".nl-head");
  let drag = null;
  head.addEventListener("pointerdown", e => {
    if (e.target.closest("button")) return;
    const r = panel.getBoundingClientRect();
    drag = {x:e.clientX,y:e.clientY,left:r.left,top:r.top};
    head.setPointerCapture(e.pointerId);
  });
  head.addEventListener("pointermove", e => {
    if (!drag) return;
    panel.style.left = Math.max(0, Math.min(window.innerWidth - 100, drag.left + e.clientX - drag.x)) + "px";
    panel.style.top = Math.max(0, Math.min(window.innerHeight - 45, drag.top + e.clientY - drag.y)) + "px";
  });
  head.addEventListener("pointerup", () => { drag = null; });
  head.addEventListener("pointercancel", () => { drag = null; });

  q(".nl-send").addEventListener("click", () => {
    let prompt = q(".nl-prompt").value.trim();
    if (!prompt) return;
    if (selectedFiles.length) prompt += "\n\nRepository context:\n" + selectedFiles.map(f => "--- " + f.path + " ---\n" + f.content).join("\n\n");
    addMessage("user", prompt);
    const url = "https://chatgpt.com/?q=" + encodeURIComponent(prompt);
    window.open(url, "_blank", "noopener");
    q(".nl-prompt").value = "";
    selectedFiles = [];
    q(".nl-status").textContent = "Prompt opened in ChatGPT";
  });
  q(".nl-prompt").addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); q(".nl-send").click(); }
  });

  async function api(path) {
    const ownerRepo = q(".nl-owner").value.trim().replace(/^https?:\/\/github\.com\//, "").replace(/\/$/, "");
    if (!/^[\w.-]+\/[\w.-]+$/.test(ownerRepo)) throw new Error("Enter owner/repository.");
    const url = "https://api.github.com/repos/" + ownerRepo + "/contents/" + path.split("/").filter(Boolean).map(encodeURIComponent).join("/");
    const response = await fetch(url);
    if (!response.ok) throw new Error("GitHub request failed: " + response.status + ". Public repositories only.");
    return {data: await response.json(), ownerRepo};
  }
  q(".nl-load").addEventListener("click", async () => {
    const files = q(".nl-files");
    files.textContent = "Loading…";
    try {
      const {data, ownerRepo} = await api("");
      files.replaceChildren();
      data.sort((a,b) => a.type === b.type ? a.name.localeCompare(b.name) : a.type === "dir" ? -1 : 1).forEach(file => {
        const btn = document.createElement("button");
        btn.className = "nl-file";
        btn.textContent = (file.type === "dir" ? "▰  " : "▤  ") + file.name;
        btn.addEventListener("click", async () => {
          if (file.type === "dir") {
            q(".nl-owner").dataset.path = file.path;
            q(".nl-load").click();
            return;
          }
          try {
            const response = await fetch("https://raw.githubusercontent.com/" + ownerRepo + "/HEAD/" + file.path.split("/").map(encodeURIComponent).join("/"));
            if (!response.ok) throw new Error("Could not load file.");
            const content = await response.text();
            if (content.length > 80000) throw new Error("File is too large to include.");
            selectedFile = {path:file.path,content};
            q(".nl-preview").textContent = content;
            q(".nl-repo-status").textContent = "Selected " + file.path;
          } catch (error) { q(".nl-preview").textContent = error.message; }
        });
        files.appendChild(btn);
      });
      q(".nl-repo-status").textContent = ownerRepo + " · " + data.length + " entries";
    } catch (error) { files.textContent = error.message; q(".nl-repo-status").textContent = "Could not load"; }
  });
  q(".nl-use-file").addEventListener("click", () => {
    if (!selectedFile) { q(".nl-repo-status").textContent = "Select a file first."; return; }
    if (selectedFiles.length >= 5) { q(".nl-repo-status").textContent = "Up to five files at a time."; return; }
    if (!selectedFiles.some(f => f.path === selectedFile.path)) selectedFiles.push(selectedFile);
    q(".nl-repo-status").textContent = selectedFiles.length + " file(s) added to prompt context";
    tab("chat");
  });
})();