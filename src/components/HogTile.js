import React, { useState } from "react";

const HogTile = ({ hog }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={`hogTile ${showDetails ? "showDetails" : ""}`} onClick={handleClick}>
            <h2>{hog.name}</h2>
            <img src={hog.image} alt={hog.name} />
            {showDetails && (
                <div className="hogDetails">
                    <p>Specialty: {hog.specialty}</p>
                    <p>Weight: {hog.weight} lbs</p>
                    <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                    <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                </div>
            )}
        </div>
    );
};

export default HogTile;