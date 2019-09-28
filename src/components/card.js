import React from "react";

const Card = (props) => {
    const {title, author} = props;
    return (
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
        
    )
}

export default Card;