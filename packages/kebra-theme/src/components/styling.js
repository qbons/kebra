import { Global, css } from 'frontity';

import FancyCSS from '../assets/css/fancybox.css';

import ProximaNovaBoldWoff from "../assets/fonts/ProximaNova-Bold.woff";
import ProximaNovaBoldWoff2 from "../assets/fonts/ProximaNova-Bold.woff2";
import ProximaNovaExtraBoldWoff from "../assets/fonts/ProximaNova-Extrabld.woff";
import ProximaNovaExtraBoldWoff2 from "../assets/fonts/ProximaNova-Extrabld.woff2";
import ProximaNovaMediumWoff from "../assets/fonts/ProximaNova-Medium.woff";
import ProximaNovaMediumWoff2 from "../assets/fonts/ProximaNova-Medium.woff2";
import ProximaNovaLightWoff from "../assets/fonts/ProximaNova-Light.woff";
import ProximaNovaLightWoff2 from "../assets/fonts/ProximaNova-Light.woff2";
import ProximaNovaRegularWoff from "../assets/fonts/ProximaNova-Regular.woff";
import ProximaNovaRegularWoff2 from "../assets/fonts/ProximaNova-Regular.woff2";
import ProximaNovaSemiboldWoff from "../assets/fonts/ProximaNova-Semibold.woff";
import ProximaNovaSemiboldWoff2 from "../assets/fonts/ProximaNova-Semibold.woff2";

import FB from "../assets/img/icon/fb.svg";
import IG from "../assets/img/icon/ig.svg";
import IN from "../assets/img/icon/in.svg";
import MAIL from "../assets/img/icon/mail.svg";
import TW from "../assets/img/icon/tw.svg";
import LINK from "../assets/img/icon/link.svg";
import Search from "../assets/img/icon/search.svg";
import ArrowDown from "../assets/img/icon/arrow-down.svg";
import ButtonLoading from "../assets/img/btn-loading.gif";
import ArrowRightWhite from "../assets/img/icon/arrow-right-white.svg";
import ArrowRightViolet from "../assets/img/icon/arrow-right-violet.svg";
import ArrowRightViolet2 from "../assets/img/icon/arrow-right-violet2.svg";
import ArrowLeftViolet from "../assets/img/icon/arrow-left-violet.svg";
import Testi1Bg from "../assets/img/bg/testi1.svg";
import Testi2Bg from "../assets/img/bg/testi2.svg";
import CaseStudiesBg from "../assets/img/bg/case-studies.svg";
import ContactBg from "../assets/img/bg/contact.svg";
import MailViolet from "../assets/img/icon/ml-violet.png";
import InViolet from "../assets/img/icon/in-violet.png";
import ArrowDownWhite from "../assets/img/icon/arrow-down-white.svg";
import ArrowDownViolet from "../assets/img/icon/arrow-down-violet.svg";
import SolutionBg from "../assets/img/bg/solution.png";
import HomeBg from "../assets/img/bg/home.svg";
import CtaBg from "../assets/img/bg/cta.jpg";



