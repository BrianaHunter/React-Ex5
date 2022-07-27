import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import "./ArraysEx.css";

interface Pet {
  id: number;
  name: string;
  type: string;
}
function ArraysEx() {
  const [colors, setColors] = useState([
    { color: "Yellow" },
    { color: "Orange" },
    { color: "Red" },
    { color: "Purple" },
  ]);

  const [pets, setPets] = useState([
    { id: nanoid(5), name: "Patches", type: "cat" },
    { id: nanoid(5), name: "Zeke", type: "dog" },
    { id: nanoid(5), name: "Koda", type: "dog" },
  ]);
  const addColor = (color: string): void => {
    if (color) {
      if (color === "Blue") {
        const newColor = {
          color: "Blue",
        };
        return setColors([...colors, newColor]);
      }
      if (color === "Green") {
        const newColor = {
          color: "Green",
        };
        return setColors([...colors, newColor]);
      }
      if (color === "Rainbow") {
        const newColor = {
          color: "Rainbow",
        };
        return setColors([...colors, newColor]);
      }
    }
  };

  const deletePet = (pet: "name") => {
    if (pet) {
      if (pet === "name") {
        return pets.slice(1);
      }
      if (pet === "name") {
        return pets.slice(2);
      }
      if (pet === "name") {
        return pets.slice(3);
      }
    }
  };

  return (
    <>
      <div>
        <h3 style={{ backgroundColor: "yellow" }}>Colors</h3>
        <ul>
          {colors.map((color) => (
            <li key={color.color}>{color.color}</li>
          ))}
        </ul>
      </div>

      <div>
        <button
          style={{ background: "lightblue", border: "1px solid black" }}
          onClick={() => addColor("Blue")}
        >
          Add Blue
        </button>
        <button
          style={{ background: "lightgreen", border: "1px solid black" }}
          onClick={() => addColor("Green")}
        >
          Add Green
        </button>
        <button
          style={{
            border: "1px solid black",
          }}
          onClick={() => addColor("Rainbow")}
        >
          Add the Rainbow
        </button>
      </div>

      <div>
        <h3 style={{ backgroundColor: "lightblue" }}>Pets</h3>
        <table style={{ width: "400px" }}>
          <th>Name</th>
          <th>Type</th>
          <th>Action</th>
        </table>
        <table
          style={{
            // border: "1px solid orange",
            width: "400px",
            height: "100px",
          }}
        >
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td
                style={{
                  border: "3px solid orange",
                  padding: "10px",
                }}
              >
                {pet.name}
              </td>

              <td
                style={{
                  border: "3px solid orange",
                  padding: "10px",
                }}
              >
                {pet.type}
              </td>

              <button
                style={{
                  background: "red",
                  border: "1px solid black",
                  width: "70px",
                  height: "30px",
                }}
                onClick={() => deletePet("name")}
              >
                DELETE
              </button>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default ArraysEx;
