import calculatorLogo from '../images/calculator.svg';
const Header = ({ title, backColor }) => {
    return (
        <header className='header' style={{'background-color' : backColor}}>
            <div className='content header-content align-items-center px-4'>
                <p className='title'>{title}</p>
                <div className='d-flex mx-auto'>
                    <img src={calculatorLogo} alt="logo" className='middleLogo' />
                    <p className='cl-second'>React-calculator</p>
                </div>
            </div>
        </header>
    )
}

export default Header
