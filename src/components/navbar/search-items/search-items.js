import Item from "./Item";
import Search from "./Search";

const SearchItems = ({toggle}) => {
    return ( <div className={
        (!toggle)?'collapse-items flex-grow-1 d-lg-flex justify-content-between flex-column flex-lg-row not-display':
        'collapse-items flex-grow-1 justify-content-between flex-column flex-lg-row display-list'}>
        <Item/>
        <Search/>
    </div> );
}
 
export default SearchItems;