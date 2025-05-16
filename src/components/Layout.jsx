const Layout = (props) => {

    const {children} = props;

    const header = (
        <header>
            <h1 className="text-gradient">The Brogram</h1>
            <p><strong>The 30 simple workouts program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by: <a href="" target="_blank"></a></p><br/>
            <p>Styled with <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a></p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}

export default Layout;