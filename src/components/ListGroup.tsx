import { MouseEvent, useState } from "react";

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris',
    ];
    // items = [];
    // let selectedIndex = 0;

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // arr[0] // var (selectedIndex)
    // arr[1] // updater function

    const getMessage = () => {
        return items.length === 0 ? <p>No items found</p> : null;
    }

    const handleClick = (event: MouseEvent) => console.log(event);


    return (
        <>
            <h1>List</h1>
            {/* {items.length === 0 ? <p>No items found</p> : null} */}
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={ selectedIndex === index ? "list-group-item active" : "list-group-item" }
                        key={item}
                        onClick={() => {setSelectedIndex(index); console.log(selectedIndex)}}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;