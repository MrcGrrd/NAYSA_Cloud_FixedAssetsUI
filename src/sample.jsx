import React, { useState } from 'react';
import './index.css';

const data = [
  {
    employeeId: '01',
    name: 'John',
    email: 'johndoe@email.com',
    position: 'Frontend Developer',
    address: 'Makati City',
    createdAt: '2020-04-02', 
  },
  {
    employeeId: '02',
    name: 'Sara',
    email: 'sara@email.com',
    position: 'HR Executive',
    address: 'Pasig City',
    createdAt: '2024-04-01', 
  },
  {
    employeeId: '03',
    name: 'Mike',
    email: 'mike@email.com',
    position: 'Backend Developer',
    address: 'Taguig City',
    createdAt: '2024-03-31', 
  },
  {
    employeeId: '04',
    name: 'Gerard',
    email: 'johndoe@email.com',
    position: 'Frontend Developer',
    address: 'Makati City',
    createdAt: '2020-04-02', 
  },
  {
    employeeId: '05',
    name: 'Jane',
    email: 'sara@email.com',
    position: 'HR Executive',
    address: 'Pasig City',
    createdAt: '2024-04-01', 
  },
  {
    employeeId: '06',
    name: 'Michael',
    email: 'michael@email.com',
    position: 'Backend Developer',
    address: 'Makati City',
    createdAt: '2022-03-31', 
  },
  {
    employeeId: '07',
    name: 'Doe',
    email: 'johndoe@email.com',
    position: 'Frontend Developer',
    address: 'Makati City',
    createdAt: '2020-01-02', 
  },
  {
    employeeId: '08',
    name: 'Joseph',
    email: 'sara@email.com',
    position: 'HR Executive',
    address: 'Pasig City',
    createdAt: '2024-07-01', 
  },
  {
    employeeId: '09',
    name: 'Calvin',
    email: 'mike@email.com',
    position: 'Backend Developer',
    address: 'Taguig City',
    createdAt: '2024-02-31', 
  },
  {
    employeeId: '10',
    name: 'Johnnie',
    email: 'johndoe@email.com',
    position: 'Frontend Developer',
    address: 'Makati City',
    createdAt: '2020-09-02', 
  },
  {
    employeeId: '11',
    name: 'Raymond',
    email: 'sara@email.com',
    position: 'HR Executive',
    address: 'Pasig City',
    createdAt: '2021-07-01', 
  },
  {
    employeeId: '12',
    name: 'Andrew',
    email: 'mike@email.com',
    position: 'Backend Developer',
    address: 'Taguig City',
    createdAt: '2021-03-31', 
  },
  {
    employeeId: '13',
    name: 'Marc',
    email: 'johndoe@email.com',
    position: 'Frontend Developer',
    address: 'Makati City',
    createdAt: '2020-04-02', 
  },
  {
    employeeId: '14',
    name: 'Matthew',
    email: 'sara@email.com',
    position: 'HR Executive',
    address: 'Pasig City',
    createdAt: '2020-04-01', 
  },
  {
    employeeId: '15',
    name: 'Jamir',
    email: 'jamir@email.com',
    position: 'Backend Developer',
    address: 'Taguig City',
    createdAt: '2022-08-16', 
  },
  {
    employeeId: '16',
    name: 'Jay',
    email: 'johndoe@email.com',
    position: 'Frontend Developer',
    address: 'Makati City',
    createdAt: '2020-04-02', 
  },
  {
    employeeId: '17',
    name: 'Clint',
    email: 'sara@email.com',
    position: 'HR Executive',
    address: 'Pasig City',
    createdAt: '2024-09-01', 
  },
  {
    employeeId: '18',
    name: 'Edwin',
    email: 'mike@email.com',
    position: 'Backend Developer',
    address: 'Taguig City',
    createdAt: '2023-07-31', 
  },
  {
    employeeId: '19',
    name: 'Christian',
    email: 'sara@email.com',
    position: 'HR Executive',
    address: 'Pasig City',
    createdAt: '2023-04-01', 
  },
  {
    employeeId: '20',
    name: 'Kyle',
    email: 'kyle@email.com',
    position: 'Backend Developer',
    address: 'Muntinlupa City',
    createdAt: '2022-10-01', 
  }
];

const Sample = () => {
  const [employeeData, setEmployeeData] = useState(data);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change this value according to your preference
  const [newPosition, setNewPosition] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = employeeData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const onChangeInput = (e, employeeId) => {
    const { name, value } = e.target;

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    );

    setEmployeeData(editData);
  };

  const addEmployee = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const newEmployee = {
      employeeId: (employeeData.length + 1).toString(),
      name: newName,
      email: newEmail,
      position: newPosition,
      address: newAddress,
      createdAt: currentDate,
    };

    setEmployeeData([...employeeData, newEmployee]);
    setNewName('');
    setNewEmail('');
    setNewPosition('');
    setNewAddress('');
  };

  const filterEmployeesByDateRange = () => {
    if (!startDate || !endDate) return employeeData;

    return employeeData.filter(employee => {
      return employee.createdAt >= startDate && employee.createdAt <= endDate;
    });
  };

  const searchFilter = (items) => {
    if (!searchQuery) return items;

    return items.filter(item => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  currentItems = searchFilter(currentItems);

  return (
    <div className="container">
      <div className="input-container">
        <div className="left-inputs">
          <label>Name:</label>
          <input
            name="newName"
            value={newName}
            type="text"
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Type Name"
            style={{border: '1px solid #ccc', borderRadius: '4px', padding: '5px 10px', marginBottom: '10px'}}
          />
          <label>Email:</label>
          <input
            name="newEmail"
            value={newEmail}
            type="text"
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Type Email"
            style={{border: '1px solid #ccc', borderRadius: '4px', padding: '5px 10px', marginBottom: '10px'}}
          />
        </div>
        <div className="right-inputs">
          <label>Position:</label>
          <input
            name="newPosition"
            value={newPosition}
            type="text"
            onChange={(e) => setNewPosition(e.target.value)}
            placeholder="Type Position"
            style={{border: '1px solid #ccc', borderRadius: '4px', padding: '5px 10px', marginBottom: '10px'}}
          />
          <label>Address:</label>
          <input
            name="newAddress"
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            placeholder="Type Address"
            style={{border: '1px solid #ccc', borderRadius: '4px', padding: '5px 10px', marginBottom: '10px'}}
          />
          <button className="btn btn-success shadow-none" style={{ height: '30px', width: '100px', borderRadius: '0.5rem' }} onClick={addEmployee}>Add Data</button>
        </div>
      </div>
      <div className='date'>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          style={{border: '1px solid #ccc', borderRadius: '4px', padding: '5px 10px', marginBottom: '10px'}}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Address</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(({ employeeId, name, email, position, address, createdAt }) => (
            <tr key={employeeId}>
              <td>
                <input
                  name="name"
                  value={name}
                  type="text"
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Name"
                  disabled
                />
              </td>
              <td>
                <input
                  name="email"
                  value={email}
                  type="text"
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Email"
                />
              </td>
              <td>
                <select
                  name="position"
                  value={position}
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Select Position"
                >
                  <option value="">Select Position</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="HR Executive">HR Executive</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Programmer">Programmer</option>
                  <option value="Sales">Sales</option>
                </select>
              </td>
              <td>
                <input
                  name="address"
                  type="text"
                  value={address}
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Address"
                />
              </td>
              <td>{createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(employeeData.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default Sample;