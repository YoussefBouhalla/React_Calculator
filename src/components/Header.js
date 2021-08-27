
const Header = ({ title, backColor }) => {
    return (
        <header className='header' style={{'background-color' : backColor}}>
            <div className='content header-content'>
                <p className='title'>{title}</p>
            </div>
        </header>
    )
}

export default Header
