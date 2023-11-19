// DropdownComponent.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const DropdownComponent = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://127.0.0.1:8000/zillas/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select...</option>
        {data.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default DropdownComponent;
