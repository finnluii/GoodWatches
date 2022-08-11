function Search() {
    return (
        <div>
            <form action="/search" method="post">
                <input type="text" name="title"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Search;