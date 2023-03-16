function Education() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col">
                <h2 className=" text-lg font-light text-gray-700">Higher education</h2>
                <h1 className=" text-2xl font-semibold">
                    Faculty of Mechanics and Mathematics, BSU
                </h1>
                <p className="text-xl">
                    Mathematic and Computer Science (Mobile Software)
                </p>
                <div className="flex flex-row gap-2 items-center my-2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
                        alt="timespan"
                        className="w-5 h-5"
                    />
                    2021-2025
                </div>
                <div className="flex flex-row gap-2 items-center my-2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
                        alt="place"
                        className="w-5 h-5"
                    />
                    Minsk, Belarus
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className=" text-lg font-light text-gray-700">Extra Education</h2>
                <h1 className=" text-2xl font-semibold">
                    Teach My Skills - Android Developer
                </h1>
                <div className="flex flex-row gap-2 items-center my-2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
                        alt="timespan"
                        className="w-5 h-5"
                    />
                    15 Sep 22 - 9 Mar 23
                </div>
                <div className="">
                    <a
                        href="/Rodion_Leonchik.pdf"
                        className="underline underline-offset-2"
                        target="_blank"
                    >
                        View accreditation
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
