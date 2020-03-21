import styled from 'styled-components'



var colorPrincipal = '#1247dacc' // Azul

 //  Input, Select, Textarea

const Button = styled.button ` 
 font: Arial, sans-serif
    `;

 
const Titulo = styled.h1 `
    font-weight: 400;
    font-size: 3.5em;
    line-height: 1.15;
    margin-bottom: 15px * 2
    `;

const A = styled.a `
    color: ${colorPrincipal};
    &:hover
    &:focus{
    color: ${colorPrincipal};
     `;
    
const H2 = styled.h2 `
    font-size: 2.5em;
    margin-bottom: 15px * 2;
    `;


const IndexPage = styled.component `
        height: 125vh;
        position: absolute;
        top: 100vh;
        margin-top: -60px;
        padding: 0 15px;
        width: 100%;
        color: rgba(255,255,255,.5);

        @media only screen and (min-height: 950px) {
            .index-page
              margin-top: -330px;
     ` ;

const Collapse = styled.component `
@media screen and (max-width: 991px){
    .sidebar-collapse{
        @include navbar-collapse();

        &.menu-on-left{
            .navbar-collapse{
                right: auto;
                left: 0;
                @include transform-translate-x(-300px);

            
    @include transform-translate-x(0px);}
    position: fixed;
    display: block ;
    top: 0;
    height: 100% ;
    width: 300px;
    right: 0;
    z-index: 1032;
    visibility: visible;
    background-color: #999;
    overflow-y: visible;
    border-top: none;
    text-align: left;
    max-height: none !important;
    -webkit-transform: translate3d(300px, 0, 0);
    -moz-transform: translate3d(300px, 0, 0);
    -o-transform: translate3d(300px, 0, 0);
    -ms-transform: translate3d(300px, 0, 0);
    -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    -moz-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    -o-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    -ms-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1); }
                    

`;

const Main = styled.component `
    position: relative;
    background: #FFFFFF;
    `;


const Carousel = styled.component `

box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);
border-radius: 0.1875rem;
max-width: 650px;
margin: 60px auto;
display: block;

`;

const Footer = styled.footer `
padding: 24px 0;
background-color: #f2f2f2;
`;
const Section = styled.component `
    padding: 70px 0;
    position: relative;
    background: white;
    `;
const Modal = styled.component  `

border-radius: 0.1875rem;
border: none;
box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.5);
border-bottom: none;
    padding-top:    24px;
    padding-right:  24px;
    padding-bottom: 0;
    padding-left:   24px;
`;

const ModalHeader = styled.component  `

    border-bottom: none;
    padding-top:    24px;
    padding-right:  24px;
    padding-bottom: 0;
    padding-left:   24px;

    `;

const Container = styled.component `

    height: 100%;
    z-index: 1;
    text-align: center;
    position: relative;
    
 `;


 /*
h3, .h3{
    font-size: $font-size-h3;
    margin-bottom: $margin-base-vertical * 2;
    line-height: 1.4em;
}
h4, .h4{
    font-size: $font-size-h4;
    line-height: 1.45em;
    margin-top: $margin-base-vertical * 2;
    margin-bottom: $margin-base-vertical;

    & + .category,
    &.title + .category{
        margin-top: -5px;
    }
}
h5, .h5 {
    font-size: $font-size-h5;
    line-height: 1.4em;
    margin-bottom: 15px;

    &.category{
        font-weight: 400;
    }
}
h6, .h6{
    font-size: $font-size-h6;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
}
p{
    line-height: 1.61em;
    font-weight: 300;
    font-size: 1.2em;
}

.title{
    font-weight: $font-weight-bold;
    padding-top: 30px;


    &.title-up{
        text-transform: uppercase;

        a{
            color: $black-color;
            text-decoration: none;
        }
    }
    & + .category{
        margin-top: -25px;
    }
}

.description,
.card-description,

}
.category{
    text-transform: capitalize;
    font-weight: $font-weight-bold;
    color: $dark-gray;
}
.text-primary {
  color: $brand-primary !important;
}
.text-info {
  color: $brand-info !important;
}

*/

