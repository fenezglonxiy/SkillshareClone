import SvgSearch from "../../../assets/SvgSearch";

const MobileHeaderSearch = () => {
  return (
    <button
      style={{
        marginLeft: "9px",
      }}
      aria-label="search"
      type="button"
    >
      <SvgSearch />
    </button>
  );
};

export default MobileHeaderSearch;
