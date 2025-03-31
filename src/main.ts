import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="projects">
    <div class="header">
      <div class="title">
        <h1>Web Development Projects</h1>
        <p>My current web development portfolio</p>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">
        <a href="https://techweb2.vercel.app/" class="card" target="_blank">
          <img src="/imgs/placeholder.svg" class="img" alt="FutureBytes" />
          <div class="description">
            <h3>FutureBytes</h3>
            <p>18-21 MARCH - Join us for an electrifying journey where technology meets creativity</p>
          </div>
        </a>

        <a href="https://ayush-bjhc.vercel.app/" class="card kite-learn" target="_blank">
          <img src="/imgs/placeholder.svg" class="img" alt="Kite Learn" />
          <div class="description">
            <h3>Kite Learn - Soar Higher</h3>
            <p>Elevate your learning journey with expert-led courses across multiple domains</p>
          </div>
        </a>
      </div>
    </div>
  </div>
` 