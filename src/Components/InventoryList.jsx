import { Link } from 'react-router-dom';

const InventoryList = ({ inventory, searchTerm }) => {
  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(String(searchTerm).toLowerCase()) ||
    item.category.toLowerCase().includes(String(searchTerm).toLowerCase())
  );

  return (
    <div>
      <h2 className='font-bold p-6 ml-4 '>Inventory List</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th className='pl-10 p-2'>Nama</th>
            <th className='p-2 pl-4'>Kategori</th>
            <th className='p-2 pl-4'>Stok</th>
            <th className='p-2 pl-4'>Harga</th>
            <th className='p-2 pl-4 detail-table'>Detail</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map((item) => (
            <tr key={item.id}>
              <td className='pl-10 p-2'>{item.name}</td>
              <td className='p-2 pl-4'>{item.category}</td>
              <td className='p-2 pl-4'>{item.stock}</td>
              <td className='p-2 pl-4'>Rp {item.price}</td>
              <td className='p-2 pl-4'>
                <Link to={`/item/${item.id}`}>Lihat Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
