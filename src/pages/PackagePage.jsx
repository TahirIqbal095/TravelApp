import { useEffect, useState } from "react";
import Card from "../component/card/Card";

const API_URL = import.meta.env.VITE_API_URL;

function PackagePage() {
    const [pkgs, setPkgs] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/tours/`)
            .then((response) => response.json())
            .then((data) => setPkgs(data))
            .catch((error) => console.error("error fetching data :" + error));
    }, []);

    const pkgList = pkgs.map((pkg) => (
        <Card
            id={pkg.id}
            key={pkg.id}
            name={pkg.name}
            description={pkg.description}
            duration={pkg.duration}
            price={pkg.price}
            img={pkg.image}
        />
    ));

    return (
        <section className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                {pkgList}
            </div>
        </section>
    );
}

export default PackagePage;
