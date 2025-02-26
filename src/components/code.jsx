import "../assets/code.css";
import { Link } from "react-router-dom";
import {code} from '../util/code.js'

function Code() {


  return (
    <>
      <div className="container">
        <div className="search">
          <input type="text" placeholder="stand on the shouder of giants" />
          <button>search</button>
        </div>
        <div className="list">
          
          {code.map((val, index) => (
            <div className="item" key={index}>
              <p>
                <Link to={`/detail/${val}`} relative="path">
                  {val}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Code;
