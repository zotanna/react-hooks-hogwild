import React, { useState } from "react";
import HogTile from "./HogTile";
import HogForm from "./HogForm";

const HogList = ({ hogs }) => {
    const [showGreasedOnly, setShowGreasedOnly] = useState(false);
    const [sortOption, setSortOption] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");
    const [newHogs, setNewHogs] = useState([]);

    const toggleGreasedFilter = () => {
        setShowGreasedOnly(!showGreasedOnly);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleSortDirectionChange = (event) => {
        setSortDirection(event.target.value);
    };

    const handleAddHog = (hog) => {
        // Add the new hog to the list of new hogs
        setNewHogs((prevNewHogs) => [...prevNewHogs, hog]);
    };

    const sortedHogs = hogs.slice().sort((a, b) => {
        const multiplier = sortDirection === "asc" ? 1 : -1;
        if (sortOption === "name") {
            return a.name.localeCompare(b.name) * multiplier;
        } else if (sortOption === "weight") {
            return (a.weight - b.weight) * multiplier;
        }
        return 0;
    });

    const filteredHogs = showGreasedOnly ? sortedHogs.filter((hog) => hog.greased) : sortedHogs;
    const allHogs = [...filteredHogs, ...newHogs];

    return (
        <div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={showGreasedOnly}
                        onChange={toggleGreasedFilter}
                    />
                    Show Greased Hogs Only
                </label>
            </div>
            <div>
                <label>
                    Sort by:
                    <select value={sortOption} onChange={handleSortChange}>
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                </label>
                <label>
                    Sort direction:
                    <select value={sortDirection} onChange={handleSortDirectionChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </div>
            <HogForm onAddHog={handleAddHog} />
            <div className="hogList">
                {allHogs.map((hog) => (
                    <HogTile key={hog.name} hog={hog} />
                ))}
            </div>
        </div>
    );
};

export default HogList;