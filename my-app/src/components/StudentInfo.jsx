import { useState } from 'react';

function StudentInfo() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
        <h3>Student Info</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Age:{" "}
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            College Course:{" "}
            <select
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
                setSubmitted(false);
              }}
            >
              <option value="">-- Select a course --</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Engineering">Engineering</option>
              <option value="Business Administration">Business Administration</option>
              <option value="Psychology">Psychology</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Year:{" "}
            <input
              type="text"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>

        <button type="submit" style={{ marginTop: "0.5rem" }}>Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: "1rem" }}>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Course:</strong> {course}</p>
          <p><strong>Year:</strong> {year}</p>
        </div>
      )}
    </div>
  );
}

export default StudentInfo;
