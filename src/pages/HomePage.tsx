const HomePage = () => {

    const handleClick = ({children}) => {
        alert(`You clicked ${children}!`);
    }


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick}>
                Click
            </button>
            <p onClick={handleClick}>paragraph</p>
        </div>

    )
}

export default HomePage;