const template = document.createElement('template');
template.innerHTML = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Times New Roman', Times, sans-serif;
    height: 100vh;
    width: 100vw;
  }

    .nav_bar  {
    margin-top: 102px;
    margin-left:10px;
    position: fixed;
  }
  
    .nav_bar li {
    list-style: none;
    position: relative;
    width: 100%;
    padding-bottom: 10px;
    padding-right: 10px;
  }
  
    .nav_bar li .nav_bar_label {
    text-decoration: none;
    font-size: 16px;
    color: black;
    display: flex;
    align-items: center;
  }
  
    ul li a {
    font-size: 20px;
    padding: 0 10px;
  }
  
    a {
    text-decoration: none;
    font-size: 16px;
    color: black;
    font-weight: bold;
  }
  
  .nav_bar li a {
    height: 30px;
    border-radius: 0px 35px 35px 0px;
    transition: all 0.7s ease;
    padding-left: 10px;
  }
  
  .nav_bar li a:hover {
    background: #ebebeb;
  }

</style>

<slot name="icon">default icon</slot>
`;

class navBar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open' })
    }

    connectedCallback() {
        console.log('Our element is added to DOM')
        this.shadowRoot.append(template.content.cloneNode(true));
        const Inbox = getAttribute('inbox');
        const Draft = unreadCount('0')

        this.shadowRoot.querySelector('Inbox').innerText = Inbox
        this.shadowRoot.querySelector('0').innerText = Draft
    }

    disconnectedCallback() {
        console.log('Our element is removed from DOM')
    }
}

window.customElements.define('app-sidebar-button', navBar);

const nav_bar1 = document.createElement('app-sidebar-button');