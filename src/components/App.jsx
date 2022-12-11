import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
    return (
        <div className=" w-3/4 m-auto mt-8 mb-8">
            <div className="flex flex-col xl:flex-row gap-5">
                <div className="flex flex-col">
                    <Header />
                    <Main />
                </div>
                <Sidebar />
            </div>
        </div>
    );
}

export default App;
