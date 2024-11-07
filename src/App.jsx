import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import InventoryList from "./Components/InventoryList";
import ItemDetail from "./components/ItemDetail";
import AddItem from "./Components/AddItem";

function App() {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Laptop",
      category: "Elektronik",
      stock: 10,
      price: 15000000,
    },
    { id: 2, name: "Mouse", category: "Aksesoris", stock: 30, price: 200000 },
  ]);

  

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addItem = (newItem) => {
    setInventory([...inventory, { id: Date.now(), ...newItem }]);
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const Dashboard = () => {
    const filteredInventory = inventory.filter((item) =>
      item.name.toLowerCase().includes(String(searchTerm).toLowerCase()) ||
      item.category.toLowerCase().includes(String(searchTerm).toLowerCase())
    );

    return (
      <div className="flex flex-col gap-5">
        <div className="bg-gradient-to-tl from-[#653bfb] to-[#20D3FC] h-[15vh] w-full text-white flex flex-col justify-center">
          <h2 className="font-bold p-6 ml-4 text-3xl">
            Selamat datang di Inventaris
          </h2>
        </div>
        <h2 className="ml-4 pl-6 font-semibold text-base text-[#444444]">Stok Barang</h2>
        <ul className="flex flex-col gap-3 ml-4 mr-10 pl-6 text-base text-[#747474]">
          {filteredInventory.map((item) => (
            <li key={item.id} className="">
              <div className="flex justify-between w-full">
                {item.name}{" "}
                <span className="flex">
                  Stok : <p className="font-semibold ml-2">{item.stock}</p>
                </span>
              </div>
              <hr className="my-2 border-gray-300" />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Router>
      <div className="app">
        <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <div className="content flex mt-8">
          <Sidebar toggleModal={toggleModal} />
          <div className="main-content shadow-lg w-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/inventory"
                element={
                  <InventoryList
                    inventory={inventory}
                    searchTerm={searchTerm}
                  />
                }
              />
              <Route
                path="/item/:id"
                element={<ItemDetail inventory={inventory} />}
              />
            </Routes>
            {isModalOpen && (
              <AddItem addItem={addItem} toggleModal={toggleModal} />
            )}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
