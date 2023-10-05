import { useEffect, useState } from "react";
import Card from "../Card/Card";

/* eslint-disable react/prop-types */
const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('/phones.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center py-10">All Category Phones</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    phones.map(phone => <Card key={phone.id} phone={phone}></Card>)
                }
            </div>
        </div>
    );
};

export default Phones;