function Contacts({link, git, tg, location}) {
    return (
        <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                    alt="linkedin"
                    className="w-6"
                />
                <a href={link}>LinkedIn</a>
            </li>
            <li className="flex gap-2">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="github"
                    className=" w-6"
                ></img>
                <a href={"https://github.com/RodionLeon"}>GitHub</a>
            </li>
            <li className="flex gap-2">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                    alt="tg"
                    className=" w-6"
                ></img>
                <a href={"https://t.me/Nerfoi"}>Telegram</a>
            </li>
            <li className="flex gap-2">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
                    alt="location"
                    className=" w-6"
                ></img>
                {location}
            </li>
        </ul>
    );
}

export default Contacts;
