import "./style.css"
import Experience from "./experience/Experience"

const experience = new Experience({
    targetElement: document.querySelector<HTMLDivElement>(".experience"),
})

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="projects">

    <div class="header">
      <div class="title">
        <h1>Current Projects</h1>
        <p>My present as a programmer</p>
      </div>
      <div class="close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">

        <div class="projects-container">
    <h2>Web Development Projects</h2>

    <a href="https://techweb2.vercel.app/" class="card" target="_blank">
        <img src="https://i.ibb.co/9k7vsLdG/Screenshot-2025-03-22-215134.png" class="img" alt="Futuristic Tech Website" />
        <div class="description">
            <h3>Futuristic Tech Website with Chatbot</h3>
            <p>Modern AI-driven website with an interactive chatbot</p>
        </div>
    </a>

    <a href="https://ayush-bjhc.vercel.app/" class="card" target="_blank">
        <img src="https://i.ibb.co/n2FHTDg/Screenshot-2025-03-29-213653.png" class="img" alt="Online Learning Platform" />
        <div class="description">
            <h3>Online Learning Platform</h3>
            <p>Interactive e-learning platform with courses and quizzes</p>
        </div>
    </a>

    

    <a href="https://drive.google.com/drive/u/3/folders/1JlzgQ9Z3cyaBMdsVsOHGj0VrxFw7Fiag" class="card" target="_blank">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230803111937/Online-Voting-System.webp" class="img" alt="Voting System" />
        <div class="description">
            <h3>Node.js + MongoDB (Voting System)</h3>
            <p>Online voting system using Node.js and MongoDB</p>
        </div>
    </a>

    <a href="https://infographic-66z2.vercel.app/" class="card" target="_blank">
        <img src="https://i.ibb.co/nq30MsDW/Screenshot-2025-03-29-213511.png" class="img" alt="Infographic Image" />
        <div class="description">
            <h3>Infographic Image</h3>
            <p>Beautiful infographic designs showcasing data visually</p>
        </div>
    </a>

    <a href="https://leetcode.com/u/ayUSHmishra74992/" class="card" target="_blank">
        <img src="https://i.ibb.co/jPj7szRy/Screenshot-2025-03-30-220927.png" class="img" alt="LeetCode Profile" />
        <div class="description">
            <h3>LeetCode Profile</h3>
            <p>Check out my coding journey and problem-solving skills</p>
        </div>
    </a>

    <a href="https://drive.google.com/drive/u/3/folders/1JlzgQ9Z3cyaBMdsVsOHGj0VrxFw7Fiag" class="card" target="_blank">
        <img src="https://static.toiimg.com/thumb/msid-105546012,width-1280,height-720,resizemode-4/105546012.jpg" class="img" alt="More Projects" />
        <div class="description">
            <h3>More Projects (Google Drive)</h3>
            <p>Explore additional projects stored in Google Drive</p>
        </div>
    </a>
</div>

        
      </div>
    </div>

    <footer>
      <div class="contact">
        <a
          href="../img/Projects/QR Code.jpg"
          target="_blank"
          class="wechat-button"
        ></a>
        <a
          href="https://www.linkedin.com/in/glintonliao"
          target="_blank"
          class="linkedin-button"
        ></a>
        <a
          href="https://github.com/GlintonLiao"
          target="_blank"
          class="github-button"
        ></a>
      </div>

      <span> © Designed & Coded by Guotong Liao </span>
    </footer>
  </div>

  <div class="prev-projects">

    <div class="header">
      <div class="title">
        <h1>Figma Projects</h1>
        <p>UI/UX</p>
      </div>
      <div class="prev-close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">

      <div class="projects-container">
    <h2>Figma Project</h2>

    

    <a href="https://www.figma.com/proto/JXTxx8ixKXD6DMLj9Hzdkf/Online-Shopping-Mobile-App-(Community)?node-id=1-3&starting-point-node-id=1%3A3&t=VDxbkW6HgtHQRiYE-1" class="card" target="_blank">
        <img src="https://i.ibb.co/0Rnf1x9M/Screenshot-2025-03-30-220738.png" class="img" alt="Online Shopping App" />
        <div class="description">
            <h3>Online Shopping App</h3>
            <p>Maximize the value of idle parking space</p>
        </div>
    </a>

    <a href="https://www.figma.com/proto/vAAfcANBdtIjrOqMQAl1No/Login-%26-Register-App-UI-Kit-(Community)?node-id=2-126&t=o5cz42WkV0Y6mq6F-1" class="card" target="_blank">
        <img src="https://i.ibb.co/gLjwp4sd/Screenshot-2025-03-30-220838.png" class="img" alt="Groceries App" />
        <div class="description">
            <h3>Groceries App</h3>
            <p>Simple and intuitive UI for online grocery shopping</p>
        </div>
    </a>

    <a href="https://www.figma.com/design/lg5x10Q31LK0MrBDUpipb9/WebTree-%3CAyush%3E?node-id=0-1&t=BGTb5tihc6C1ZhcS-1" class="card" target="_blank">
        <img src="https://i.ibb.co/WvYJkY5p/Screenshot-2025-03-30-220936.png" class="img" alt="Chess App" />
        <div class="description">
            <h3>Chess App</h3>
            <p>Elegant UI/UX for an interactive chess-playing experience</p>
        </div>
    </a>

    <a href="https://leetcode.com/u/ayUSHmishra74992/" class="card" target="_blank">
        <img src="https://i.ibb.co/jPj7szRy/Screenshot-2025-03-30-220927.png" class="img" alt="LeetCode Profile" />
        <div class="description">
            <h3>LeetCode Profile</h3>
            <p>Check out my coding journey and problem-solving skills</p>
        </div>
    </a>

    <a href="https://drive.google.com/drive/u/3/folders/1JlzgQ9Z3cyaBMdsVsOHGj0VrxFw7Fiag" class="card" target="_blank">
        <img src="https://static.toiimg.com/thumb/msid-105546012,width-1280,height-720,resizemode-4/105546012.jpg" class="img" alt="More Projects" />
        <div class="description">
            <h3>More Projects</h3>
            <p>Explore additional projects stored in Google Drive</p>
        </div>
    </a>
</div>




    <footer>
      <div class="contact">
        <a
          href="https://www.linkedin.com/in/ayushmishra74/"
          target="_blank"
          class="linkedin-button"
        ></a>
        <a
          href="https://github.com/Ayushm74"
          target="_blank"
          class="github-button"
        ></a>
      </div>

      <span> © Designed & Coded by Ayush Mishra </span>
    </footer>

  </div>
`

export { experience }
