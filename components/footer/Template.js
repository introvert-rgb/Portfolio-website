export default {
    render() {
        return `
        ${this.html()}
        ${this.css()}
        `;
    },
    html() {
        return `
   <div class="footer">
        &#169; Anup Singh 2023
    </div>
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

.footer {
  
    height: 40px;
    position:absolute;
    bottom:0;
    left:10%;
    right:10%;
    text-align:center;
    
   
}

        </style>`
    }
}