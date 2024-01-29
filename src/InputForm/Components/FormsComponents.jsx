const handleSubmit = (event) => {
  event.preventDefault();
  alert(
    "FirstName: " +
      event.target[0].value +
      "\n" +
      "LastName: " +
      event.target[1].value
  );
  const fisrtname = document.getElementsByName("fname")[0];
  alert(fisrtname.value);
};

const FormsComponents = () => {
  return (
    <form className="w-25" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="fname"
          placeholder="Enter Fist name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="lname"
          placeholder="Enter last name"
          className="form-control"
        />
      </div>
      <button className="btn btn-success " type="submit">
        Submit Here!
      </button>
    </form>
  );
};
export default FormsComponents;
