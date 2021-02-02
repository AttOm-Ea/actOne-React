import {useState} from "react";
import Data from './quotes.json';
import './../App.css';
import Box from './box.jsx';

const classColor = ['content-Sheet1', 'content-Sheet2', 'content-Sheet3', 'content-Sheet4', 'content-Sheet5'];
let positionColor = 0;
const QuoteBox = () =>{
    const [isQuote, setQuote] = useState("Your time is limited, so don’t waste it living someone else’s life.");
    const [isAuthor, setAuthor] = useState("Steve Jobs");
    const [isTheme, setTheme] = useState(classColor[positionColor]);
    const newQuote = (event) => {
        positionColor++;
        if (positionColor < 5) {
            setTheme(classColor[positionColor]);
        }else{
            positionColor = 0;
            setTheme(classColor[positionColor]);
        }
        let positionQuo = Math.round(Math.random()*102);
        let element = Data.quotes[positionQuo];
        setQuote(element.quote);
        setAuthor(element.author);
    }

    return (
        <div className={isTheme}>
            <Box author={isAuthor} quote={isQuote} functionQuote={newQuote} position={positionColor}/>
        </div>
        
    )
}
export default QuoteBox; 