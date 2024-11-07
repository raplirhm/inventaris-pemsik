import { Link } from "react-router-dom";

const Sidebar = ({ toggleModal }) => {
  return(
    <aside className="sidebar mr-20">
    <h1 className="font-bold text-2xl mb-6 text-blue-500">Inventaris</h1>
    <ul className="text-[#747474]">
      <li className="mb-1">
        <Link to="/">Dashboard</Link>
      </li>
      <li className="mb-1">
        <Link to="/inventory">Inventory List</Link>
      </li>
      <li className="mb-1 cursor-pointer" onClick={toggleModal}>
        Add Item
      </li>
    </ul>
    
  </aside>
  )
  
}

export default Sidebar;
