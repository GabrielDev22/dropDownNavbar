import { Link } from "react-router-dom"
import {MenuItems} from "./MenuItems";
import "./DropDown.css"
import { useState } from "react";

export const DropDown = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <>
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) =>{
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}
