
// React component for ThemeMod
 const ThemeMod = () => {

    const toogleThemeMod = () => {
        if (theme === 'light') {
            setTheme = 'dark';
        } else {
            setTheme = 'light';
    }

    return (
        <div className="theme-mod" onClick={toogleThemeMod}>
            X
        </div>
    )
 }

 export default ThemeMod;