import rodionImage from '../photo/ebalo.jpg';
function Header() {
    return (
        <div className="flex gap-4 flex-col sm:flex-row">
            <img
                className="w-36 h-48 bg-gray-300 mx-auto sm:mx-0 sm:mr-4"
                src={rodionImage}
                alt="Rodion CV"
            />
            <div className="flex flex-col w-fit gap-2 relative">
                <h1 className=" text-6xl font-black tracking-wide">Rodion Leonchik</h1>
                <h3 className="text-3xl font-normal tracking-wide">Android developer</h3>
            </div>
        </div>
    );
}

export default Header;
