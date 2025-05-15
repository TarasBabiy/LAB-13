import React, { useState } from 'react';
import './UserForm.css'; // Додали для стилів

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    groupCode: '',
    email: ''
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setIsSaved(false); // Щоб приховати дані, якщо форма ще не збережена
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
  };

  return (
    <div className="form-container">
      <h2>Форма користувача</h2>
      <form onSubmit={handleSave}>
        <label>Ім'я:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>Прізвище:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
        </label>

        <label>Код групи:
          <input type="text" name="groupCode" value={formData.groupCode} onChange={handleChange} required />
        </label>

        <label>Електронна пошта:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <button type="submit" className="save-button">Зберегти дані</button>
      </form>

      {isSaved && (
        <div className="output-data">
          <h3>Введені дані:</h3>
          <ul>
            <li><strong>Ім'я:</strong> {formData.name}</li>
            <li><strong>Прізвище:</strong> {formData.surname}</li>
            <li><strong>Код групи:</strong> {formData.groupCode}</li>
            <li><strong>Електронна пошта:</strong> {formData.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserForm;
