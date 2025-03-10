import { FiSearch } from "react-icons/fi";
interface SearchProps {
  style:string ;
}
const Search = (style : SearchProps) => {
  return (
    <div className={style.style}>
      <form className="w-full relative">
        <input
          type="search"
          name=""
          className="bg-primary pr-10 py-2 rounded-lg w-full"
          placeholder={`عن ماذا تبحث`}
          id=""
        />
        <FiSearch className="absolute right-3 top-3 text-gray"  />
     
      </form>
    </div>
  );
};

export default Search;
