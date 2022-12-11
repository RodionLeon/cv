import Contacts from './Contatcs';
import Education from './Education';
import Skills from './Skills';
import Subtitle from './Subtitle';

function Sidebar() {
    return (
        <div className="bg-side h-full w-full p-5">
            <div className="flex flex-col gap-4">
                <Subtitle content="Contacts" />
                <Contacts location={'Minsk,BY'} git="" link="" tg="" />
                <Subtitle content="Education" />
                <Education />
                <Subtitle content="Skills" />
                <Skills />
                <Subtitle content={'Languages'} />
                <div className="flex flex-col gap-2">
                    <span className="text-xl font-normal">Russian(Native)</span>
                    <span className="text-xl font-normal">English(Fluent)</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
