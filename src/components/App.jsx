import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
    return (
        <div className="mt-8 mb-4 sm:mb-6 lg:mb-8 w-5/6 m-auto">
            <div className="flex flex-col xl:flex-row gap-5">
                <div className="flex flex-col">
                    <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                        <div className="flex flex-col gap-4 min-w-3/4">
                            <Header />
                            <Main />
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
