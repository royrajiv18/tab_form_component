import React from "react";

const Interests = ({ data, setData, errors }) => {
  const { interests } = data;
  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  console.log(interests);
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            onChange={handleDataChange}
            checked={interests.includes("coding")}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="movies"
            onChange={handleDataChange}
            checked={interests.includes("movies")}
          />
          Movies
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="learning"
            onChange={handleDataChange}
            checked={interests.includes("learning")}
          />
          Learning
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interests;
