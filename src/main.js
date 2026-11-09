
import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="app-shell">
    <header class="topbar">
      <div class="logo">PSYCH ENGINE WEB</div>
      <div>Browser Edition</div>
    </header>

    <main class="main-content">
      <section class="menu-panel">
        <h1>Friday Night Funkin'</h1>
        <h2>Psych Engine Web</h2>

        <p>
          A browser-based adaptation of Psych Engine.
        </p>

        <div class="menu-buttons">
          <button class="menu-button" data-action="story">
            Story Mode
          </button>

          <button class="menu-button" data-action="freeplay">
            Freeplay
          </button>

          <button class="menu-button" data-action="mods">
            Mods
          </button>

          <button class="menu-button" data-action="settings">
            Settings
          </button>
        </div>

        <div class="panel">
          <h3 id="panel-title">Engine Status</h3>
          <p id="panel-message" class="status">
            Browser interface loaded successfully.
          </p>
        </div>
      </section>
    </main>

    <footer class="footer">
      Psych Engine Web — Development Build
    </footer>
  </div>
`;

const title = document.querySelector('#panel-title');
const message = document.querySelector('#panel-message');

const actions = {
  story: ['Story Mode', 'Gameplay integration is coming soon.'],
  freeplay: ['Freeplay', 'Song selection is coming soon.'],
  mods: ['Mod Loader', 'ZIP and folder importing is coming soon.'],
  settings: ['Settings', 'Engine settings are coming soon.']
};

document.querySelectorAll('[data-action]').forEach(button => {
  button.addEventListener('click', () => {
    const result = actions[button.dataset.action];

    title.textContent = result[0];
    message.textContent = result[1];
  });
});
