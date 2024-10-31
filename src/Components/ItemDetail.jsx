import { useParams } from 'react-router-dom';

const ItemDetail = ({ inventory }) => {
  const { id } = useParams();
  const item = inventory.find(i => i.id === parseInt(id));

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Kategori: {item.category}</p>
      <p>Stok: {item.stock}</p>
      <p>Harga: Rp{item.price}</p>
    </div>
  );
};

export default ItemDetail;
