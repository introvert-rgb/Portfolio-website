export default {
    render() {
        return `
        ${this.html()}
        ${this.css()}
        `;
    },
    html() {
        return `
    <nav class="vertical-bar">
        <div class="logo">
            <img class="visible" src="./img/LOGO A.png" alt="">
            <img class="hidden" src="./img/LOGO A col.png" alt="logo coloured">
        </div>
        <ul class="menu-links">
            <li class="menu-link"><a href="index.html" target="_blank" rel="noopener noreferrer">Home</a></li>
            <li class="menu-link">
                <a href="projects.html" target="_blank" rel="noopener noreferrer">Projects</a></li>
            <li class="menu-link">
                <a href="about.html" target="_blank" rel="noopener noreferrer">About</a></li>
        </ul>
        <ul class="social-media-links">
            <li class="sm-link"><a href="#" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            <li class="sm-link">
                <a href="#" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
            <li class="sm-link">
                <a href="#" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
            <li class="sm-link">
                <a href="#" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a></li>
        </ul>

    </nav>
        `;
    },
    css() {
        return `
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  background-color: #F6F5F4;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

.vertical-bar {
  padding: 2em;
  position: fixed;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100px;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.vertical-bar .logo {
  position: relative;
  cursor: pointer;
}

.vertical-bar .logo .hidden {
  -webkit-transform: scale(0);
          transform: scale(0);
  position: absolute;
  left: 0;
  -webkit-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;
}

.vertical-bar .logo .visible {
  -webkit-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;
}

.vertical-bar .logo:hover .hidden {
  -webkit-transform: scale(1);
          transform: scale(1);
}

.vertical-bar .logo:hover .visible {
  -webkit-transform: scale(0);
          transform: scale(0);
}

.vertical-bar ul li {
  list-style: none;
}

.vertical-bar ul li a {
  text-decoration: none;
  color: #151712;
}

.vertical-bar .menu-links {
  -webkit-writing-mode: vertical-rl;
      -ms-writing-mode: tb-rl;
          writing-mode: vertical-rl;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 40%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-transform: rotate(-180deg);
          transform: rotate(-180deg);
}

.vertical-bar .menu-links .menu-link {
  position: relative;
  outline:none;
}

.vertical-bar .menu-links .menu-link::after {
  content: '';
  position: absolute;
  left: -4px;
  top: 0;
  -webkit-transform-origin: top;
          transform-origin: top;
  height: 100%;
  -webkit-transform: scale(0);
          transform: scale(0);
  width: 2px;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1.2);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1.2);
  background-color: #5151A4;
}

.vertical-bar .menu-links .menu-link:hover::after {
  -webkit-transform-origin: top;
          transform-origin: top;
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1.2);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1.2);
}

.vertical-bar .social-media-links li {
 
  padding: 0.5em;
  border-radius: 0.5em;
}

.vertical-bar .social-media-links li:hover {
  -webkit-box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);
}

.main-container {
  max-width: 1340px;
  width: 90%;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.main-container .column-one {
  width: 80%;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: 0em 4em;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.main-container .column-one p {
  font-size: 2rem;
}

.main-container .column-one .name-text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.main-container .column-one .name-text .overflow {
  height: 100px;
  overflow: hidden;
}

.main-container .column-one .name-text p {
  font-size: 4.5rem;
  font-weight: 700;
}

.main-container .column-one .name-text:hover .first-name {
  display: block;
}

.main-container .column-two {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
}

.main-container .column-two img {
  height: 90vh;
  margin: auto 0;
}

@-webkit-keyframes animate {
  0% {
    margin-top: -180px;
  }
  5% {
    margin-top: -90px;
  }
  50% {
    margin-top: -90px;
  }
  55% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -180px;
  }
}

@keyframes animate {
  0% {
    margin-top: -180px;
  }
  5% {
    margin-top: -90px;
  }
  50% {
    margin-top: -90px;
  }
  55% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -180px;
  }
}

.animated {
  -webkit-animation: animate 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
          animation: animate 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}
@media screen and (max-width:766px){
  .vertical-bar {
    padding: 2em 0em;
  }
}

        </style>`
    }
}