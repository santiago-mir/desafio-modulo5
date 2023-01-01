class CustomStone extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    const imgURL = require("url../../assets/piedra.png");
    const style = document.createElement("style");
    style.innerHTML = `
            .imagen{
              width: 100%;
              height: 100%;
              max-width: 180px;
              max-height: 250px;
              position: relative;
              bottom: -30px;
              
            }
            
            .computer-hand, .user-hand{
              width: 150px;
              height: 320px;
              position:relative;
              transition: all 1s ease;
              
              
            }
            
           .computer-hand{
              rotate: 180deg;
              top: -70px;
              
           }
           .user-hand{
            bottom: -70px;
           }
          
            .active{
              bottom: -110px;
              
            }
            .active:hover{
           
              bottom: -50px;
              transition: bottom 1s ease-out;
            }
            .active:focus{
              bottom: -10px;
            }
            .active:active{
              bottom: -10px;
            }
         
            
            
         
          
        `;

    this.shadow.innerHTML = `
            <img  class="${this.classList}" src=${imgURL}/>
        `;

    this.shadow.appendChild(style);
  }
}
customElements.define("custom-stone", CustomImage);
