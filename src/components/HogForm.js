import React, { useState } from "react";

const HogForm = ({ onAddHog }) => {
    const [hogDetails, setHogDetails] = useState({
        name: "",
        specialty: "",
        greased: false,
        weight: 0,
        highestMedal: "",
        image: "",
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setHogDetails((prevDetails) => ({
            ...prevDetails,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add the new hog to the list
        onAddHog(hogDetails);
        // Reset form fields
        setHogDetails({
            name: "",
            specialty: "",
            greased: false,
            weight: 0,
            highestMedal: "",
            image: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={hogDetails.name} onChange={handleChange} required />
            </label>
            <label>
                Specialty:
                <input type="text" name="specialty" value={hogDetails.specialty} onChange={handleChange} required />
            </label>
            <label>
                Greased:
                <input type="checkbox" name="greased" checked={hogDetails.greased} onChange={handleChange} />
            </label>
            <label>
                Weight:
                <input type="number" name="weight" value={hogDetails.weight} onChange={handleChange} required />
            </label>
            <label>
                Highest Medal Achieved:
                <input type="text" name="highestMedal" value={hogDetails.highestMedal} onChange={handleChange} required />
            </label>
            <label>
                Image URL:
                <input type="url" name="image" value={hogDetails.image} onChange={handleChange} required />
            </label>
            <button type="submit">Add Hog</button>
        </form>
    );
};

export default HogForm;