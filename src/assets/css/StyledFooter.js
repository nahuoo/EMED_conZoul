import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: grey;
  padding: 7.5vh 0;
  color: #f2f2f2;

  ul {
    height: 18vh;
  }
  
  ul li{
    padding: 0 0 0.5rem;
    margin:0 0 0.5rem;
    font-weight: bold;
    font-size: 9.5px;
    font-family: 'Merriweather Sans', sans-serif;
    letter-spacing: 0.5pt;
    
  }
  ul li a {
    color: inherit;
    text-decoration: none;
      
  }
  ul li a:hover {
    color: #b30000;
  }
  .copyright {
    font-size: 8px;
    position: absolute;
    bottom: 20%;
  }
  .icon {
    display: none;
  }
  .direction {
    line-height: 1.5; 
  }

  @media (min-width: 650px) {
    padding: 10vh;

    ul{
      padding: 5px
    }
    ul li{
      font-size: 10px;
      letter-spacing: 1pt;
    }
    .copyright{
      font-size: 9px;
      bottom: 5px;
      letter-spacing: 0.5pt;
    }
    .icon{
      display: initial;
    }
  }

  @media (min-width: 1000px) {
    padding: 5vh;

    ul li{
      font-size: 15px;
      letter-spacing: 1.5pt;
      margin-bottom: 1em;
    }
    .copyright {
      font-size: 12px;
      bottom: 5%;
      letter-spacing: 1.5pt;
    }

  }
 
`

export default StyledFooter