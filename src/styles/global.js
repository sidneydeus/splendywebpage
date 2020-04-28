import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;    
  }

  *:focus{
    outline:0;
  }

  html{
    height:100%;  
    background: rgb(24,42,91);
    background: radial-gradient(circle, rgba(24,42,91,0.8743872549019608) 0%, rgba(2,0,36,1) 84%, rgba(1,19,23,1) 100%);
    background-size: contain;
  }


  body{
    -webkit-font-smoothing: antialiased!important;  
    color:#666666;
  }

  body, input, button{
    font: 14px 'Roboto', sans-serif;    
  }

  a{
    text-decoration: none;
  }  

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }
  
  #App {
    font-family: sans-serif;
    height: 100vh;
  }
  
  #page-wrap {   
    text-align: center;
    overflow: auto;
  }
  
  .bm-item {
    display: inline-block;
  
    /* Our sidebar item styling */
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #000;
    font-size: 16px;
    transition: color 0.4s;
  }
  
  .bm-item:hover {
    text-transform: uppercase;
    color: #000;
    font-size: 16px;
  }
  
  
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }
  
  .bm-burger-bars {
    background: #373a47;
  }
  
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  
  .bm-cross {
    background: #bdc3c7;
  }
  
  .bm-menu {
    background: #F2F2F2;
    padding: 2.5em 1.5em 0;
    font-size: 1.35em;
  }
  
  .bm-morph-shape {
    fill: #373a47;
  }
  
  .bm-item-list {
    color: #b8b7ad;
  }
  
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  #background-video{

    height: 100%;
    width: 100%;
    float: left;
    top: 0;
    padding: none;
    }
  
  .bg{
    border-radius:12px;
    background-color:#fff;
  }

  .img-responsive{
    object-fit: scale-down;      
  }

  #sobre{
    text-align:left;
  }

  #contato{
    text-align:left;
  }

  .whattsapp{
    background-color: none!important;
    align-self: center;
    color:#ccc;
    margin-left: 5px;

  }
  .flex{
    display:flex;
  }
  h3.message{
    font-size:18px;
    color:rgb(79, 206, 93);
    font-weight:bold;
    margin:auto;
  }
  `;
