import { FaPenAlt } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick= (e) => {
        console.log('object')
    }
    return (
        <div>
        <header className = 'header'>
            <h1 style= {headingStyle}> {title} </h1>
            <Button backgroundColor='#4267B2' text='Post' onClick= {onClick}/>
        </header>
        <div className="headYo1" id = "headYo11"><p><FaPenAlt/>Compose Post</p></div>
        <div className="headYo1"><p><FaPhotoVideo/>Photo/Video</p></div>
        <div className="headYo1"><p><FaVideo/>Live Video</p></div>

        </div>

        
    )
}

Header.defaultProps={
    title : "Post Area"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle ={
    
}

export default Header
