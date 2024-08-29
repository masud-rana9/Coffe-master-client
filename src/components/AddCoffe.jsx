import { useNavigate } from "react-router-dom";

const AddCoffe = () => {
  const navigate = useNavigate();

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

    fetch("http://localhost:3000/coffe", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Coffe Added Successfully");
          navigate("/");
          form.reset();
        }
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl">Add new coffee</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2">
          <input type="text" name="name" placeholder="Name" />
          <input type="number" name="quantity" placeholder="Quantity" />
          <input type="text" name="supplier" placeholder="Supplier" />
          <input type="text" name="taste" placeholder="Taste" />
          <input type="text" name="category" placeholder="category" />
          <input type="text" name="details" placeholder="Details" />
          <input type="text" name="photo" placeholder="Photo URL" />
        </div>
        <input type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffe;
