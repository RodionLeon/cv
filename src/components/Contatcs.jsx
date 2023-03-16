function Contacts() {
    return (
        <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
                <img
                    src="https://www.svgrepo.com/show/494176/linkedin.svg"
                    alt="linkedin"
                    className="w-6"
                />
                <a href="https://www.linkedin.com/in/rodion-leonchik-b0074326a/">
                    LinkedIn
                </a>
            </li>
            <li className="flex gap-2">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="github"
                    className=" w-6"
                />
                <a href="https://github.com/RodionLeon">GitHub</a>
            </li>
            <li className="flex gap-2">
                <img
                    src="https://www.svgrepo.com/show/394493/telegram.svg"
                    alt="tg"
                    className=" w-6"
                />
                <a href="https://t.me/Nerfoi">Telegram</a>
            </li>
            <li className="flex gap-2">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
                    alt="location"
                    className="w-6 h-6"
                />
                Minsk, Belarus
            </li>
        </ul>
    );
}

export default Contacts;
