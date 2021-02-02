//import {useState} from "react";
import logo from './Twitter.svg';
import comillas from './comillas.svg';
import './../App.css';

const colorText = ['text1', 'text2', 'text3', 'text4', 'text5'];
const colorAuthor = ['author1', 'author2', 'author3', 'author4', 'author5'];
const colorB1 = ['b11', 'b12', 'b13', 'b14', 'b15'];
const colorB2 = ['b21', 'b22', 'b23', 'b24', 'b25'];
// let position = 0;
    let isText;
    let isAuthor;
    let isB1;
    let isB2;
const Box = ({author, quote, functionQuote, position}) =>{
    let linking = "https://twitter.com/intent/tweet?text=" + quote + "...  By '" + author + "'";
    // const [isText, setText] = useState(colorText[position]);
    // const [isAuthor, setAuthor] = useState(colorAuthor[position]);
    // const [isB1, setB1] = useState(colorB1[position]);
    // const [isB2, setB2] = useState(colorB2[position]);
    // position += 1;
        console.log(position);
        // if (position < 5) {
            isText = colorText[position];
            isAuthor = colorAuthor[position];
            isB1 = colorB1[position];
            isB2 = colorB2[position];
        // }else{
        //     position = 0;
        //     isText = colorText[position];
        //     isAuthor = colorAuthor[position];
        //     isB1 = colorB1[position];
        //     isB2 = colorB2[position];
        // }
    // const [isText, setText] = useState("text");
    // let newTex = "text " + topic + "";
    // if (topic) {    
    //     setText(newTex);    
    // }
    
    return(
        <div className="box">
            <div className="content-box">
                <div className="content-text">
                    <img className="icon" src={comillas} alt="comillas"/> 
                    <p className={isText} > {quote} </p>
                </div>
                <div className={isAuthor}> - {author}</div>
            </div>
            <div className="content-buttons"> 
                <a className={isB1} href={linking} data-size="large"> <img className="icon" src={logo} alt="logo"/></a>

                <button className={isB2} onClick={functionQuote}> New Quote </button>
            </div>
        </div>
    );
}

export default Box; 