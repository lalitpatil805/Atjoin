import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    photo: null,
    rank: '',
    idNumber: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };



  return (
    <div className="App">
      <form>
      <label htmlFor="photo">User Photo:</label>
        <input style={{width:'200px', height:'50px'}}
          type="file"
          id="photo"
          name="photo"
          onChange={handleChange}
          accept="image/*"
          required
        />
        
 <label htmlFor="idNumber">ID:</label>
        <input
          type="text"
          id="idNumber"
          name="idNumber"
          pattern="#\\d{6}"
          title="ID number must start with # and be followed by 6 digits"
          value={formData.idNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">User Name:</label>
        <input style={{}}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        
 <label htmlFor="rank">Congratulations!! You have Secured </label>
        <select
          id="rank"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          required
        >
          <option value="" style={{fontWeight:'bold'}}>Select Rank</option>
          <option value="first" style={{fontWeight:'bold'}}>First Rank</option>
          <option value="second" style={{fontWeight:'bold'}}>Second Rank</option>
          <option value="third" style={{fontWeight:'bold'}}>Third Rank</option>
        </select>

       
      </form>
    </div>
  );
}

export default App;