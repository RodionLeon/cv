function Project({giturl, gifurl, title, techs}) {
    return (
        <div>
            <div className="flex flex-col xl:flex-row items-center xl:gap-50 gap-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-normal">{title}</h1>
                    <span className="text-md font-light">Technologies:{techs}</span>
                    <a href={giturl}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="gitbtn"
                            className=" w-8 transition-all duration-300 hover:scale-110"
                        ></img>
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
