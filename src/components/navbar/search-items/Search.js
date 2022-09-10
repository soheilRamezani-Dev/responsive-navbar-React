const Search = () => {
    return ( <div className='search' onSubmit={''}>
    <form className='form'>
        <div className='form-group'>
            <input placeholder='search something' className='search-input' type="text" value={''} onChange={''}/>
            <button className='btn btn-success'>search</button>
        </div>
    
    </form>
</div> );
}
 
export default Search;