const Styling = () => {
        return(
                <>
                        <Global styles = { css ` 
                                html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}

                                @font-face {
                                    font-family: 'ProximaNova';
                                    src: url('${ProximaNovaBoldWoff2}') format('woff2'),
                                        url('${ProximaNovaBoldWoff}') format('woff');
                                    font-weight: 700;
                                    font-style: normal;
                                    font-display: swap;
                                }
                                
                                @font-face {
                                    font-family: 'ProximaNova';
                                    src: url('${ProximaNovaExtraBoldWoff2}') format('woff2'),
                                        url('${ProximaNovaExtraBoldWoff}') format('woff');
                                    font-weight: 800;
                                    font-style: normal;
                                    font-display: swap;
                                }
                                
                                @font-face {
                                    font-family: 'ProximaNova';
                                    src: url('${ProximaNovaMediumWoff2}') format('woff2'),
                                        url('${ProximaNovaMediumWoff}') format('woff');
                                    font-weight: 500;
                                    font-style: normal;
                                    font-display: swap;
                                }
                                
                                @font-face {
                                    font-family: 'ProximaNova';
                                    src: url('${ProximaNovaLightWoff2}') format('woff2'),
                                        url('${ProximaNovaLightWoff}') format('woff');
                                    font-weight: 300;
                                    font-style: normal;
                                    font-display: swap;
                                }
                                
                                @font-face {
                                    font-family: 'ProximaNova';
                                    src: url('${ProximaNovaRegularWoff2}') format('woff2'),
                                        url('${ProximaNovaRegularWoff}') format('woff');
                                    font-weight: 400;
                                    font-style: normal;
                                    font-display: swap;
                                }
                                
                                @font-face {
                                    font-family: 'ProximaNova';
                                    src: url('${ProximaNovaSemiboldWoff2}') format('woff2'),
                                        url('${ProximaNovaSemiboldWoff}') format('woff');
                                    font-weight: 600;
                                    font-style: normal;
                                    font-display: swap;
                                }
                                ${FancyCSS}
                                :before,:after,html *{-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;-moz-osx-font-smoothing: grayscale; /*(For Firefox)*/-webkit-font-smoothing: antialiased; /*(For Chrome and Safari)*/}
                                .clearfix:after,
                                .clear{clear: both;display: block;height: 0;width: 100%;float: none !important;}
                                .clearfix:after{ content: '';}
                                input::-moz-focus-inner /*Remove button padding in FF*/{ border: 0;padding: 0;}
                                a{text-decoration: none;outline: 0 !important;}
                                a:hover{color: inherit;text-decoration: none;}
                                img{max-width: 100%;vertical-align: top;}
                                *:focus ,
                                textarea,
                                input,
                                textarea:focus, input:focus{outline: none;border-radius: 0}
                                input[type=number]::-webkit-outer-spin-button,
                                input[type=number]::-webkit-inner-spin-button {-webkit-appearance: none !important;margin: 0;}
                                input[type=number] {-moz-appearance:textfield !important;}
                                input::placeholder{ 
                                        color: #cacdc8;
                                        opacity:1;
                                }
                                textarea::placeholder{ 
                                        color: #cacdc8;
                                        opacity: 1;
                                }
                                ::-moz-placeholder {
                                        opacity: 1;
                                }
                                .cvr-bg-bf:before,
                                .cvr-bg-af:after,
                                .cvr-bg{
                                        background-repeat: no-repeat;
                                        background-position: center top;
                                        background-attachment: scroll;
                                        -webkit-background-size: cover;
                                        -moz-background-size: cover;
                                        -o-background-size: cover;
                                        background-size: cover;
                                }
                                .cvr-bg-bf:before,
                                .cvr-bg-af:after{
                                        content: '';
                                        display: inline-block;
                                        vertical-align: middle;
                                }
                                body{
                                        background: #fff;
                                        color: #616161;
                                        font-size: 17px;
                                        font-family: 'ProximaNova';
                                        font-weight:  400;
                                        position: static;
                                        overflow-y:auto;
                                }
                                .wrapper{
                                        max-width: 1115px;
                                        width: 100%;
                                        margin: 0 auto;
                                }
                                .rowflex{
                                        display: flex;
                                        flex-wrap: wrap;
                                }
                                .rowflex > *{
                                        flex: 1;
                                }
                                .form-basic .select select{
                                        /* Remove First */
                                        -webkit-appearance: none;
                                        -moz-appearance: none;
                                        appearance: none;
                                        outline: none;
                                        border: none;
                                        display: block;
                                        width: 100%;
                                        z-index: 2;
                                        background: none;
                                        padding: 0;
                                        cursor: pointer;
                                        position: relative;
                                }
                                .form-basic .select{
                                        position: relative;
                                }
                                .form-basic .select:after{
                                        display: block;
                                        position: absolute;
                                        right: 0;
                                        top: 5px;
                                        background-repeat: no-repeat;
                                        background-position: center top;
                                        background-attachment: scroll;
                                        -webkit-background-size: cover;
                                        -moz-background-size: cover;
                                        -o-background-size: cover;
                                        background-size: cover;
                                        background-image: url('${ArrowDown}');
                                        content: '';
                                        width: 12px;
                                        height: 8px;
                                        z-index: 1;
                                }
                                .form-basic .select,
                                .form-basic input[type="number"],
                                .form-basic input[type="text"],
                                .form-basic input[type="tel"],
                                .form-basic input[type="email"],
                                .form-basic input[type="password"],
                                .form-basic textarea{
                                        /* Remove First */
                                        -webkit-appearance: none;
                                        -moz-appearance: none;
                                        appearance: none;
                                        outline: none;
                                        border-radius: 0;
                                        display: block;
                                        width: 100%;
                                        background: rgba(0,0,0,0);
                                        color: #3B455B;
                                        border: none;
                                        border-bottom: 1px solid rgba(59, 69, 91, 0.377049);
                                        font-size: 16px;
                                        font-family: 'ProximaNova';
                                        font-weight: 400;
                                        padding: 0 0 5px;
                                        height: 25px;
                                }
                                
                                .form-basic input[type="number"]:focus,
                                .form-basic input[type="text"]:focus,
                                .form-basic input[type="tel"]:focus,
                                .form-basic input[type="email"]:focus,
                                .form-basic input[type="password"]:focus,
                                .form-basic textarea:focus{
                                        border-color: #5417A6;
                                }
                                .form-basic textarea{
                                        min-height: 100px;
                                        padding: 0;
                                        resize: vertical;
                                        line-height: 180%;
                                }
                                .form-basic .gap{
                                        display: flex;
                                        justify-content: space-between;
                                        flex-wrap: wrap
                                }
                                .form-basic .gap > *{
                                        max-width: calc(50% - 12px);
                                        flex: calc(50% - 12px);
                                }
                                .form-basic form > * {
                                        display: block;
                                        margin-top: 40px;
                                }
                                .form-basic form > *:first-child{
                                        margin-top: 0;
                                }
                                .form-basic form > .rowflex > *{
                                        padding: 0 10px;
                                }
                                .form-basic .fgroup > label{
                                        display: block;
                                        margin-bottom: 10px;
                                        color: #3B455B;
                                        font-size: 16px;
                                }
                                .form-basic .fgroup > label sup{
                                        line-height: 100%;
                                        position: relative;
                                        top: 0;
                                        color: #ef0000;
                                }
                                .format-text{
                                        line-height: 180%;
                                        font-size: 14px;
                                }
                                .format-text > *{
                                        margin-top: 15px;
                                }
                                .format-text > *:first-child{
                                        margin-top: 0;
                                }
                                .format-text b,
                                .format-text strong{
                                        font-weight: 700;
                                }
                                .format-text em,
                                .format-text i:not(.fa){
                                        font-style: italic;
                                }
                                .format-text h1,
                                .format-text h2,
                                .format-text h3,
                                .format-text h4,
                                .format-text h5,
                                .format-text h6{
                                        color: #000;
                                        font-weight: 700;
                                        line-height: 140%;
                                }
                                .format-text h1{
                                        font-size: 28px;
                                }
                                .format-text h2{
                                        font-size: 20px;
                                }
                                .format-text h3{
                                        font-size: 16px;
                                }
                                .format-text h4{
                                        font-size: 14px;
                                }
                                .format-text h5{
                                        font-size: 12px;
                                }
                                .format-text h6{
                                        font-size: 10px;
                                }
                                .format-text a:not(.button){
                                        color: #000;
                                }
                                .format-text a:not(.button):hover{
                                        text-decoration: underline;
                                }
                                .format-text ul{
                                        list-style: disc;
                                        padding-left: 40px;
                                }
                                .format-text ul li,
                                .format-text ol li{
                                        padding-bottom: 10px;
                                }
                                .format-text ol{
                                        list-style: decimal;
                                }
                                .format-text ol{
                                        padding-left: 60px;
                                }
                                .format-text sup{
                                        color: #d90000;
                                        position: relative;
                                        top: 0;
                                        line-height: 100%;
                                }
                                .format-text blockquote{
                                        font-size: 19px;
                                        line-height: 200%;
                                }
                                .centered{
                                        text-align: center;
                                }
                                .rightned{
                                        text-align: right;
                                }
                                .leftned{
                                        text-align: left;
                                }
                                .mainmenu li.btn > a,
                                .button{
                                        /* Remove First */
                                        -webkit-appearance: none;
                                        -moz-appearance: none;
                                        appearance: none;
                                        outline: none;
                                        border-radius: 22px;
                                        display: inline-block;
                                        color: #1C253A;
                                        background: #9FFFF1;
                                        font-family: 'ProximaNova';
                                        font-weight: 700;
                                        font-size: 14px;
                                        height: 44px;
                                        line-height: 44px;
                                        padding: 0 30px;
                                        text-align: center;
                                        cursor: pointer;
                                        border: none;
                                        outline: none !important;
                                        text-transform: uppercase;
                                        letter-spacing: 3.9px;
                                        transition:all 0.2s ease-in;
                                }
                                .mainmenu li.btn > a:focus,
                                .mainmenu li.btn > a:active,
                                .button:active,
                                .button:focus{
                                        border-radius: 22px;
                                }
                                .button.btn-fullwidth{
                                        display: block;
                                        width: 100%;
                                }
                                .button.btn-blue{
                                        background: #33CCFF;
                                }
                                .button.btn-blue:hover{
                                        background: #00bbf9;
                                        color: #1C253A;
                                }
                                .mainmenu li.btn > a:hover,
                                .button:hover{
                                        color: #1C253A;
                                        background: #53ffe6;
                                }
                                .button.has-icon > *{
                                        display: inline-block;
                                        vertical-align: middle;
                                        line-height: 100%;
                                }
                                .button.has-icon i{
                                        font-size: 20px;
                                        padding: 0;
                                        position: relative;
                                        top: -2px;
                                        margin-right: 7px;
                                }
                                .button.has-loading{
                                        position: relative;
                                        overflow: hidden;
                                }
                                .button.has-loading.fetching{
                                        color: rgba(0,0,0,0);
                                        cursor: default;
                                }
                                .button.has-loading:before{
                                        display: none;
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                        width: 100%;
                                        height: 100%;
                                        background: rgba(255,255,255,.8);
                                        content: '';
                                        z-index: 1;
                                }
                                .button.has-loading:after{
                                        display: none;
                                        position: absolute;
                                        top: 50%;
                                        -ms-transform: translateY(-50%);
                                        -webkit-transform: translateY(-50%);
                                        transform: translateY(-50%);
                                        left: calc(50% - 8px);
                                        width: 16px;
                                        height: 11px;
                                        background: url('${ButtonLoading}') no-repeat;
                                        content: '';
                                        z-index: 2;
                                }
                                .button.has-loading.fetching:after,
                                .button.has-loading.fetching:before{
                                        display: block;
                                }
                                .btn-hide{
                                        display: none !important;
                                }
                                .slick-dots{
                                        display: block;
                                        z-index: 2;
                                        width: 100%;
                                        text-align: center;
                                }
                                .slick-dots li{
                                        display: inline-block;
                                        vertical-align: middle;
                                        margin: 0 3px;
                                }
                                .slick-dots li button{
                                        display: block;
                                        width: 10px;
                                        height: 10px;
                                        cursor: pointer;	
                                        color: rgba(0,0,0,0);
                                        background: #fff;
                                        padding: 0;
                                        border-radius: 5px;
                                        border: 1px solid #AF8AE2;
                                }
                                .slick-dots li.slick-active button{
                                        background: #AF8AE2;
                                }
                                .widget-title{
                                        color: #000;
                                        font-size: 18px;
                                        font-weight: 600;
                                        margin-bottom: 40px;
                                }
                                /** HEADER **/
                                #top{
                                        padding: 27px 0 0;
                                }
                                .violet-bg #top{
                                        background: #5417A6;
                                }
                                #top .logo{
                                        position: relative;
                                        top: -2px;
                                }
                                .violet-bg #top .logo img{
                                        filter: brightness(0) invert(1);
                                }
                                #top .logo,
                                #top .mainmenu{
                                        display: inline-block;
                                        vertical-align: middle;
                                }
                                .mainmenu li{
                                        display: inline-block;
                                        vertical-align: middle;
                                        margin-left: 38px;
                                }
                                .mainmenu li a{
                                        color: #5417A6;
                                        font-size: 16px;
                                        display: block;
                                        position: relative;
                                        transition:color 0.2s ease-in;
                                }
                                .violet-bg .mainmenu li:not(.btn) a{
                                        color: #fff;
                                }
                                .mainmenu li.current-menu-item:not(.btn) > a,
                                .violet-bg .mainmenu li:not(.btn) a:hover,
                                .mainmenu li a:hover{
                                        color: #FFAC2C;
                                }
                                .mainmenu li.current-menu-item:not(.btn) > a{
                                        font-weight: 700;
                                }
                                .mainmenu li.btn > a{
                                        padding: 0 25px;
                                }
                                #body{
                                        padding-top: 50px;
                                }
                                .violet-bg #body{
                                        padding-top: 0;
                                }
                                /** FOOTER **/
                                #bottom{
                                        padding: 75px 0 55px;
                                        background: #fff;
                                }
                                .grey-foot #bottom{
                                        background: #f8f9fb;
                                }
                                #bottom .footer-widget{
                                        margin-bottom: 50px;
                                        font-size: 15px;
                                }
                                .footer-widget .rowflex{
                                        margin: 0 -20px;
                                }
                                .footer-widget .col{
                                        margin: 0 20px 30px;
                                        max-width: calc(14% - 40px);
                                        flex: calc(14% - 40px);
                                }
                                .footer-widget .col:first-child{
                                        flex: calc(37% - 40px);
                                        max-width: calc(37% - 40px);
                                }
                                .footer-widget .col:last-child{
                                        flex: calc(21% - 40px);
                                        max-width: calc(21% - 40px);
                                }
                                .widget_social .widget-title{
                                        margin-bottom: 20px;
                                }
                                .widget_social strong{
                                        font-weight: 600;
                                        line-height: 140%;
                                        max-width: 320px;
                                        display: block;
                                        color: #3B455B;
                                        font-size: 18px;
                                }
                                .widget_social .sc{
                                        margin-top: 50px;
                                }
                                .widget_social .sc small{
                                        font-size: 13px;
                                        color: #3B455B;
                                        display: block;
                                        margin-bottom: 10px;
                                        line-height: 100%;
                                }
                                .widget_social .sc a{
                                        display: inline-block;
                                        vertical-align: middle;
                                        width: 31px;
                                        height: 31px;
                                        margin: 0 17px 0 0;
                                        opacity: 1;
                                        transition:opacity 0.2s ease-in;
                                }
                                .widget_social .sc a:hover{
                                        opacity: .8;
                                }
                                .widget_social .sc a:last-child{ margin: 0;}
                                .widget_social .sc a.fb{ background-image: url('${FB}');}
                                .widget_social .sc a.in{ background-image: url('${IN}');}
                                .widget_social .sc a.ig{ background-image: url('${IG}');}
                                .widget_social .sc a.tw{ background-image: url('${TW}');}

                                .widget li{
                                        display: block;
                                        margin-top: 35px;
                                }
                                .widget li:first-child{
                                        margin: 0;
                                }
                                .widget li a{
                                        color: #6D7783;
                                        transition:color 0.2s ease-in;
                                }
                                .widget li a:hover{
                                        color: #FFAC2C;
                                }
                                .widget_link a{
                                        color: #3B455B;
                                        display: block;
                                        line-height: 100%;
                                        margin-bottom: 25px;
                                }
                                .widget_link a:before{
                                        display: inline-block;
                                        vertical-align: middle;
                                        margin-right: 15px;
                                }
                                .widget_link a.ic-url:before{
                                        margin-right: 17px;
                                        width: 16px;
                                        height: 17px;
                                        background-image: url('${LINK}');
                                        position: relative;
                                        left: 2px;
                                }
                                .widget_link a.ic-ml:before{
                                        width: 18px;
                                        height: 12px;
                                        background-image: url('${MAIL}');
                                }
                                .widget_link a:hover{
                                        text-decoration: underline;
                                }
                                #bottom .location{
                                        margin-bottom: 40px;
                                }
                                #bottom .location .rowflex{
                                        justify-content: space-between;
                                }
                                #bottom .location .widget{
                                        flex: 33%;
                                        max-width: 33%;
                                        font-weight: 300;
                                        font-size: 15px;
                                        line-height: 140%;
                                }
                                #bottom .location .widget h3{
                                        font-weight: 400;
                                        line-height: 100%;
                                        margin-bottom: 5px;
                                }
                                #bottom .tribute p{
                                        float: left;
                                        color: #545F69;
                                        font-size: 13px;
                                        font-weight: 300;
                                        position: relative;
                                        top: 7px;
                                }
                                #bottom .tribute ul{
                                        float: right;
                                }
                                #bottom .tribute li{
                                        display: inline-block;
                                        vertical-align: middle;
                                        margin-right: 5px;
                                }
                                #bottom .tribute li:after{
                                        width: 1px;
                                        height: 10px;
                                        background: #545F69;
                                        content: '';
                                        display: inline-block;
                                        position: relative;
                                        margin-left: 6px;
                                        top: 1px;
                                        opacity: .5;
                                }
                                #bottom .tribute li:last-child{
                                        margin: 0;
                                }
                                #bottom .tribute li:last-child:after{
                                        display: none;
                                }
                                #bottom .tribute li a{
                                        font-size: 13px;
                                        font-weight: 300;
                                        color: #545F69;
                                }
                                #bottom .tribute li a:hover{
                                        text-decoration: underline;
                                }

                                /** INNER CONTACT **/
                                .inner-contact{
                                        position: relative;
                                        overflow: hidden;
                                        padding-bottom: 90px;
                                }
                                .inner-contact:before{
                                        display: block;
                                        position: absolute;
                                        left: -3px;
                                        top: 50px;
                                        width: 100vw;
                                        height: 43.3vw;
                                        background-image: url('${ContactBg}');
                                        background-position: left top;
                                        z-index: 2;
                                }
                                .inner-contact:after{
                                        position: absolute;
                                        z-index: 1;
                                        background: #5417A6;
                                        left: 0;
                                        bottom: 0;
                                        width: 100%;
                                        height: 50%;
                                        content: '';
                                }
                                .inner-contact .pusher{
                                        max-width: 800px;
                                        padding: 0 30px;
                                        margin: 0 auto;
                                        position: relative;
                                        z-index: 3;
                                }
                                .inner-contact .hentry{
                                        text-align: center;
                                        max-width: 530px;
                                        margin: 0 auto 45px;
                                }
                                .inner-contact .hentry h2{
                                        color: #5417A6;
                                        font-size: 50px;
                                        line-height: 110%;
                                }
                                .inner-contact .hentry .txt{
                                        color: #3B455B;
                                        font-size: 20px;
                                        font-weight: 300;
                                        line-height: 140%;
                                        margin: 30px 0 0;
                                }
                                .inner-contact .layer{
                                        background: #FFFFFF;
                                        box-shadow: 8px 8px 30px rgba(192, 192, 192, 0.223995);
                                        border-radius: 7px;
                                        padding: 60px 105px;
                                }
                                .inner-contact .layer > h3{
                                        text-align: center;
                                        color: #33CCFF;
                                        font-size: 30px;
                                        line-height: 160%;
                                        margin-bottom: 50px;
                                }
                                .contact-general.narrow{
                                        max-width: 540px;
                                        margin: 0 auto;
                                }
                                .contact-general .hentry{
                                        text-align: center;
                                        margin-bottom: 45px;
                                }
                                .contact-general .hentry b{
                                        color: #33CCFF;
                                        font-size: 14px;
                                        letter-spacing: 2.8px;
                                        text-transform: uppercase;
                                        font-weight: 600;
                                }
                                .contact-general .hentry h2{
                                        color: #5417A6;
                                        font-size: 36px;
                                        line-height: 130%;
                                        margin: 5px 0 8px;
                                }
                                .contact-general .hentry p{
                                        line-height: 160%;
                                        font-size: 18px;
                                }
                                .contact-general form .button{
                                        padding: 0 60px;
                                }
                                .contact-general .info{
                                        text-align: center;
                                        margin-top: 40px;
                                        font-size: 18px;
                                        line-height: 160%;
                                }
                                .contact-general .info a{
                                        color: #0E8DB8;
                                }
                                .contact-general .info a:hover{
                                        text-decoration: underline;
                                }
                                .contact-general .centered{
                                        position: relative;
                                }
                                .contact-general .centered .ajax-loader{
                                        position: absolute;
                                        right: 0;
                                        top: 50%;
                                        -ms-transform: translateY(-50%);
                                        -webkit-transform: translateY(-50%);
                                        transform: translateY(-50%);
                                }
                                /** INNER BLOG **/
                                .inner-blog{
                                        position: relative;
                                        padding: 50px 0 30px;
                                }
                                .inner-blog.fetching:after{
                                        display: block;
                                        position: fixed;
                                        top:0;
                                        left:0;
                                        width: 100%;
                                        height:100%;
                                        content: '';
                                        background: rgba(255,255,255,.7);
                                        z-index: 9999;
                                }
                                .inner-blog:before{
                                        display: block;
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                        width: 100%;
                                        height: 830px;
                                        content: '';
                                        background: #5417A6;
                                        z-index: 1;
                                }
                                .inner-blog .wrapper{
                                        position: relative;
                                        z-index: 2;
                                }
                                .inner-blog .subscribe{
                                        margin-bottom: 50px;
                                }
                                .inner-blog .filter-cat span,
                                .inner-blog .subscribe span{
                                        color: #FFAC2C;
                                        font-size: 20px;
                                        text-transform: uppercase;
                                        line-height: 130%;
                                        margin-bottom: 20px;
                                        display: block;
                                }
                                .inner-blog .subscribe h2{
                                        color: #9FFFF1;
                                        font-size: 55px;
                                        line-height: 120%;
                                        margin-bottom: 35px;
                                        max-width: 900px;
                                }
                                .inner-blog .subscribe form{
                                        position: relative;
                                        max-width: 540px;
                                        width: 100%;
                                        display: block;
                                }
                                .inner-blog .subscribe form input::placeholder{
                                        color: #fff;
                                        font-size: 20px;
                                }
                                .inner-blog .search form input,
                                .inner-blog .subscribe form input{
                                        /* Remove First */
                                        -webkit-appearance: none;
                                        -moz-appearance: none;
                                        appearance: none;
                                        outline: none;
                                        border-radius: 0;
                                        background: none;
                                        border:none;
                                        border-bottom: 1px solid #fff;        
                                        font-size: 20px;
                                        font-family: 'ProximaNova';
                                        font-weight: 400;
                                        display: block;
                                        width: 100%;
                                        color: #fff;
                                        padding: 0 80px 20px 0;
                                }
                                .inner-blog .subscribe form button{
                                        position: absolute;
                                        right: 0;
                                        top: 0;
                                        border: none;
                                        background-color: rgba(0,0,0,0);
                                        background-image: url('${ArrowRightWhite}');
                                        width: 67px;
                                        height: 30px;
                                        transition:right 0.2s ease-in;
                                        cursor: pointer;
                                }
                                .inner-blog .subscribe form button:hover{
                                        right: -5px;
                                }
                                .inner-blog .filter-cat{
                                        border-bottom: 2px solid #fff;
                                        margin-bottom: 40px;
                                }
                                .inner-blog .filter-cat label{
                                        display: inline-block;
                                        vertical-align: middle;
                                        margin-left: 80px;
                                        color: #fff;
                                        font-size: 19px;
                                        position: relative;
                                        transition:color 0.2s ease-in;
                                        cursor: pointer;
                                }
                                .inner-blog .filter-cat label:hover{
                                        color: #FFAC2C;
                                }
                                .inner-blog .filter-cat label b{
                                        display: block;
                                        position: relative;
                                        width: 100%;
                                        padding-bottom: 20px;
                                }
                                .inner-blog .filter-cat label b:after{
                                        background: #9FFFF1;
                                        height: 0;
                                        width: 100%;
                                        position: absolute;
                                        left: 0;
                                        bottom: 0;
                                        content: '';
                                        transition:height 0.2s ease-in;
                                }
                                .inner-blog .filter-cat label input:checked + b:after{
                                        height: 6px;
                                }
                                .inner-blog .filter-cat  label:first-child{
                                        margin: 0;
                                }
                                .inner-blog .filter-cat label input{
                                        display: none;
                                }
                                .inner-blog .search{
                                        margin-bottom: 70px;
                                }
                                .inner-blog .search form{
                                        display: flex;
                                        flex-wrap: wrap;
                                        justify-content: space-between;
                                }
                                .inner-blog .search form label{
                                        flex: 40%;
                                        max-width: 40%;
                                        color: #9FFFF1;
                                        font-size: 20px;
                                }
                                .inner-blog .search form fieldset{
                                        flex: 57%;
                                        max-width: 57%;
                                        position: relative;
                                        top: -1px;
                                }
                                .inner-blog .search form input{
                                        padding: 0 55px 10px 10px;
                                }
                                .inner-blog .search form button{
                                        position: absolute;
                                        right: 20px;
                                        top: 0;
                                        background-color: rgba(0,0,0,0);
                                        background-image: url('${Search}');
                                        width: 24px;
                                        height: 24px;
                                        border: none;
                                        cursor: pointer;
                                }
                                .inner-blog .blog-list{
                                        margin: 0 -27px;
                                }
                                .inner-blog .blog-list.fetching:after{
                                        display: block;
                                        position: fixed;
                                        left: 0;
                                        top: 0;
                                        width: 100%;
                                        height: 100%;
                                        z-index: 999;
                                        background: rgba(255,255,255,.7);
                                        content: '';
                                }
                                .inner-blog .blog-list .item{
                                        max-width: calc(33.333333333333333333% - 54px);
                                        flex: calc(33.333333333333333333% - 54px);
                                        margin: 0 27px 70px;
                                }
                                .inner-blog .blog-list .item.not-found{
                                        max-width: 100%;
                                        flex: 100%;
                                        margin: 0;
                                        text-align: center;
                                        color: #fff;
                                        font-size: 20px;
                                        position: relative;
                                        top: 40px;
                                        height: 150px;
                                }
                                .inner-blog .blog-list .item figure a{
                                        display: block;
                                        position: relative;
                                        background-repeat: no-repeat;
                                        background-position: center top;
                                        background-attachment: scroll;
                                        -webkit-background-size: cover;
                                        -moz-background-size: cover;
                                        -o-background-size: cover;
                                        background-size: cover;
                                        width: 100%;
                                        height: 290px;
                                        position: relative;
                                }
                                .inner-blog .blog-list .item .cat{
                                        color: #FFAC2C;
                                        font-size: 17px;
                                        display: inline-block;
                                        line-height: 100%;
                                        margin: 20px 0 10px;
                                }
                                .inner-blog .blog-list .item .cat:hover{
                                        text-decoration: underline;
                                }
                                .inner-blog .blog-list .item h3{
                                        font-size: 20px;
                                        line-height: 130%;
                                        color: #5417A6;
                                }
                                .inner-blog .blog-list .item h3 a{
                                        color: #5417A6;
                                        transition:color 0.2s ease-in;
                                }
                                .inner-blog .blog-list .item h3 a:hover{
                                        color: #FFAC2C;
                                }
                                /** INNER SERVICE **/
                                .inner-service .copy{
                                        background: #5417A6;
                                        padding: 50px 0 30px;
                                        color: #fff;
                                }
                                .inner-service .copy .wrapper{
                                        max-width: 1050px;
                                        justify-content: space-between;
                                        align-items: center;
                                }
                                .inner-service .copy figure{
                                        max-width: 40%;
                                        flex: 40%;
                                }
                                .inner-service .copy .caption{
                                        max-width: 58%;
                                        flex: 58%;
                                }
                                .inner-service .solution .hentry h2,
                                .inner-service .client .hentry h2,
                                .inner-service .copy h2{
                                        color: #9FFFF1;
                                        font-weight: 800;
                                        font-size: 50px;
                                        line-height: 110%;
                                }
                                .inner-service .client .copytxt .txt,
                                .inner-service .copy .txt{
                                        margin-top: 35px;
                                        font-size: 17px;
                                        line-height: 160%;
                                        max-width: 570px;
                                }
                                .inner-service .client .copytxt .txt > *,
                                .inner-service .copy .txt > *{
                                        margin-top: 25px;
                                }
                                .inner-service .client .copytxt .txt > *:first-child,
                                .inner-service .copy .txt > *:first-child{
                                        margin: 0;
                                }
                                .inner-service .client .copytxt .txt strong,
                                .inner-service .client .copytxt .txt b,
                                .inner-service .copy .txt strong,
                                .inner-service .copy .txt b{
                                        font-size: 20px;
                                        font-weight: 700;
                                }
                                .inner-service .client{
                                        padding: 30px 0 55px;
                                        background: #5417A6;
                                        color: #fff;
                                }
                                .inner-service .client .wrapper{
                                        max-width: 880px;
                                }
                                .inner-service .client .hentry{
                                        margin-bottom: 30px;
                                }
                                .inner-service .solution .hentry span,
                                .inner-service .client .hentry h2 span{
                                        color: #FFAC2C;
                                        font-size: 20px;
                                        font-weight: 500;
                                        display: inline-block;
                                        vertical-align: middle;
                                        position: relative;
                                        margin: 0 50px 0 0;
                                        top: -15px;
                                        text-transform: uppercase;
                                }
                                .inner-service .client .copytxt{
                                        justify-content: space-between;
                                }
                                .inner-service .client .copytxt figure{
                                        max-width: 31%;
                                        flex: 31%;
                                }
                                .inner-service .client .copytxt .caption{
                                        max-width: 64%;
                                        flex: 64%;
                                }
                                .inner-service .client .copytxt .txt{
                                        margin: 15px 0 0;
                                        max-width: 500px;
                                }
                                .inner-service .client .list{
                                        margin: 60px -9px 0;
                                }
                                .inner-service .client .list figure{
                                        margin: 0 9px 20px;
                                        max-width: calc(25% - 18px);
                                        flex: calc(25% - 18px);
                                }
                                .inner-service .solution{
                                        padding: 70px 0 90px;
                                }
                                .inner-service .solution .hentry{
                                        margin-bottom: 50px;
                                }
                                .inner-service .solution .hentry span{
                                        display: block;
                                        margin:  0 0 30px;
                                        top: auto;
                                        line-height: 100%;
                                        font-size: 18px;
                                }
                                .inner-service .solution .hentry h2{
                                        color: #5417A6;
                                }
                                .inner-service .solution .item{
                                        padding-top: 30px;
                                        margin-top: 30px;
                                        border-top: 1px solid rgba(175, 138, 226, 0.51);
                                }
                                .inner-service .solution .item:first-child{
                                        margin: 0;
                                        padding: 0;
                                        border: none;
                                }
                                .inner-service .solution .item h3{
                                        cursor: pointer;
                                        display: block;
                                        position: relative;
                                        font-size: 22px;
                                        color: #5417A6;
                                }
                                .inner-service .solution .item h3:after{
                                        display: block;
                                        position: absolute;
                                        right: 0;
                                        top: 4px;
                                        width: 29px;
                                        height: 16px;
                                        background-image: url('${ArrowDownViolet}');
                                        transition:all 0.2s ease-in;
                                        transform: rotate(0deg);
                                }
                                .inner-service .solution .item.active h3:after{
                                        transform: rotate(-180deg);
                                }
                                .inner-service .solution .wr{
                                        max-width: 950px;
                                        display: flex;
                                        flex-wrap: wrap;
                                        justify-content: space-between;
                                        margin-top: 30px;
                                }
                                .inner-service .solution figure{
                                        max-width: 18%;
                                        flex: 18%;
                                }
                                .inner-service .solution .caption{
                                        flex: 79%;
                                        max-width: 79%;
                                }
                                .inner-service .solution .txt{
                                        font-size: 17px;
                                        line-height: 140%;
                                }
                                .inner-service .solution .txt > *{
                                        margin-top: 15px;
                                }
                                .inner-service .solution .txt > *:first-child{
                                        margin: 0;
                                }
                                .inner-service .solution .txt + .more{
                                        display: inline-block;
                                        margin-top: 15px;
                                        font-weight: 800;
                                        font-size: 20px;
                                        text-decoration: underline;
                                        color: #5417A6;
                                }
                                .section-contact{
                                        padding: 40px 0;
                                }
                                .section-contact.greyed{
                                        background: #f8f9fb;
                                }
                                /** INNER CASE **/
                                .inner-case .intro{
                                        padding: 70px 0 250px;
                                        background: #5417A6;
                                        position: relative;
                                        z-index: 1;
                                }
                                .inner-case .intro:before{
                                        position: absolute;
                                        display: block;
                                        width: 89.93055555555556vw;
                                        height: 7.3vw;
                                        top: 28%;
                                        -ms-transform: translateY(-28%);
                                        -webkit-transform: translateY(-28%);
                                        transform: translateY(-28%);
                                        left: 5vw;
                                        background-image: url('${CaseStudiesBg}');
                                }
                                .inner-case .intro .holder{
                                        position: relative;
                                        z-index: 2;
                                        text-align: center;
                                        max-width: 640px;
                                        margin: 0 auto;
                                }
                                .inner-case .intro span{
                                        color: #FFAC2C;
                                        font-size: 20px;
                                        text-transform: uppercase;
                                        line-height: 100%;
                                        display: inline-block;
                                        margin-bottom: 30px;
                                }
                                .inner-case .intro h2{
                                        color: #9FFFF1;
                                        font-size: 60px;
                                        line-height: 130%;
                                }
                                .inner-case .intro h2 b{
                                        font-weight: 700;
                                }
                                .inner-case .story{
                                        position: relative;
                                        z-index: 2;
                                        margin-top: -160px;
                                }
                                .inner-case .story .rowflex{
                                        justify-content: space-between;
                                }
                                .inner-case .story .item{
                                        flex: 45%;
                                        max-width: 45%;
                                        margin-bottom: 45px;
                                }
                                .inner-case .story .item:nth-of-type(2){
                                        flex: 40%;
                                        max-width: 40%;
                                        margin-top: 60px;
                                }
                                .inner-case .story .item:nth-of-type(3){
                                        flex: 40%;
                                        max-width: 40%;
                                        position: relative;
                                        top: -90px;
                                }
                                .inner-case .story .item h3{
                                        color: #5417A6;
                                        font-size: 28px;
                                        font-weight: 800;
                                        line-height: 130%;
                                        margin: 20px 0 0;
                                }
                                .inner-case .story .item h3 a{
                                        color: #5417A6;
                                        transition:color 0.2s ease-in;
                                }
                                .inner-case .story .item h3 a:hover{
                                        color: #FFAC2C;
                                }
                                .inner-case .story .item .txt{
                                        font-size: 17px;
                                        line-height: 150%;
                                        max-width: 415px;
                                        margin: 10px 0 0;
                                }
                                .inner-case .story .item:nth-of-type(4) .caption{
                                        padding-left: 50px;
                                }
                                .blog-section{
                                        margin-top: 50px;
                                        position: relative;
                                        padding-bottom: 70px;
                                }
                                .blog-section:before{
                                        display: block;
                                        position: absolute;
                                        left: 0;
                                        bottom: 0;
                                        width: 100%;
                                        height: 70%;
                                        content: '';
                                        background: #9FFFF1;
                                }
                                .blog-section .rowflex{
                                        padding-left: 200px;
                                        justify-content: space-between;
                                        position: relative;
                                        z-index: 2;
                                }
                                .blog-section .rowflex .item{
                                        max-width: 46.5%;
                                        flex: 46.5%;
                                }
                                .blog-section .item figure{
                                        margin-bottom: 23px;
                                }
                                .blog-section .item figure a{
                                        display: block;
                                        position: relative;
                                        background-repeat: no-repeat;
                                        background-position: center top;
                                        background-attachment: scroll;
                                        -webkit-background-size: cover;
                                        -moz-background-size: cover;
                                        -o-background-size: cover;
                                        background-size: cover;
                                        width: 100%;
                                        height: 285px;
                                }
                                .blog-section .item .cat{
                                        display: inline-block;
                                        line-height: 100%;
                                        color: #5417A6;
                                        font-size: 18px;
                                        margin-bottom: 10px;
                                }
                                .blog-section .item .cat:hover{
                                        text-decoration: underline;
                                }
                                .blog-section .item h3{
                                        color: #3B455B;
                                        font-size: 24px;
                                        font-weight: 600;
                                        line-height: 130%;
                                }
                                .blog-section .item h3 a{
                                        color: #3B455B;
                                        transition:color 0.2s ease-in;
                                }
                                .blog-section .item h3 a:hover{
                                        color: #5417A6;
                                }
                                /** INNER TESTI **/
                                body.page-testi{
                                        background: #f2f2f2;
                                }
                                .inner-testi .caro{
                                        margin-bottom: 100px;
                                }
                                .inner-testi .caro .hentry{
                                        margin-bottom: 50px;
                                        position: relative;
                                }
                                .inner-testi .caro .hentry.orn1:after,
                                .inner-testi .caro .hentry.orn2:after{
                                        background-repeat: no-repeat;
                                        background-position: center top;
                                        background-attachment: scroll;
                                        -webkit-background-size: cover;
                                        -moz-background-size: cover;
                                        -o-background-size: cover;
                                        background-size: cover;
                                        position: absolute;
                                        content: '';
                                        display: block;
                                }
                                .inner-testi .caro .hentry.orn1:after{
                                        width: 214px;
                                        height: 67px;
                                        background-image: url('${Testi1Bg}');
                                        right: 50px;
                                        top: 60px;
                                }
                                .inner-testi .caro .hentry.orn2:after{
                                        width: 84.86111111111111vw;
                                        height: 7.4vw;
                                        background-image: url('${Testi2Bg}');
                                        left: 5vw;
                                        top: -25px;
                                }
                                .inner-testi .caro .hentry .wrapper{
                                        position: relative;
                                        z-index: 2;
                                }
                                .inner-testi .caro .hentry span{
                                        display: block;
                                        line-height: 100%;
                                        text-transform: uppercase;
                                        color: #FFAC2C;
                                        font-size: 18px;
                                        font-weight: 500;
                                        text-transform: uppercase;
                                        margin-bottom: 25px;
                                }
                                .inner-testi .caro .hentry h2{
                                        line-height: 120%;
                                        font-size: 50px;
                                        color: #5417A6;
                                }
                                .inner-testi .caro .hentry h2 b{
                                        font-weight: 800;
                                        display: block;
                                        line-height: 100%;
                                }
                                .inner-testi  .slick-slider .slick-track{
                                        display: flex;        
                                }
                                .inner-testi .caro .slider{
                                        overflow: hidden;
                                }
                                .inner-testi .caro .slick-list{
                                        margin-right: -30vw;
                                }
                                .inner-testi .caro .slick-slide{
                                        background: #fff;
                                        border: 1px solid #F2F2F2;
                                        box-sizing: border-box;
                                        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.0236287);
                                        border-radius: 19px;
                                        float: none;
                                        height: auto;
                                        margin-right: 13px;
                                        padding: 30px 50px 100px;
                                        position: relative;
                                        width: 580px;
                                        max-width: 580px;
                                        flex: 580px;
                                }
                                .inner-testi .caro .item figure{
                                        margin-bottom: 20px;
                                }
                                .inner-testi .caro .item .txt{
                                        font-size: 17px;
                                        line-height: 130%;
                                }
                                .inner-testi .caro .item .author{
                                        position: absolute;
                                        left: 50px;
                                        bottom: 30px;
                                        width: calc(100% - 100px);
                                }
                                .inner-testi .caro .item .author h3{
                                        color: #FFAC2C;
                                        font-size: 18px;
                                        font-weight: 800;
                                        line-height: 130%;
                                        margin-bottom: 2px;
                                }
                                .inner-testi .caro .item .author span{
                                        color: #5417A6;
                                        font-size: 17px;
                                        display: block;
                                        font-weight: 500;
                                }
                                .inner-testi .caro .slidenav{
                                        margin-top: 25px;
                                }
                                .inner-home .testi .info .slidenav a,
                                .inner-testi .caro .slidenav a{
                                        display: inline-block;
                                        vertical-align: middle;
                                        background-repeat: no-repeat;
                                        background-position: center top;
                                        background-attachment: scroll;
                                        -webkit-background-size: cover;
                                        -moz-background-size: cover;
                                        -o-background-size: cover;
                                        background-size: cover;
                                        width: 45px;
                                        height: 21px;
                                        opacity: 1;
                                        transition:opacity 0.2s ease-in;
                                }
                                .inner-home .testi .info .slidenav a:hover,
                                .inner-testi .caro .slidenav a:hover{
                                        opacity: .5;
                                }
                                .inner-home .testi .info .slidenav a.prev,
                                .inner-testi .caro .slidenav a.prev{
                                        background-image: url('${ArrowLeftViolet}');
                                }
                                .inner-home .testi .info .slidenav a.next,
                                .inner-testi .caro .slidenav a.next{
                                        background-image: url('${ArrowRightViolet}');
                                        margin-left: 20px;
                                        position: relative;
                                        top: 1px;
                                }
                                .inner-testi .section-contact{
                                        padding: 0 0 125px;
                                        position: relative;
                                }
                                .inner-testi .section-contact:before{
                                        display: block;
                                        position: absolute;
                                        left: 0;
                                        bottom: 0;
                                        width: 100%;
                                        height: 55%;
                                        content: '';
                                        background: #5417A6;
                                }
                                .inner-testi .section-contact .wrapper{
                                        position: relative;
                                        z-index: 2;
                                }
                                .section-contact .heading{
                                        text-align: center;
                                        margin-bottom: 40px;
                                }
                                .section-contact .heading h2{
                                        color: #33CCFF;
                                        font-size: 55px;
                                        line-height: 110%;
                                        font-weight: 800;
                                        max-width: 600px;
                                        margin: 0 auto 30px;
                                }
                                .section-contact .heading .txt{
                                        font-size: 20px;
                                        line-height: 160%;
                                }
                                .section-contact .heading .txt b{
                                        display: block;
                                        color: #5417A6;
                                        font-size: 25px;
                                        font-weight: 800;
                                        margin: 0 0 5px;
                                }
                                .inner-testi .contact-general{
                                        max-width: 930px;
                                        margin: 0 auto;
                                        background: #fff;
                                        border-radius: 7px;
                                        padding: 30px 180px 35px;
                                }
                                /** INNER ABOUT **/
                                .inner-about .copy{
                                        background: #5417A6;
                                        padding: 80px 0 50px;
                                        color: #fff;
                                }
                                .inner-about .copy .wrapper{
                                        max-width: 1065px;
                                }
                                .inner-about .copy .rowflex{
                                        justify-content: space-between;
                                }
                                .inner-about .copy figure{
                                        max-width: 36.9%;
                                        flex: 36.9%;
                                        position: relative;
                                        top: 50px;
                                }
                                .inner-about .copy .caption{
                                        max-width: 58.8%;
                                        flex: 58.8%;
                                }
                                .inner-about .copy h2{
                                        color: #9FFFF1;
                                        font-size: 50px;
                                        font-weight: 800;
                                        line-height: 120%;
                                        margin-bottom: 30px;
                                }
                                .inner-about .copy .txt{
                                        font-size: 17px;
                                        line-height: 150%;
                                }
                                .inner-about .copy .txt > *{
                                        margin-top: 25px;
                                }
                                .inner-about .copy .txt > *:first-child{
                                        margin: 0;
                                }
                                .inner-about .copy .txt b,
                                .inner-about .copy .txt strong{
                                        font-size: 20px;
                                        font-weight: 700;
                                }
                                .inner-about .heading{
                                        background: #5417A6;
                                        padding: 40px 0 30px;
                                }
                                .inner-about .heading .wrapper{
                                        max-width: 920px;
                                        justify-content: space-between;
                                }
                                .inner-about .heading span{
                                        color: #FFAC2C;
                                        font-size: 20px;
                                        text-transform: uppercase;
                                        flex:1;
                                        position: relative;
                                        top: 20px;
                                }
                                .inner-about .heading h2{
                                        color: #9FFFF1;
                                        font-size: 50px;
                                        font-weight: 800;
                                        line-height: 110%;
                                        flex:3.7;
                                }
                                .inner-about  .pair{
                                        background: #5417A6;
                                        color: #fff;
                                        padding-bottom: 30px;
                                }
                                .inner-about  .pair .wrapper{
                                        max-width: 970px;
                                }
                                .inner-about  .pair .rowflex{
                                        justify-content: space-between;
                                        align-items: center;
                                }
                                .inner-about  .pair .rowflex > *{
                                        flex: 49%;
                                        max-width: 49%;
                                }
                                .inner-about  .pair figure{
                                        text-align: center;
                                }
                                .inner-about  .pair.img-right figure{
                                        order: 2;
                                        text-align: left;
                                        max-width: 45%;
                                        flex: 45%;
                                }
                                .inner-about  .pair.img-right .caption{
                                        order: 1;
                                }
                                .inner-about  .pair .txt{
                                        font-size: 17px;
                                        line-height: 150%;
                                        text-align: justify;
                                }
                                .inner-about  .pair .txt > *{
                                        display: block;
                                        margin-top: 25px;
                                }
                                .inner-about  .pair .txt > *:first-child{
                                        margin: 0;
                                }
                                .inner-about  .pair .txt blockquote{
                                        color: #FFAC2C;
                                        font-size: 25px;
                                        font-weight: 700;
                                        line-height: 115%;
                                }
                                .inner-about  .pair .txt b,
                                .inner-about  .pair .txt strong{
                                        font-size: 22px;
                                        font-weight: 600;
                                }
                                .inner-about .person{
                                        position: relative;
                                        padding: 50px 0 40px;
                                        background: #f8f8f8;
                                }
                                .inner-about .person:before{
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                        width: 100%;
                                        height: 240px;
                                        z-index: 1;
                                        content: '';
                                        background: #5417a6;
                                        display: block;
                                }
                                .inner-about .person .wrapper{
                                        max-width: 925px;
                                        position: relative;
                                        z-index: 2;
                                }
                                .inner-about .person .rowflex{
                                        justify-content: center;
                                        margin: 0 -18px;
                                }
                                .inner-about .person .item{
                                        max-width: calc(33.3333333333333333333333% - 36px);
                                        flex: calc(33.3333333333333333333333% - 36px);
                                        margin: 0 18px 70px;
                                        text-align: center;
                                        padding-bottom: 45px;
                                        position: relative;
                                }
                                .inner-about .person .item h3{
                                        color: #5417A6;
                                        font-size: 18px;
                                        font-weight: 700;
                                        line-height: 130%;
                                        margin: 20px 0 5px;
                                }
                                .inner-about .person .item span{
                                        display: block;
                                        line-height: 130%;
                                        color: #AF8AE2;
                                        font-size: 17px;
                                        margin-bottom: 20px;
                                }
                                .inner-about .person .item span:after{
                                        background: #5417A6;
                                        height: 3px;
                                        width: 38px;
                                        margin: 10px auto 0;
                                        content: '';
                                        display: block;
                                }
                                .inner-about .person .item .txt{
                                        font-size: 16px;
                                        line-height: 140%;
                                        padding: 0 5px;
                                }
                                .inner-about .person .item .soc{
                                        text-align: center;
                                        position: absolute;
                                        left: 0;
                                        bottom: 0;
                                        width: 100%;
                                }
                                .inner-about .person .item .soc a{
                                        display: inline-block;
                                        vertical-align: middle;
                                        margin: 0 4px;
                                        width: 27px;
                                        height: 27px;
                                        opacity: 1;
                                        transition:opacity 0.2s ease-in;
                                }
                                .inner-about .person .item .soc a:hover{
                                        opacity: .7;
                                }
                                .inner-about .person .item .soc a.in{
                                        background-image: url('${InViolet}');
                                }
                                .inner-about .person .item .soc a.ml{
                                        background-image: url('${MailViolet}');
                                }
                                .inner-about .section-contact{
                                        padding-top: 80px;
                                }
                                /** INNER HOME **/
                                .inner-home .intro{
                                        padding: 50px 0 10px;
                                        background: #5417A6;
                                        text-align: center;
                                        position: relative;
                                }
                                .inner-home .intro:after{
                                        display: block;
                                        z-index: 1;
                                        position: absolute;
                                        width: 96.59722222222222vw;
                                        height: 29.23611111111111vw;
                                        background-image: url('${HomeBg}');
                                        right: 0;
                                        bottom: 0;
                                }
                                .inner-home .intro .wrapper{
                                        position: relative;
                                        z-index: 2;
                                }
                                .inner-home .intro .hentry{
                                        max-width: 500px;
                                        margin: 0 auto 50px;
                                }
                                .inner-home .intro .hentry > *{
                                        margin-top: 10px;
                                }
                                .inner-home .intro .hentry > *:first-child{
                                        margin: 0;
                                }
                                .inner-home .intro .hentry span{
                                        color: #F18B10;
                                        display: block;
                                        font-size: 48px;
                                        font-weight: 700;
                                }
                                .inner-home .intro .hentry b{
                                        background: #9FFFF1;
                                        line-height: 100%;
                                        color: #5417A6;
                                        font-weight: 700;
                                        font-size: 60px;
                                        display: inline-block;
                                        padding: 0 20px 5px;
                                }
                                .inner-home .intro .txt{
                                        color: #fff;
                                        max-width: 775px;
                                        margin: 0 auto;
                                        font-size: 17px;
                                        line-height: 160%;
                                }
                                .inner-home .intro .txt > *{
                                        margin-top: 25px;
                                }
                                .inner-home .intro .txt > *:first-child{
                                        margin: 0;
                                }
                                .inner-home .intro .txt b,
                                .inner-home .intro .txt strong{
                                        color: #9FFFF1;
                                        font-size: 22px;
                                }
                                .inner-home .intro a.cvr-bg{
                                        display: block;
                                        width: 30px;
                                        height: 67px;
                                        background-image: url('${ArrowDownWhite}');
                                        margin: 20px auto 0;
                                }
                                .inner-home  .branding {
                                        position: relative;
                                        padding: 30px 0;
                                        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+68,fafbff+100 */
                                        background: #ffffff; /* Old browsers */
                                        background: -moz-linear-gradient(top,  #ffffff 0%, #ffffff 68%, #fafbff 100%); /* FF3.6-15 */
                                        background: -webkit-linear-gradient(top,  #ffffff 0%,#ffffff 68%,#fafbff 100%); /* Chrome10-25,Safari5.1-6 */
                                        background: linear-gradient(to bottom,  #ffffff 0%,#ffffff 68%,#fafbff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#fafbff',GradientType=0 ); /* IE6-9 */
                                }
                                .inner-home  .branding:before{
                                        display: block;
                                        position: absolute;
                                        z-index: 1;
                                        content: '';
                                        left: 0;
                                        top: 0;
                                        width: 100%;
                                        height: 320px;
                                        background: #5417A6;
                                }
                                .inner-home  .branding .wrapper{
                                        position: relative;
                                        z-index: 2;
                                }
                                .inner-home  .branding .wrapper > h2{
                                        text-align: center;
                                        margin-bottom: 30px;
                                        color: #F18B10;
                                        font-size: 22px;
                                        font-weight:800;
                                        text-transform: uppercase;
                                        line-height: 130%;
                                        letter-spacing: 8px;
                                }
                                .inner-home .branding .item h2{
                                        text-align: center;
                                        color: #5417A6;
                                        font-weight: 800;
                                        font-size: 25px;
                                        text-transform: uppercase;
                                        margin:  0 0 30px;
                                }
                                .inner-home .branding .slider{
                                        max-width: 975px;
                                        margin: 0 auto;
                                        position: relative;
                                        background: #FFFFFF;
                                        border: 1px solid #F2F2F2;
                                        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.0236287);
                                        border-radius: 40px;
                                        padding: 35px 45px 25px;
                                        position: relative;
                                }
                                .inner-home .branding .slidenav{
                                        position: absolute;
                                        left: 0;
                                        top: 50%;
                                        -ms-transform: translateY(-50%);
                                        -webkit-transform: translateY(-50%);
                                        transform: translateY(-50%);
                                        width: 100%;
                                        padding: 0 40px;
                                }
                                .inner-home .branding .slidenav a{
                                        width: 29px;
                                        height: 14px;
                                        background-repeat: no-repeat;
                                        background-position: center top;
                                        background-attachment: scroll;
                                        -webkit-background-size: cover;
                                        -moz-background-size: cover;
                                        -o-background-size: cover;
                                        background-size: cover;
                                }
                                .inner-home .branding .slidenav a.prev{
                                        float: left;
                                        background-image: url('${ArrowLeftViolet}');
                                }
                                .inner-home .branding .slidenav a.next{
                                        float: right;
                                        background-image: url('${ArrowRightViolet}');
                                }
                                .inner-home .branding .rowflex{
                                        justify-content: space-between;
                                }
                                .inner-home .branding .col{
                                        text-align: center;
                                        max-width: 30%;
                                        flex: 30%;
                                }
                                .inner-home .branding .col figure{
                                        margin-bottom: 15px;
                                }
                                .inner-home .branding .col figure img{
                                        display: inline-block;
                                }
                                .inner-home .branding .col h3{
                                        color: #AF8AE2;
                                        font-size: 40px;
                                        line-height: 100%;
                                        margin: 0 0 1px;
                                        font-weight: 800;
                                }
                                .inner-home .branding .col h3 b{
                                        font-weight: 400;
                                }
                                .inner-home .branding .orange-color .col h3{
                                        font-size: 30px;
                                        color: #FF8224;
                                }
                                .inner-home .branding .col .txt{
                                        font-size: 17px;
                                        color: #3B455B;
                                }
                                .inner-home .branding .col .txt strong,
                                .inner-home .branding .col .txt b{
                                        display: block;
                                        font-weight: 800;
                                }
                                .inner-home .branding .slick-dots{
                                        margin-top: 10px;
                                }
                                .inner-home .solution{
                                        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#fafbff+0,f7f8ff+21,f7f8ff+64,fdfdff+100 */
                                        background: #fafbff; /* Old browsers */
                                        background: -moz-linear-gradient(top,  #fafbff 0%, #f7f8ff 21%, #f7f8ff 64%, #fdfdff 100%); /* FF3.6-15 */
                                        background: -webkit-linear-gradient(top,  #fafbff 0%,#f7f8ff 21%,#f7f8ff 64%,#fdfdff 100%); /* Chrome10-25,Safari5.1-6 */
                                        background: linear-gradient(to bottom,  #fafbff 0%,#f7f8ff 21%,#f7f8ff 64%,#fdfdff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fafbff', endColorstr='#fdfdff',GradientType=0 ); /* IE6-9 */
                                        padding: 30px 0 75px;
                                        position: relative;
                                }
                                .inner-home .solution:before{
                                        display: block;
                                        position: absolute;
                                        right: 0;
                                        bottom: 0;
                                        width: 100vw;
                                        height: 46.84027777777778vw;
                                        max-height: 625px;
                                        background-image: url('${SolutionBg}');
                                        background-position: top center;
                                }
                                .inner-home .solution .wrapper{
                                        max-width: 735px;
                                        position: relative;
                                        z-index: 2;
                                }
                                .inner-home .solution h2{
                                        color: #5417A6;
                                        font-size: 24px;
                                        font-weight: 800;
                                        line-height: 130%;
                                        text-align: center;
                                        margin: 0 0 30px;
                                }
                                .inner-home .solution .rowflex{
                                        margin: 0 -13px;
                                }
                                .inner-home .solution .item{
                                        max-width: calc( 50% - 26px);
                                        flex: calc(50% - 26px);
                                        margin: 0 13px 26px;
                                        background: #fff;
                                        border: 1px solid #F2F2F2;
                                        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.0236287);
                                        border-radius: 19px;
                                        padding: 25px 40px 70px 33px;
                                        position: relative;
                                }
                                .inner-home .solution .item figure{
                                        margin-bottom: 15px;
                                }
                                .inner-home .solution .item h3{
                                        color: #3B455B;
                                        font-size: 20px;
                                        font-weight: 600;
                                        line-height: 130%;
                                        margin-bottom: 7px;
                                }
                                .inner-home .solution .item .txt{
                                        font-size: 17px;
                                        font-weight: 300;
                                        line-height: 140%;
                                        color: #222A41;
                                }
                                .inner-home .solution .item .more{
                                        display: inline-block;
                                        position: absolute;
                                        left: 33px;
                                        bottom: 25px;
                                        color: #5417A6;
                                        font-size: 18px;
                                        font-weight: 600;
                                        border-bottom: 2px solid #5417A6;
                                        padding-bottom: 2px;
                                        line-height: 100%;
                                }
                                .inner-home .strategy .txt + a:after,
                                .inner-home .solution .item .more:after{
                                        width: 18px;
                                        height: 10px;
                                        background-image: url('${ArrowRightViolet2}');
                                        display: block;
                                        position: absolute;
                                        right: -29px;
                                        top: 7px;
                                        transition:right 0.2s ease-in;
                                }
                                .inner-home .strategy .txt + a:hover:after,
                                .inner-home .solution .item .more:hover:after{
                                        right: -33px;
                                }
                                .inner-home .solution .centered{
                                        padding-top: 15px;
                                }
                                .inner-home .strategy{
                                        background: #F18B10;
                                        padding: 25px 0 35px;
                                        color: #fff;
                                }
                                .inner-home .strategy .rowflex{
                                        justify-content: space-between;
                                        align-items: center;
                                }
                                .inner-home .strategy figure{
                                        max-width: 36.5%;
                                        flex: 36.5%;
                                }
                                .inner-home .strategy .caption{
                                        max-width: 58.5%;
                                        flex: 58.5%;
                                }
                                .inner-home .strategy h2{
                                        font-size: 35px;
                                        font-weight: 800;
                                        line-height: 130%;
                                        margin-bottom: 20px;
                                }
                                .inner-home .strategy h2:after{
                                        display: block;
                                        width: 42px;
                                        height: 3px;
                                        background: #fff;
                                        content: '';
                                        margin: 15px 0 0;
                                }
                                .inner-home .strategy .txt{
                                        line-height: 150%;
                                        max-width: 460px;
                                }
                                .inner-home .strategy .txt > *{
                                        margin-top: 25px;
                                }
                                .inner-home .strategy .txt > *:first-child{
                                        margin: 0;
                                }
                                .inner-home .strategy .txt b,
                                .inner-home .strategy .txt strong{
                                        font-weight: 700;
                                        font-size: 24px;
                                }
                                .inner-home .strategy .txt + a{
                                        margin-top: 30px;
                                        display: inline-block;
                                        line-height: 100%;
                                        position: relative;
                                        color: #5417A6;
                                        font-size: 25px;
                                        font-weight: 700;
                                        padding-bottom: 1px;
                                        border-bottom: 1px solid #5417A6;
                                }
                                .inner-home .strategy .txt + a:after{
                                        top: 12px;
                                }
                                .inner-home .case{
                                        padding: 55px 0;
                                }
                                .inner-home .case .hentry{
                                        margin-bottom: 40px;
                                }
                                .inner-home .case .hentry h2{
                                        float: left;
                                        color: #5417A6;
                                        font-size: 24px;
                                        font-weight: 800;
                                }
                                .inner-home .case .hentry a {
                                        float: right;
                                        color: #33CCFF;
                                        font-size: 15px;
                                        font-weight: 800;
                                        text-transform: uppercase;
                                        letter-spacing: 0.63px;
                                        position: relative;
                                        top: 6px;
                                }
                                .inner-home .case .hentry a:hover{
                                        text-decoration: underline;
                                }
                                .inner-home .case .rowflex{
                                        margin: 0 -12px;
                                }
                                .inner-home .case .item{
                                        flex: calc(50% - 24px);
                                        max-width: calc(50% - 24px);
                                        margin: 0 12px 24px;
                                        background: #FFFFFF;
                                        border: 1px solid #E2E2E2;        
                                        border-radius: 19px;
                                        overflow: hidden;
                                        display: flex;
                                        justify-content: space-between;
                                }
                                .inner-home .case .item figure{
                                        max-width: 36.62%;
                                        flex: 36.62%;
                                }
                                .inner-home .case .item .caption{
                                        flex: 63%;
                                        max-width: 63%;
                                        padding:30px 30px 10px;
                                }
                                .inner-home .case .item h3{
                                        color: #5417A6;
                                        font-size: 22px;
                                        font-weight: 700;
                                        line-height: 130%;
                                        max-width: 200px;
                                        margin:  0 0 15px;
                                }
                                .inner-home .case .item h3 a{
                                        color: #5417A6;
                                        transition:color 0.2s ease-in;
                                }
                                .inner-home .case .item h3 a:hover{
                                        color: #FFAC2C;
                                }
                                .inner-home .case .item .txt{
                                        line-height: 150%;
                                        font-size: 17px;
                                        margin-bottom: 20px;
                                }
                                .inner-home .testi{
                                        padding: 25px 0 50px;
                                        overflow: hidden;
                                }
                                .inner-home .client .rowflex,
                                .inner-home .testi .rowflex{
                                        justify-content: space-between;
                                        align-items: center;
                                }
                                .inner-home .testi .info{
                                        max-width: 25%;
                                        flex: 25%;
                                }
                                .inner-home .client .info h2,
                                .inner-home .testi .info h2{
                                        color: #5417A6;
                                        font-size: 28px;
                                        font-weight: 800;
                                        line-height: 120%;
                                        margin-bottom: 20px;
                                }
                                .inner-home .client .info .txt,
                                .inner-home .testi .holder .item .txt,
                                .inner-home .testi .info .txt{
                                        font-size: 17px;
                                        font-weight: 300;
                                        line-height: 140%;
                                        margin-bottom: 40px;
                                        color: #222A41;
                                }
                                .inner-home .testi .holder{
                                        max-width: 70%;
                                        flex: 70%;
                                }
                                .inner-home .testi .slider{
                                        margin-right: -50vw;
                                }
                                .inner-home .testi .slick-track{
                                        display: flex;
                                }
                                .inner-home .testi .holder .slick-slide{
                                        max-width: 355px;
                                        flex: 355px;
                                        height: auto;
                                        float: none;
                                        margin-right: 22px;
                                        background: #FFFFFF;
                                        border: 1px solid #EAEAEA;
                                        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.0236287);
                                        border-radius: 19px;
                                        overflow: hidden;
                                        padding: 40px 35px 85px;
                                        position: relative;
                                }
                                .inner-home .client .info .txt,
                                .inner-home .testi .holder .item .txt{
                                        margin: 0;
                                }
                                .inner-home .testi .holder .item .author{
                                        position: absolute;
                                        left: 35px;
                                        bottom: 20px;
                                }
                                .inner-home .testi .holder .item .author h3{
                                        color: #5417A6;
                                        font-size: 16px;
                                        font-weight: 300;
                                        line-height: 130%;
                                        margin: 0 0 2px;
                                }
                                .inner-home .testi .holder .item .author span{
                                        color: #293340;
                                        font-size: 13px;
                                        font-weight: 300;
                                        display: block;
                                        line-height: 125%;
                                        max-width: 220px;
                                        opacity: .6;
                                }
                                .inner-home .client{
                                        padding: 50px 0 80px;
                                }
                                .inner-home .client .rowflex{
                                        align-items: flex-start;
                                }
                                .inner-home .client .info{
                                        max-width: 27%;
                                        flex: 27%;
                                }
                                .inner-home .client .icons{
                                        flex: 68%;
                                        max-width: 68%;
                                        text-align: center;
                                }
                                .inner-home .client .icons figure{
                                        display: inline-block;
                                        vertical-align: middle;
                                        margin: 0 22px 50px;
                                        text-align: center;
                                }
                                .inner-home .client .icons figure img{
                                        transition:all 0.2s ease-in;
                                        opacity: 1;
                                }
                                .inner-home .client .icons figure:not(:hover) img{
                                        filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
                                        filter: gray;
                                        -webkit-filter: grayscale(100%);
                                        -webkit-transition: all .6s ease;
                                        -webkit-backface-visibility: hidden;
                                        opacity: .8;
                                }
                                .inner-home .cta{
                                        margin-bottom: 80px;
                                        text-align: center;
                                }
                                .inner-home .cta .layer{
                                        background-image: url('${CtaBg}');
                                        background-position: bottom right;
                                        border-radius: 15px;
                                        overflow: hidden;
                                        color: #fff;
                                        padding: 80px 20px 75px;
                                }
                                .inner-home .cta .layer .button{
                                        min-width: 250px;
                                }
                                .inner-home .cta .layer h2{
                                        font-size: 28px;
                                        line-height: 130%;
                                        margin-bottom: 20px;
                                        text-transform: uppercase;
                                }
                                .inner-home .cta .layer p{
                                        font-size: 18px;
                                        margin-bottom: 45px;
                                }
                                /** DETAIL CASE **/
                                .detail-case{
                                        padding-top: 20px;
                                }
                                .detail-case .heading {
                                        padding-bottom: 50px;
                                }
                                .detail-case .heading .wrapper{
                                        max-width: 920px;
                                        position: relative;
                                }
                                .detail-case .copycon .wrapper{
                                        max-width: 855px;
                                }
                                .detail-case .heading .caption{
                                        float: left;
                                        max-width: 700px;
                                }
                                .detail-case .heading span{
                                        display: block;
                                        color: #F18B10;
                                        font-size: 20px;
                                        line-height: 100%;
                                        display: block;
                                        margin-bottom: 20px;
                                        text-transform: uppercase;
                                }
                                .detail-case .heading h2{
                                        color: #21282F;
                                        font-size: 40px;
                                        line-height: 120%;
                                }
                                .detail-case .heading figure{
                                        position: absolute;
                                        top: 50%;
                                        -ms-transform: translateY(-50%);
                                        -webkit-transform: translateY(-50%);
                                        transform: translateY(-50%);
                                        right: 0;
                                }
                                .detail-case .section{
                                        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f8f8f8+0,f8f8f8+36,f9f9f9+37,ffffff+37,ffffff+100 */
                                        background: #f8f8f8; /* Old browsers */
                                        background: -moz-linear-gradient(top,  #f8f8f8 0%, #f8f8f8 36%, #f9f9f9 37%, #ffffff 37%, #ffffff 100%); /* FF3.6-15 */
                                        background: -webkit-linear-gradient(top,  #f8f8f8 0%,#f8f8f8 36%,#f9f9f9 37%,#ffffff 37%,#ffffff 100%); /* Chrome10-25,Safari5.1-6 */
                                        background: linear-gradient(to bottom,  #f8f8f8 0%,#f8f8f8 36%,#f9f9f9 37%,#ffffff 37%,#ffffff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8f8f8', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
                                        padding: 40px 0 50px;
                                }
                                .detail-service .copycon .rowflex,
                                .detail-case .copycon .rowflex{
                                        justify-content: space-between;
                                        padding: 40px 50px 0 0;
                                        margin-top: 40px;
                                        border-top: 1px solid #5417A6;
                                        position: relative;
                                        left: 60px;
                                }
                                .detail-service .copycon .rowflex{
                                        left: auto;
                                        padding-left: 30px;
                                        padding-right: 120px;
                                }
                                .detail-service .section > *:not(.copycon) + .copycon .rowflex,
                                .detail-service .copycon:first-child .rowflex,
                                .detail-case .section > *:not(.copycon) + .copycon .rowflex,
                                .detail-case .copycon:first-child .rowflex{
                                        padding-top: 0;
                                        margin-top: 0;
                                        border-top: none;
                                }
                                .detail-service .section > *:not(.copycon) + .copycon,
                                .detail-service .section > .banner:not(:first-child),
                                .detail-service .section > .heading:not(:first-child),
                                .detail-service .section > .gallery:not(:first-child),
                                .detail-service .section > .vidbanner:not(:first-child),
                                .detail-case .section > *:not(.copycon) + .copycon,
                                .detail-case .section > .banner:not(:first-child){
                                        margin-top: 60px;
                                }
                                .detail-service .copycon figure{
                                        max-width: 19%;
                                        flex: 19%;
                                }
                                .detail-case .copycon figure{
                                        max-width: 19.4%;
                                        flex: 19.4%;
                                }
                                .detail-service .copycon .caption{
                                        max-width: 77%;
                                        flex: 77%;
                                }
                                .detail-case .copycon .caption{
                                        max-width: 75%;
                                        flex: 75%;

                                }
                                .detail-service .copycon h3,
                                .detail-case .copycon h3{
                                        display: inline-block;
                                        line-height: 100%;
                                        color: #fff;
                                        font-weight: 600;
                                        font-size: 25px;
                                        padding: 3px 12px 6px;
                                        background: #5417A6;
                                        margin: 0 0 15px;
                                }
                                .detail-service .copycon .txt,
                                .detail-case .copycon .txt{
                                        text-align: justify;
                                        color: #616161;
                                        font-size: 17px;
                                        line-height: 140%;
                                }
                                .detail-service .copycon .txt > *,
                                .detail-case .copycon .txt > *{
                                        margin-top: 20px;
                                }
                                .detail-service .copycon .txt > *:first-child,
                                .detail-case .copycon .txt > *:first-child{
                                        margin-top: 0;
                                }
                                .detail-service .copycon .txt a,
                                .detail-case .copycon .txt a{
                                        color: #33CCFF;
                                }
                                .detail-service .copycon .txt a:hover,
                                .detail-case .copycon .txt a:hover{
                                        text-decoration: underline;
                                }
                                .detail-case .banner img{
                                        display: block;
                                        width: 100%;
                                }
                                .detail-service .vidbanner a,
                                .detail-case .banner a{
                                        display: block;
                                        position: relative;
                                }
                                .detail-service .vidbanner a:after,
                                .detail-case .banner a:after{
                                        width: 0;
                                        height: 0;
                                        border-style: solid;
                                        border-width: 52.5px 0 52.5px 90px;
                                        border-color: transparent transparent transparent #ffffff;
                                        display: block;
                                        position: absolute;
                                        left: calc(50% - 45px);
                                        top: 50%;
                                        -ms-transform: translateY(-50%);
                                        -webkit-transform: translateY(-50%);
                                        transform: translateY(-50%);
                                        content: '';
                                }
                                .detail-service .copycon .wrapper{
                                        max-width: 980px;
                                }
                                .detail-service .section{
                                        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+17,fdfcff+17,fdfcff+100 */
                                        background: #ffffff; /* Old browsers */
                                        background: -moz-linear-gradient(top,  #ffffff 0%, #ffffff 17%, #fdfcff 17%, #fdfcff 100%); /* FF3.6-15 */
                                        background: -webkit-linear-gradient(top,  #ffffff 0%,#ffffff 17%,#fdfcff 17%,#fdfcff 100%); /* Chrome10-25,Safari5.1-6 */
                                        background: linear-gradient(to bottom,  #ffffff 0%,#ffffff 17%,#fdfcff 17%,#fdfcff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#fdfcff',GradientType=0 ); /* IE6-9 */
                                        padding: 50px 0;
                                }
                                .detail-service  .intro .wrapper{
                                        max-width: 785px;
                                        text-align: center;
                                }
                                .detail-service  .intro .hentry{
                                        margin-bottom: 30px;
                                }
                                .detail-service  .intro .hentry span{
                                        display: block;
                                        color: #AF8AE2;
                                        font-size: 16px;
                                        font-weight: 300;
                                        line-height: 100%;
                                        margin-bottom: 15px;
                                }
                                .detail-service  .intro .hentry h2{
                                        color: #5417A6;
                                        font-size: 30px;
                                        line-height: 130%;
                                }
                                .detail-service  .intro .txt{
                                        font-size: 19px;
                                        font-weight: 300;
                                        line-height: 140%;
                                        color: #3B455B;
                                }
                                .detail-service  .intro .txt > *{
                                        margin-top: 25px;
                                }
                                .detail-service  .intro .txt > *:first-child{
                                        margin: 0;
                                }
                                .detail-service  .intro .txt b,
                                .detail-service  .intro .txt strong{
                                        font-weight: 700;
                                        font-size: 22px;
                                }
                                .detail-service  .intro .txt blockquote{
                                        color: #33CCFF;
                                        font-size: 22px;
                                        font-weight: 800;
                                        line-height: 130%;
                                }
                                .detail-service .heading .layer{
                                        background-repeat: no-repeat;
                                        background-position: center top;
                                        background-attachment: scroll;
                                        -webkit-background-size: cover;
                                        -moz-background-size: cover;
                                        -o-background-size: cover;
                                        background-size: cover;
                                        position: relative;
                                        color: #9FFFF1;
                                        text-align: center;
                                        padding: 130px 20px 140px;
                                }
                                .detail-service .heading .layer:after{
                                        display: block;
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                        width: 100%;
                                        height: 100%;
                                        background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.56) 100%);
                                        mix-blend-mode: normal;
                                        content: '';
                                        z-index: 1;
                                }
                                .detail-service .heading .layer > *{
                                        position: relative;
                                        z-index: 2;
                                }
                                .detail-service .heading span{
                                        text-transform: uppercase;
                                        font-size: 24px;
                                        font-weight: 500;
                                        line-height: 100%;
                                        margin-bottom: 27px;
                                        display: block;
                                }
                                .detail-service .heading h2{
                                        font-weight: 800;
                                        font-size: 35px;
                                        line-height: 130%;
                                }
                                .detail-service .heading a{
                                        display: inline-block;
                                        color: #fff;
                                        font-size: 20px;
                                        padding-bottom: 1px;
                                        border-bottom: 1px solid #fff;
                                        margin-top: 35px;
                                }
                                .detail-service .banner .wrapper{
                                        max-width: 900px;
                                }
                                .detail-service .vidbanner .wrapper{
                                        max-width: 730px;
                                }
                                .detail-service .section > .gallery + .gallery{
                                        margin-top: 29px;
                                }
                                .detail-service .gallery .rowflex{
                                        justify-content: space-between;
                                }
                                .detail-service .gallery .wrapper{
                                        max-width: 865px;
                                }
                                .detail-service .gallery figure img{
                                        display: block;
                                        width: 100%;
                                }
                                .detail-service .gallery.col-4-5 figure{
                                        max-width: 50.05%;
                                        flex: 50.05%;
                                }
                                .detail-service .gallery.col-4-5 figure:first-child{
                                        max-width: 45.65%;
                                        flex: 45.65%;
                                }
                                .detail-service .gallery.col-2-4 figure{
                                        max-width: 65.8%;
                                        flex: 65.8%;
                                }
                                .detail-service .gallery.col-2-4 figure:first-child{
                                        max-width: 29.88%;
                                        flex: 29.88%;
                                }
                                .detail-service .gallery.col-full figure{
                                        max-width: 100%;
                                        flex: 100%;
                                }
                                .form-basic style,
                                .wpcf7-not-valid-tip,
                                .form-basic p:empty{
                                        display: none;
                                }
                                .form-basic .wpcf7-list-item{
                                        margin: 0;
                                }
                                .wpcf7 form .wpcf7-response-output{
                                        font-size: 14px;
                                        line-height: 140%;
                                        font-weight: 300;
                                        padding: 20px;
                                        margin: 30px 0 0;
                                        padding: 15px;
                                }
                                .wpcf7-not-valid:not(.wpcf7-select){
                                        border-bottom:  1px solid #ff0000 !important;
                                }
                                .form-basic span.wpcf7-form-control-wrap{
                                        display: block;
                                        position: relative;
                                }
                                .form-basic span.wpcf7-form-control-wrap > span{
                                        position: absolute;
                                        width: 100%;
                                        height: 1px;
                                        background: red;
                                        color: rgba(0,0,0,0);
                                        display: block;
                                        left: 0;
                                        bottom: 0;
                                }
                                .form-basic span.wpcf7-form-control-wrap > select + span{
                                        bottom: -10px;
                                }

                                /* MEDIA QUERY FOR WEBKIT BASED BROWSER **/
                                @media screen and (-webkit-min-device-pixel-ratio:0) {

                                }

                                /* MEDIA QUERY FOR GECKO BASED BROWSER **/
                                @-moz-document url-prefix(){
                                        
                                }

                                .mobile-trigger{
                                        display: none;
                                }
                                @media (min-width: 1399px) {
                                        .inner-home .testi .holder .slick-slide,
                                        .inner-testi .caro .slick-slide{
                                                width: auto;
                                                max-width: 100%;
                                        }
                                        .inner-home .testi .holder .slider,
                                        .inner-testi .caro .slick-list{
                                                margin: 0;
                                        }
                                }
                                @media (max-width: 1174px) {
                                        .wrapper{
                                                max-width: 100% !important;
                                                padding-left: 30px;
                                                padding-right: 30px;
                                        }
                                        #top .logo, #top .mainmenu{
                                                display: block;
                                                width: 100%;
                                        }
                                        .mainmenu li:first-child{
                                                margin: 0;
                                        }
                                        #top .mainmenu{
                                                position: relative;
                                                margin-top: 20px;
                                        }
                                        #top .mainmenu li.btn{
                                                position: absolute;
                                                right: 0;
                                                top: -55px;
                                        }
                                        .footer-widget .col {
                                                max-width: calc(20% - 40px);
                                                flex: calc(20% - 40px);
                                        }
                                        .footer-widget .col:last-child{
                                                flex: 100%;
                                                max-width: 100%;
                                        }
                                        .inner-about .heading h2{
                                                font-size: 40px;
                                                padding-left: 20px;
                                                flex: 3;
                                        }
                                        .inner-blog .filter-cat label{
                                                margin-left: 30px;
                                        }
                                        .detail-case .heading figure{
                                                right: 30px;
                                        }
                                        .detail-case .copycon .rowflex{
                                                left: auto;	
                                        }
                                }
                                
                                @media (max-width: 991px) {
                                        .inner-testi .caro .hentry.orn2:after,
                                        .inner-testi .caro .hentry.orn1:after{
                                                display: none;
                                        }
                                        .inner-testi .contact-general{
                                                padding: 60px 105px;
                                        }
                                        .filter-cat .scrollx{
                                                margin: 0 -30px 0 0;
                                                overflow: scroll;
                                                scrollbar-width: none; 
                                                -ms-overflow-style: none;  
                                        }
                                        .filter-cat .scrollx::-webkit-scrollbar{
                                                width: 0;
                                                height: 0;
                                        }
                                        .filter-cat .scrollx .wrap{
                                                margin: 0;
                                                display: inline-flex;
                                                max-width: none;
                                                overflow: scroll;
                                                width: auto;
                                                flex-wrap: nowrap;
                                        }
                                        .filter-cat .scrollx .wrap label{
                                                min-width: 230px;
                                                max-width: 230px;
                                                margin: 0 30px 0 0;
                                        }
                                        .inner-blog .search form label,
                                        .inner-blog .search form fieldset{
                                                max-width: 100%;
                                                flex:100%;
                                                top: auto;
                                        }
                                        .inner-blog .search form label{
                                                margin-bottom: 15px;
                                        }
                                        .inner-blog .blog-list{
                                                margin: 0 -15px;
                                        }
                                        .inner-blog .blog-list .item {
                                                max-width: calc(50% - 30px);
                                                flex: calc(50% - 30px);
                                                margin: 0 15px 50px;
                                        }
                                        .inner-home .case .rowflex{
                                                margin: 0;
                                        }
                                        .inner-home .case .item{
                                                flex: 100%;
                                                max-width: 545px;
                                                margin: 0 auto 30px;
                                        }
                                        .inner-home .client .icons,
                                        .inner-home .client .info,
                                        .inner-home .testi .info,
                                        .inner-home .testi .holder{
                                                flex: 100%;
                                                max-width: 100%;
                                        }
                                        .inner-home .client .info,
                                        .inner-home .testi .info{
                                                margin-bottom: 30px;
                                        }
                                        .blog-section .rowflex{
                                                padding: 0;
                                        }
                                        .inner-service .solution .hentry span, .inner-service .client .hentry h2 span{
                                                display: block;
                                                margin: 0 0 15px;
                                                top: auto;
                                                line-height: 100%;
                                        }
                                        .detail-case .copycon .rowflex,
                                        .detail-service .copycon .rowflex{
                                                padding-left: 0;
                                                padding-right: 0;
                                        }
                                        .detail-case .heading figure{
                                                position: relative;
                                                right: auto;
                                                top: auto;
                                                -ms-transform: translateY(0%);
                                                -webkit-transform: translateY(0%);
                                                transform: translateY(0%);
                                                margin: 0 0 30px;
                                        }
                                }
                                @media only screen and (min-width: 769px) and (max-width: 991px)  {
                                
                                }
                                @media (max-width: 768px) {
                                        .inner-about .heading h2 br,
                                        .detail-case .heading h2 br,
                                        .inner-case .intro:before,
                                        .detail-service .heading h2 br,
                                        .inner-home .intro:after{
                                                display: none;
                                        }
                                        #top .mainmenu{
                                                margin: 0;
                                                opacity: 0;
                                                visibility: hidden;
                                                transition:all 0.3s ease-in;
                                                position: absolute;
                                                top: 50px;
                                                left: 0;
                                                width: 100%;
                                                background: #fff;
                                                z-index: 9;
                                                padding: 50px 15px;
                                        }
                                        .open-menu #top .mainmenu{
                                                opacity: 1;
                                                visibility: visible;
                                        }
                                        body.page-testi #top .mainmenu{
                                                background: #f2f2f2;
                                        }
                                        #shell.violet-bg #top .mainmenu{
                                                background: #5417A6;
                                        }
                                        .mainmenu li{
                                                display: block;
                                                margin: 30px 0 0;
                                                text-align: center;
                                        }
                                        #top .mainmenu li.btn{
                                                position: relative;
                                                right: auto;
                                                top: auto;
                                        }
                                        .mobile-trigger{
                                                float: right;
                                                position: relative;
                                                z-index: 2;
                                                display: block;
                                        }
                                        .menu-mobile{
                                                width: 20px;
                                                height: 15px;
                                                position: relative;
                                                display: inline-block;
                                                top: 3px;
                                        }
                                        .menu-mobile .menu-bar b:after,
                                        .menu-mobile .menu-bar b:before,
                                        .menu-mobile .menu-bar b{
                                                position: absolute;
                                                width: 100%;
                                                height: 2px;
                                                left: 0;
                                                top: 6px;
                                                background: #5417A6;
                                                display: block;
                                        }
                                        .violet-bg .menu-mobile .menu-bar b:after,
                                        .violet-bg .menu-mobile .menu-bar b:before,
                                        .violet-bg .menu-mobile .menu-bar b{
                                                background: #fff;
                                        }
                                        .menu-mobile .menu-bar b{
                                                -webkit-transition:background 300ms ;
                                                -moz-transition:background 300ms ;
                                                -o-transition:background 300ms ;
                                                -ms-transition:background 300ms ;
                                                transition:background 300ms ;
                                        }
                                        .menu-mobile .menu-bar b:after,
                                        .menu-mobile .menu-bar b:before{
                                                content: '';
                                                -webkit-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
                                                -moz-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
                                                -o-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
                                                -ms-transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
                                                transition:top 300ms 300ms, transform 300ms 0ms, -webkit-transform 300ms 0ms, background 300ms;
                                        }
                                        
                                        .menu-mobile .menu-bar b:after{
                                                top: 6px;
                                        }
                                        .menu-mobile .menu-bar b:before{
                                                top: -6px;
                                        }
                                        .open-menu .menu-mobile  .menu-bar b:after,
                                        .open-menu .menu-mobile  .menu-bar b:before{
                                                top:0;
                                                -webkit-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
                                                -moz-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
                                                -o-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
                                                -ms-transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
                                                transition:top 300ms 0ms, transform 300ms 300ms, -webkit-transform 300ms 300ms, background 300ms;
                                                left: 0;
                                        }
                                        .open-menu .menu-mobile  .menu-bar b{
                                                background: rgba(0,0,0,0);
                                        }
                                        .open-menu .menu-mobile  .menu-bar b:after{
                                            -ms-transform: rotate(45deg); /* IE 9 */
                                            -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
                                            transform: rotate(45deg);
                                        }
                                        .open-menu .menu-mobile  .menu-bar b:before{
                                            -ms-transform: rotate(-45deg); /* IE 9 */
                                            -webkit-transform: rotate(-45deg); /* Chrome, Safari, Opera */
                                            transform: rotate(-45deg);
                                        }
                                        #top .logo{
                                                float: left;
                                                width: auto;
                                        }
                                        .inner-about .section-contact{
                                                padding-top: 40px;
                                        }
                                        .inner-blog,
                                        #body{
                                                padding-top: 30px;
                                        }
                                        .inner-home .branding{
                                                padding-top: 10px;
                                        }
                                        .inner-testi .contact-general,
                                        .inner-contact .layer{
                                                padding: 30px;
                                        }
                                        .inner-contact .layer > h3{
                                                margin-bottom: 30px;
                                                line-height: 120%;
                                        }
                                        .form-basic .gap > *{
                                                flex: 100%;
                                                max-width: 100%;
                                                margin-top: 20px;
                                        }
                                        .detail-service .copycon .txt > *,
                                        .detail-case .copycon .txt > *,
                                        .detail-service .intro .txt > *,
                                        .inner-service .solution .wr,
                                        .inner-service .client .copytxt .txt > *,
                                        .inner-service .copy .txt > *,
                                        .inner-service .client .copytxt .txt,
                                        .inner-service .copy .txt,
                                        .inner-home .strategy .txt > *,
                                        .inner-home .intro .txt > *,
                                        .inner-about .copy .txt > *{
                                                margin-top: 15px;
                                        }
                                        
                                        .widget li,
                                        .widget_social .sc,
                                        .form-basic form > *{
                                                margin-top: 20px;
                                        }
                                        .inner-service .client .list{
                                                margin-top: 30px;
                                        }
                                        .detail-service .intro .txt > *:first-child,
                                        .inner-home .strategy .txt > *:first-child,
                                        .inner-home .intro .txt > *:first-child,
                                        .inner-about .copy .txt > *:first-child,
                                        #bottom .location,
                                        #bottom .footer-widget,
                                        .footer-widget .rowflex,
                                        .form-basic .gap > *:first-child,
                                        .form-basic form > *:first-child{
                                                margin: 0;
                                        }
                                        #bottom .location .widget,
                                        .footer-widget .col {
                                                flex: 100% !important;
                                                max-width: 100% !important;
                                                margin: 0 0 50px !important;
                                                text-align: center;
                                        }
                                        .widget_social strong{
                                                max-width: none;
                                        }
                                        #bottom{
                                                padding: 50px 0 30px;
                                        }
                                        .inner-testi .section-contact,
                                        .inner-contact{
                                                padding-bottom: 60px;
                                        }
                                        #bottom .tribute p{
                                                top: 6px;
                                        }
                                        .detail-case .heading span,
                                        .inner-home .cta .layer h2,
                                        .inner-home .client .info h2, .inner-home .testi .info h2,
                                        .inner-home .case .item h3,
                                        .inner-testi .caro .item figure{
                                                margin-bottom: 10px;
                                        }
                                        .inner-case .intro span,
                                        .inner-home .case .item .txt,
                                        .inner-blog .filter-cat span, .inner-blog .subscribe span,
                                        .inner-testi .caro .hentry span{
                                                margin-bottom: 15px;
                                        }
                                        
                                        .detail-service .heading span,
                                        .inner-service .copy figure,
                                        .inner-home .client .info .txt,
                                        .inner-home .testi .holder .item .txt,
                                        .inner-home .testi .info .txt,
                                        .inner-home .case .hentry,
                                        .inner-home .solution h2,
                                        .inner-blog .subscribe h2,
                                        .inner-about .copy h2,
                                        .widget-title{
                                                margin-bottom: 20px;
                                        }
                                        .detail-case .copycon figure,
                                        .detail-service .copycon figure,
                                        .inner-service .solution .hentry,
                                        .inner-service .client .copytxt figure,
                                        .blog-section .rowflex .item:first-child,
                                        .inner-home .cta .layer p,
                                        .inner-home .intro .hentry,
                                        .inner-blog .filter-cat,
                                        .inner-blog .subscribe,
                                        .contact-general .hentry,
                                        .inner-testi .caro .hentry{
                                                margin-bottom: 30px;
                                        }
                                        .inner-blog .search,
                                        .inner-testi .caro{
                                                margin-bottom: 50px;
                                        }
                                        .inner-testi .caro .slick-slide{
                                                padding: 20px 25px 80px;
                                                max-width: 300px;
                                                width: 300px;
                                                flex: 300px;
                                        }
                                        .inner-testi .caro .item .author{
                                                left: 25px;
                                                bottom: 20px;
                                                width: calc(100% - 50px);
                                        }
                                        .inner-case .story .item:nth-of-type(3),
                                        .inner-case .story .item:nth-of-type(2),
                                        .inner-case .story .item,
                                        .detail-case .copycon figure,
                                        .detail-case .copycon .caption,
                                        .detail-service .copycon figure,
                                        .detail-service .copycon .caption,
                                        .inner-service .solution figure,
                                        .inner-service .solution .caption,
                                        .inner-service .client .copytxt figure,
                                        .inner-service .client .copytxt .caption,
                                        .inner-service .copy .caption,
                                        .inner-service .copy figure,
                                        .blog-section .rowflex .item,
                                        .inner-home .strategy .caption,
                                        .inner-home .strategy figure,
                                        .inner-home .solution .item,
                                        .inner-blog .blog-list .item ,
                                        .inner-about .person .item,
                                        .inner-about .pair.img-right figure,
                                        .inner-about .pair .rowflex > *,
                                        .inner-about .heading span,
                                        .inner-about .heading h2,
                                        .inner-about .copy figure,
                                        .inner-about .copy .caption{
                                                flex: 100%;
                                                max-width: 100%;
                                        }
                                        .inner-service .solution figure,
                                        .inner-about .heading span{
                                                top: auto;
                                                margin: 0 0 20px;
                                        }
                                        .detail-service .heading .wrapper,
                                        .inner-about .heading h2{
                                                padding: 0;
                                        }
                                        .inner-about .copy{
                                                padding: 50px 0 20px;
                                        }
                                        .inner-about .pair .rowflex{
                                                display: block;
                                        }
                                        
                                        .inner-home .strategy figure,
                                        .inner-home .solution .item,
                                         .inner-about .copy figure,
                                        .inner-about .pair.img-right figure,
                                        .inner-about .pair figure{
                                                text-align: center;
                                                margin: 0 0 30px;
                                                top: auto;
                                        }
                                        .detail-case .copycon figure img,
                                        .detail-service .copycon figure img{
                                                max-width: 35%;
                                        }
                                        .inner-home .testi .info .slidenav a.next, 
                                        .inner-home .solution .rowflex,
                                        .inner-blog .blog-list,
                                        .inner-about .person .rowflex{
                                                margin: 0;
                                        }
                                        .inner-about .person .item{
                                                margin: 0 0 50px;
                                        }
                                        .inner-about .person{
                                                padding-bottom: 0;
                                        }
                                        .inner-blog .search form button{
                                                transform: scale(.6);
                                                right: 0;
                                                top: -3px;
                                        }
                                        .inner-blog .subscribe form button{
                                                transform: scale(.6);
                                                right: -11px;
                                                top: -5px;
                                        }
                                        .inner-blog .search form input, .inner-blog .subscribe form input{
                                                padding:  0 50px 10px 0;
                                        }
                                        .filter-cat .scrollx .wrap label{
                                                min-width: 200px;
                                                text-align: center;
                                                max-width: none;
                                                margin: 0 10px 0 0;
                                        }
                                        .inner-blog .blog-list .item{
                                                margin: 0 0 30px;
                                        }
                                        .inner-blog:before{
                                                height: 750px;
                                        }
                                        .detail-service .vidbanner a:after, .detail-case .banner a:after{
                                                border-width: 20px 0 20px 34px;
                                                left: calc(50% - 17px);
                                        }
                                        .inner-home .intro a.cvr-bg{
                                                transform: scale(.5);
                                        }
                                        .inner-home .branding .slider{
                                                padding: 25px;
                                                border-radius: 20px;
                                        }
                                        .inner-home .branding .slidenav{
                                                padding: 0 15px;
                                        }
                                        .inner-home .branding .col{
                                                flex: 100%;
                                                max-width: 100%;
                                                margin: 0 0 30px;
                                        }
                                        .inner-home .solution .item .more{
                                                position: relative;
                                                left: auto;
                                                bottom: auto;
                                                margin: 20px 0 0;
                                        }
                                        .inner-home .solution .item{
                                                padding: 25px 25px 30px;;
                                        }
                                        .inner-home .solution .centered .button{
                                                letter-spacing: 1px;
                                                padding:  0 30px;
                                        }
                                        .inner-home .strategy .txt + a:after{
                                                top: 7px;
                                        }
                                        .inner-home .strategy h2{
                                                line-height: 120%;
                                        }
                                        .inner-home .case .item .caption{
                                                padding: 15px 15px 10px 20px;
                                        }
                                        .inner-home .case .item .txt + img{
                                                max-width: 50%;
                                        }
                                        .inner-home .case .item figure a{
                                                display: block;
                                                padding: 15px 0 0 15px;
                                        }
                                        .inner-home .case .item{
                                                border-radius: 15px;
                                        }
                                        .inner-home .case .item figure img{
                                                border-radius: 10px;
                                        }
                                        
                                        .inner-home .case{
                                                padding: 30px 0 10px;
                                        }
                                        .inner-home .testi .info .slidenav a{
                                                transform: scale(.6);
                                        }
                                        .inner-home .testi .holder .slick-slide{
                                                padding: 20px 20px 70px;
                                                max-width: 300px;
                                                flex: 300px;
                                                min-width: 300px;
                                        }
                                        .inner-home .testi .holder .item .author{
                                                left: 20px;
                                                bottom: 20px;
                                        }
                                        .inner-home .client .icons figure{
                                                margin: 0 15px 20px;
                                                max-width: 40%;
                                        }
                                        .inner-home .client .info{
                                                text-align: center;
                                        }
                                        .inner-home .testi{
                                                padding: 25px 0;
                                        }
                                        .inner-service .solution,
                                        .inner-home .client{
                                                padding: 30px 0 50px;
                                        }
                                        .inner-case .story .item:nth-of-type(4) .caption,
                                        .inner-home .cta .wrapper{
                                                padding: 0;
                                        }
                                        .inner-home .cta .layer{
                                                border-radius: 0;
                                                padding: 40px 20px 50px;
                                        }
                                        .inner-home .cta{
                                                margin-bottom: 50px;
                                        }
                                        .detail-case .section,
                                        .blog-section{
                                                padding-bottom: 30px;
                                        }
                                        .inner-service .client .list figure{
                                                max-width: calc(33.3333333333333333% - 18px);
                                                flex: calc(33.3333333333333333% - 18px);
                                        }
                                        .inner-service .client{
                                                padding: 30px 0;
                                        }
                                        .inner-service .solution .item h3:after{
                                                transform: scale(.5) !important;
                                        }
                                        .inner-service .solution .item.active h3:after{
                                                transform: scale(.5) rotate(-180deg) !important;
                                        }
                                        .inner-service .solution .item{
                                                padding-top: 15px;
                                                margin-top: 15px;
                                        }
                                        .detail-service .heading .layer{
                                                padding: 60px 20px;
                                        }
                                        .detail-case .heading,
                                        .detail-case .copycon,
                                        .detail-service .copycon{
                                                text-align: center;
                                        }
                                        .inner-case .story .item:nth-of-type(3),
                                        .inner-case .story .item:nth-of-type(2),
                                        .inner-case .story .item{
                                                margin: 0 0 50px;
                                                top: auto;
                                        }
                                        .inner-case .story .item:last-child{
                                                margin: 0;
                                        }
                                        .inner-case .intro{
                                                padding: 50px 0 200px;
                                        }
                                        .blog-section:before{
                                                height: 80%;
                                        }
                                        .detail-service .section > *:not(.copycon) + .copycon,
                                        .detail-service .section > .banner:not(:first-child),
                                        .detail-service .section > .heading:not(:first-child),
                                        .detail-service .section > .gallery:not(:first-child),
                                        .detail-service .section > .vidbanner:not(:first-child),
                                        .detail-case .section > *:not(.copycon) + .copycon,
                                        .detail-case .section > .banner:not(:first-child) {
                                                margin-top: 30px;
                                        }
                                        .detail-service .section > .gallery + .gallery{
                                                margin-top: 15px !important;
                                        }
                                        
                                        /** FONT SIZE **/
                                        
                                        .inner-service .solution .hentry h2,
                                        .inner-service .client .hentry h2,
                                        .inner-service .copy h2,
                                        .inner-home .intro .hentry b,
                                        .inner-blog .subscribe h2,
                                        .inner-about .copy h2,
                                        .section-contact .heading h2,
                                        .inner-testi .caro .hentry h2{
                                                font-size: 36px;
                                        }
                                        .detail-case .heading h2,
                                        .inner-case .intro h2,
                                        .inner-home .strategy h2,
                                        .inner-home .branding .col h3,
                                        .inner-home .intro .hentry span,
                                        .inner-about .heading h2,
                                        .inner-contact .hentry h2{
                                                font-size: 30px;
                                        }
                                        
                                        .detail-service .heading h2,
                                        .detail-service .intro .hentry h2,
                                        .inner-home .client .info h2, .inner-home .testi .info h2,
                                        .inner-home .branding .orange-color .col h3,
                                        .contact-general .hentry h2,
                                        .inner-contact .layer > h3{
                                                font-size: 24px;
                                        }
                                        .inner-case .story .item h3,
                                        .inner-home .cta .layer h2{
                                                font-size: 22px;
                                        }
                                        .detail-service .copycon h3,
                                        .detail-case .copycon h3,
                                        .detail-service .intro .txt blockquote,
                                        .detail-service .intro .txt b, .detail-service .intro .txt strong,
                                        .blog-section .item h3,
                                        .inner-home .case .hentry h2,
                                        .inner-home .solution h2,
                                        .section-contact .heading .txt b{
                                                font-size: 20px;
                                        }
                                        .detail-case .heading span,
                                        .inner-case .intro span,
                                        .detail-service .heading span,
                                        .inner-service .client .copytxt .txt strong,
                                        .inner-service .client .copytxt .txt b,
                                        .inner-service .copy .txt strong, .inner-service .copy .txt b,
                                        .inner-home .case .item h3,
                                        .inner-home .strategy .txt + a,
                                        .inner-home .strategy .txt b, .inner-home .strategy .txt strong,
                                        .inner-home .solution .item h3,
                                        .inner-home .branding .item h2,
                                        .inner-blog .blog-list .item h3,
                                        .inner-blog .search form label,
                                        .inner-about .pair .txt blockquote{
                                                font-size: 18px;
                                        }
                                        .detail-service .intro .txt,
                                        .inner-service .solution .txt + .more,
                                        .inner-service .solution .item h3,
                                        .inner-service .solution .hentry span,
                                        .inner-service .client .hentry h2 span,
                                        .blog-section .item .cat,
                                        .inner-home .cta .layer p,
                                        .inner-home .branding .wrapper > h2,
                                        .inner-home .intro .txt b,
                                        .inner-home .intro .txt strong,
                                        .inner-blog .filter-cat label,
                                        .inner-blog .filter-cat span,
                                        .inner-blog .subscribe span,
                                        .inner-about .pair .txt b,
                                        .inner-about .pair .txt strong,
                                        .inner-about .heading span,
                                        .inner-about .copy .txt b,
                                        .inner-about .copy .txt strong,
                                        .inner-testi .caro .hentry span,
                                        .inner-contact .hentry .txt{
                                                font-size: 16px;
                                        }
                                        .inner-case .story .item .txt,
                                        .detail-service .copycon .txt,
                                        .detail-case .copycon .txt,
                                        .inner-service .solution .txt,
                                        .inner-service .client .copytxt .txt,
                                        .inner-service .copy .txt,
                                        .inner-home .client .info .txt,
                                        .inner-home .testi .holder .item .txt,
                                        .inner-home .testi .info .txt,
                                        .inner-home .case .item .txt,
                                        .inner-home .strategy .txt,
                                        .inner-home .solution .item .txt,
                                        .inner-home .branding .col .txt,
                                        .inner-home .intro .txt,
                                        .inner-blog .blog-list .item .cat,
                                        .inner-blog .search form input::placeholder,
                                        .inner-blog .subscribe form input::placeholder,
                                        .inner-blog .search form input,
                                        .inner-blog .subscribe form input,
                                        .inner-about .person .item span,
                                        .inner-about .person .item .txt,
                                        .inner-about .pair .txt,
                                        .inner-about .copy .txt,
                                        .contact-general .hentry p,
                                        .section-contact .heading .txt,
                                        .inner-testi .caro .item .author h3,
                                        .form-basic .fgroup > label,
                                        .contact-general .info{
                                                font-size: 14px;
                                        }
                                        .inner-home .case .hentry a,
                                        .inner-testi .caro .item .author span,
                                        .inner-testi .caro .item .txt{
                                                font-size: 13px;
                                        }
                                        .contact-general .hentry b{
                                                font-size: 12px;
                                        }
                                }
                                /* Custom mobile */
                                @media (max-width: 480px) {
                                        .inner-contact .pusher,
                                        .wrapper{
                                                padding-left: 15px;
                                                padding-right: 15px;
                                        }
                                        #top{
                                                padding: 20px 0 0;
                                        }
                                        .filter-cat .scrollx{
                                                margin: 0 -15px 0 0;
                                        }
                                }
                                
                                @media (max-width: 360px) {
                                        .inner-home .solution .centered .button{
                                                font-size: 12px;
                                                padding: 0 20px;
                                        }
                                        .inner-home .strategy .txt + a{
                                                font-size: 14px;
                                        }
                                        .inner-home .strategy .txt + a:after{
                                                top: 5px;
                                        }
                                }
                                @media (min-width: 1230px) {
                                
                                }
                        ` } />
                </>
        )
}

export default Styling;