
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
// import './DropdownDemo.css';

const More = () => {

    const [lazyItems, setLazyItems] = useState([]);
    const [selectedCity1, setSelectedCity1] = useState(null);
    

  

    const cities = [
        { name: 'Notification Prefences' },
        { name: 'Sell on Flipcart' },
        { name: '24*7 Customer care'},
        { name: 'Advertise' },
        { name: 'Download App'}
    ];

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
  
    },[]); 

    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }

    return (
        <div className="dropdown-demo">
            <div className="card">
                <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="More" />
                 </div>
        </div>
    );
}

export default More;
                 