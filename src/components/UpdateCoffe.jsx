import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateCoffe = () => {
  const navigate = useNavigate();

  const loadedCoffe = useLoaderData();

  console.log(loadedCoffe._id);

  const handleSubmit = (event) => {
    event.preventDefault(); // Corrected the typo here
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffe = { name, quantity, supplier, taste, category, details, photo };
    console.log(coffe);

    fetch(`http://localhost:3000/coffe/${loadedCoffe._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        alert("Coffe Edit Successfully");
        navigate("/");
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl">Update coffee</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2">
          <input
            type="text"
            name="name"
            defaultValue={loadedCoffe?.name}
            placeholder="Name"
          />
          <input
            type="number"
            name="quantity"
            defaultValue={loadedCoffe?.quantity}
            placeholder="Quantity"
          />
          <input
            type="text"
            name="supplier"
            defaultValue={loadedCoffe?.supplier}
            placeholder="Supplier"
          />
          <input
            type="text"
            name="taste"
            defaultValue={loadedCoffe?.taste}
            placeholder="Taste"
          />
          <input
            type="text"
            name="category"
            defaultValue={loadedCoffe?.category}
            placeholder="category"
          />
          <input
            type="text"
            name="details"
            defaultValue={loadedCoffe?.details}
            placeholder="Details"
          />

          <input
            type="text"
            name="photo"
            defaultValue={loadedCoffe?.photo}
            placeholder="Photo URL"
          />
        </div>
        <input type="submit" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffe;
