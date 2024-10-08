import React, { useEffect } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function DropDown(props) {
    const [selectedKeys, setSelectedKeys] = React.useState(
        new Set(["Filter Packages"])
    );
    const [categories, setCategories] = React.useState([]);

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    useEffect(() => {
        fetch(`${API_URL}/api/tours/categories/`)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => console.error("error fetching data" + err));
    }, []);

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button className="flex items-center capitalize gap-1 bg-[#D5E6FB] text-blue-500 px-4 py-2 rounded-xl ">
                    <span>{selectedValue}</span>
                    <span className="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                {categories.map((cat) => (
                    <DropdownItem key={cat.name} textValue={cat.name}>
                        <Link
                            to={`/packages/categories/${cat.id}`}
                            style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            {cat.name}
                        </Link>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}
