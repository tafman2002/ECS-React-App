import { Link } from 'react-router-dom';

export const NavBar = () => {
    const navigationList = [ 'Home', 'About', 'Contact' ];
    const listItems = navigationList.map((item) => {
        return <Link to={`/${item.toLowerCase()}`}>{item}</Link>
    });
    return (
        <div className="NavBar">
            <nav>
                <ul>
                    {listItems}
                </ul>
            </nav>
        </div>
    );
}