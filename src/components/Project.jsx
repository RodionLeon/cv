function Project({gitUrl, gifurl, title, techs, description}) {
    return (
        <div>
            <div className="flex flex-col xl:flex-row xl:gap-50 gap-4 xl:justify-between">
                <div className="flex flex-col gap-2 py-2">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <span className="text-xl font-light">Technologies: {techs}</span>
                    <p className="text-xl">{description}</p>
                    <a href={gitUrl} target="_blank" rel="noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="gitbtn"
                            className=" w-8 transition-all duration-300 hover:scale-110"
                        />
                    </a>
                </div>
                <img
                    src={gifurl}
                    alt="project gif"
                    className=" w-32 transition-all duration-300 hover:scale-15"
                />
            </div>
        </div>
    );
}

export default Project;
