import { useState } from "react";

function RealTimeForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(name.trim() === "") {
      alert("Name cannot be empty.");
      return;
    }

    alert(`Form submitted with name: ${name}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto">
        <label htmlFor="name" className="block mb-2 font-semibold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
          placeholder="Type your name"
        />
        <p className="mt-2">
          You typed: <strong>{name}</strong>
        </p>
        <button
          type="submit"
          style={{color: 'white', backgroundColor: name.trim() === "" ? '#9E9E9E' : '#4CAF50', 
            padding: '10px 15px', border: 'none', borderRadius: '5px', 
            cursor: name.trim() === "" ? 'not-allowed' : 'pointer', marginTop: '10px'}}
          disabled={name.trim() === ""}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default RealTimeForm;
