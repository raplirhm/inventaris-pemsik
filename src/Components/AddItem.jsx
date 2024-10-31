import { useState } from "react";

const AddItem = ({ addItem, toggleModal }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, category, stock, price });
    setName("");
    setCategory("");
    setStock(0);
    setPrice(0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[800px]">
        <h2 className="text-lg font-bold mb-8 w-full text-center">Tambah Barang</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Nama Barang</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b p-2 w-full outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Kategori</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-b p-2 w-full outline-none"
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="mb-4">
              <label className="block mb-1">Stok</label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
                className="border-b p-2 w-full outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Harga</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="border-b p-2 w-full outline-none"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={toggleModal}
              className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
