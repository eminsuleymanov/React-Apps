import styles from './header.module.css'
const Header = () => {
    return (
        <>
            <header className='section-spacing'>
                <div className="container">
                    <div className="headerWrapper">
                        <div className={styles.logo}>
                            <a href="">
                                <img src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" alt="" />
                            </a>
                            <form className="search">
                                <input type="text" placeholder='Search' />
                            </form>
                        </div>

                        <div className="actions"></div>
                    </div>

                </div>
            </header>

        </>
    )
}

export default Header