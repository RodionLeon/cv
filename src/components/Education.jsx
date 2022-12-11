function Education() {
    return (
        <div>
            <div className="flex flex-col">
                <h2 className=" text-sm font-light">Highter education</h2>
                <h1 className=" text-xl font-normal">Faculty of Mechanics and Mathematics BSU </h1>
                <div className="flex flex-row gap-2 items-center my-2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
                        alt="timespan"
                        className="w-5 h-5"
                    />
                    2020-2024
                </div>
                <div className="flex flex-row gap-2 items-center my-2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
                        alt="place"
                        className="w-5 h-5"
                    />
                    Minsk,BY
                </div>
                <div className=" border-t border-black h-px xl:w-[270px] my-2" />
            </div>
            
        </div>
    );
}

export default Education;
