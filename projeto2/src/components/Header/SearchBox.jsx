function SearchBox () {

    const [search, setSearch] = React.useState ("");





    return(
        <>
            <input className={styles.caixaPesquisa}  size= "55" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar produto..." />
                    <a className={styles.lupa} href="#">
                        <img src="../public/Search.svg" alt="lupa" />
                    </a>

        </>
    )
}

export default SearchBox;