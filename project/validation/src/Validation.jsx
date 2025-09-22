import React, { useState } from 'react'

export default function Validation() {
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    password: ""
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    const newRecord = passwordRegex.test(formdata.password)
      ? { name: formdata.name, age: formdata.age, ptype: "strong" }
      : { ptype: "password is weak" };

    setRecords([...records, newRecord]);
    setFormdata({ name: "", age: "", password: "" });
  };

  return (
    <div className='m-10'>
      <form onSubmit={handleSubmit} className='flex gap-9'>
        <input type="text" name="name" placeholder="Enter Your Name" onChange={handleChange} value={formdata.name} required/>
        <input type="number" name="age" placeholder="Enter Your Age" onChange={handleChange} value={formdata.age} required/>
        <input type="password" name="password" placeholder="Enter Your Password" onChange={handleChange} value={formdata.password} required/>
        <button type="submit" className='bg-blue-500 text-white px-3 py-1 rounded'>Submit</button>
      </form>

      <div className='mt-6'>
        {records.map((e, i) => (
          e.ptype === "strong" ? (
            <ul key={i} className='border w-60 p-2 rounded mb-2 font-bold'>
              <li>Name: {e.name}</li>
              <li>Age: {e.age}</li>
              <li className='text-green-600'>Password is {e.ptype}</li>
            </ul>
          ) : (
            <p key={i} className='text-red-600 font-bold'>{e.ptype}</p>
          )
        ))}
      </div>
    </div>
  );
}