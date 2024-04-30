import toast from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;
