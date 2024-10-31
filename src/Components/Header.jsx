const Header = ({ searchTerm, onSearchChange }) => (
  <header className="header shadow-md">
    <input
      type="text"
      placeholder="Cari barang..."
      value={searchTerm}
      onChange={onSearchChange}
      className="
      search-bar
      bg-[#F1F5F9]
      p-1 m-1 w-[800px]
      text-sm rounded-lg
      focus:outline-none focus:border-none
      placeholder-center
      "
    />
  </header>
);

export default Header;
