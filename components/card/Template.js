export default {
    render() {
        return ` ${this.css()}${this.html()}
        `;
    },
    html() {
        return ` <div class="card-container">
                <div class=" card card-cover">
                    <div class="card-details">
                        <div class="card-title">The LoopStudios Project</div>
                         <div class="tech">
                            <img src="./icons/html5-svgrepo-com (1).svg" alt="">
                            <img src="./icons/sass-svgrepo-com.svg" alt="">
                            <img src="./icons/javascript-svgrepo-com.svg" alt="">
                        </div>
                        <div class="card-detail">It is a site which talks about future we are sharing because of the steps that humanity has taken. It deals with futuristic gadgets. </div>
                        <div class="visit-btn">
                            <button class="site-btn"><a href="#" target="_blank"class="git-link">Visit</a></button>
                        </div>
                    </div>

                </div>
            </div>
        `
    },
    css() {
        return `
        <style>
        .card-container {
  width: 240px;
  height: 360px;
  margin: 2em;
  overflow: hidden;
  border-radius: 1em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.2);
  
  background-size: cover;
}

.card-container .card-details {
  color: #F6F5F4;
 
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: 1em;
  -webkit-transform: translateY(70%);
          transform: translateY(70%);
  
  padding: 1em;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.03)), color-stop(rgba(0, 0, 0, 0.3)), color-stop(rgba(0, 0, 0, 0.4)), to(rgba(0, 0, 0, 0.5)));
  background: linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6));
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

  .card-container .card-details .card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.8em;
}

 .card-container .card-details .card-detail {
  font-size: 0.9rem;
  padding-bottom: 1em;
}
.card-container .card-details .tech {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top:0.5em;
    margin-bottom: 1em;
}

.card-container .card-details .tech img {
    height: 24px;
    width: 24px;
    margin-right:0.5em;
}


 .card-container .card-details .visit-btn .site-btn {
  background: #F6F5F4;
  border: none;
  font-family: 'Roboto', sans-serif;
  padding: 0.8em 1.6em;
  border-radius: 0.5em;
  -webkit-box-shadow: 10px 10px 40px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 10px 10px 40px 5px rgba(0, 0, 0, 0.2);
}

 .card-container .card-details .visit-btn .site-btn a {
  text-decoration: none;
  color: #5151A4;
  font-weight: 700;
}

 .card-container:hover {
  -webkit-box-shadow: 10px 10px 50px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 10px 10px 50px 5px rgba(0, 0, 0, 0.2);
}

.card-container:hover .card-details {
  -webkit-transform: translateY(0%);
          transform: translateY(0%);
}@media screen and (max-width:766px){
   .card-container {
  width: 200px;
  height: 360px;
  margin: 2em;
  overflow: hidden;
  border-radius: 1em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.2);
  
  background-size: cover;
}
}
        </style>`
    }
}