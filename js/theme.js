document.addEventListener('DOMContentLoaded', () => {
    // Switch between light and dark mode
    let theme = document.getElementById('theme-switcher');
    let settingsMenu = document.getElementById('settings-menu');
    let darkColor = "rgb(25,25,25)";
    let lightColor = "#f9f9f9";

    theme.addEventListener('click', () => {
        let backgroundBody = document.body;
        let header = document.querySelector('h1');

        if(backgroundBody.style.backgroundColor === "" || backgroundBody.style.backgroundColor === darkColor) {
            backgroundBody.style.backgroundColor = lightColor;
            header.style.color = darkColor;
            theme.style.color = darkColor;
            settingsMenu.style.color = darkColor;
        }else{
            backgroundBody.style.backgroundColor = darkColor;
			header.style.color = lightColor;
			theme.style.color = lightColor;
			settingsMenu.style.color = lightColor;
			for (let i = 0; i < inputs.length; i++)
				inputs[i].style.backgroundColor = "#fff";
        }
    });
});