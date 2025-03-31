import "./style.css"
import Experience from "./experience/Experience"

const experience = new Experience({
    targetElement: document.querySelector<HTMLDivElement>(".experience"),
})

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="projects">
    <div class="header">
      <div class="title">
        <h1>Web Development Projects</h1>
        <p>My current web development portfolio</p>
      </div>
      <div class="close-btn">
        <button><img src="/close.svg" alt="" /></button>
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

        <a href="#" class="card" target="_blank">
          <img src="/imgs/placeholder.svg" class="img" alt="Voting System" />
          <div class="description">
            <h3>Voting System</h3>
            <p>Node.js + MongoDB based voting application</p>
          </div>
        </a>

        <a href="https://infographic-66z2.vercel.app/" class="card" target="_blank">
          <img src="/imgs/placeholder.svg" class="img" alt="Infographic" />
          <div class="description">
            <h3>Infographic Image</h3>
            <p>Interactive data visualization project</p>
          </div>
        </a>

        <a href="https://leetcode.com/u/ayUSHmishra74992/" class="card" target="_blank">
          <img src="/imgs/placeholder.svg" class="img" alt="LeetCode" />
          <div class="description">
            <h3>LeetCode Profile</h3>
            <p>My coding journey and solutions</p>
          </div>
        </a>

        <a href="https://drive.google.com/drive/u/3/folders/1JlzgQ9Z3cyaBMdsVsOHGj0VrxFw7Fiag" class="card" target="_blank">
          <img src="/imgs/more-projects.jpg" class="img" alt="" />
          <div class="description">
            <h3>More Projects</h3>
            <p>Additional portfolio projects on Google Drive</p>
          </div>
        </a>
      </div>
    </div>

    <footer>
      <div class="contact">
        <a href="https://leetcode.com/u/ayUSHmishra74992/" target="_blank" class="leetcode-button"></a>
        <a href="https://github.com/ayUSHmishra74992" target="_blank" class="github-button"></a>
      </div>
      <span>© Designed & Coded by Ayush Mishra</span>
    </footer>
  </div>

  <div class="prev-projects">
    <div class="header">
      <div class="title">
        <h1>Figma Projects</h1>
        <p>My UI/UX design portfolio</p>
      </div>
      <div class="prev-close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">
        <a href="https://www.figma.com/proto/JXTxx8ixKXD6DMLj9Hzdkf/Online-Shopping-Mobile-App-(Community)?node-id=1-3&starting-point-node-id=1%3A3&t=VDxbkW6HgtHQRiYE-1" class="card" target="_blank">
          <img src="/imgs/shopping-app.jpg" class="img" alt="" />
          <div class="description">
            <h3>Online Shopping App</h3>
            <p>Mobile app design for e-commerce</p>
          </div>
        </a>

        <a href="https://www.figma.com/proto/vAAfcANBdtIjrOqMQAl1No/Login-%26-Register-App-UI-Kit-(Community)?node-id=2-126&t=o5cz42WkV0Y6mq6F-1" class="card" target="_blank">
          <img src="/imgs/groceries-app.jpg" class="img" alt="" />
          <div class="description">
            <h3>Groceries App</h3>
            <p>Login & Register UI Kit design</p>
          </div>
        </a>

        <a href="https://www.figma.com/design/lg5x10Q31LK0MrBDUpipb9/WebTree-%3CAyush%3E?node-id=0-1&t=BGTb5tihc6C1ZhcS-1" class="card" target="_blank">
          <img src="/imgs/chess-app.jpg" class="img" alt="" />
          <div class="description">
            <h3>Chess App</h3>
            <p>Web-based chess game interface</p>
          </div>
        </a>

        <a href="https://leetcode.com/u/ayUSHmishra74992/" class="card" target="_blank">
          <img src="/imgs/leetcode.jpg" class="img" alt="" />
          <div class="description">
            <h3>LeetCode Profile</h3>
            <p>My coding journey and solutions</p>
          </div>
        </a>

        <a href="https://drive.google.com/drive/u/3/folders/1JlzgQ9Z3cyaBMdsVsOHGj0VrxFw7Fiag" class="card" target="_blank">
          <img src="/imgs/more-projects.jpg" class="img" alt="" />
          <div class="description">
            <h3>More Projects</h3>
            <p>Additional portfolio projects on Google Drive</p>
          </div>
        </a>
      </div>
    </div>

    <footer>
      <div class="contact">
        <a href="https://leetcode.com/u/ayUSHmishra74992/" target="_blank" class="leetcode-button"></a>
        <a href="https://github.com/ayUSHmishra74992" target="_blank" class="github-button"></a>
      </div>
      <span>© Designed & Coded by Ayush Mishra</span>
    </footer>
  </div>
`

export { experience }
