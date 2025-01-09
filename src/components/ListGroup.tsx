import { MouseEvent, useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getMessage = () => {
        return items.length === 0 ? <p>No items found</p> : null;
    }

    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>{heading}</h1>
            {/* {items.length === 0 ? <p>No items found</p> : null} */}
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={ selectedIndex === index ? "list-group-item active" : "list-group-item" }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;