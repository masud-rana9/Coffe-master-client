import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const App = () => {
  const loadedData = useLoaderData();
  const [coffe, setCoffe] = useState(loadedData);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:3000/coffe/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete successfully");
          const remaining = coffe.filter((item) => item._id != _id);
          setCoffe(remaining);
        }
      });
  };

  return (
    <div className="">
      <h1>Coffe Information no:{coffe.length}</h1>
      {coffe.map((item) => (
        <div className="flex gap-10 mt-10 p-8" key={item._id}>
          <p>{item._id}</p>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          <p>{item.supplier}</p>
          <p>{item.taste}</p>
          <p>{item.category}</p>
          <p>{item.details}</p>
          <p>{item.photo}</p>
          <Link to={`/updatecoffe/${item._id}`}>
            <button>edit</button>
          </Link>
          <button
            onClick={() => {
              handleDelete(item._id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
