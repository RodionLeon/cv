import Contacts from './Contatcs';
import Skills from './Skills';
import Subtitle from './Subtitle';

function Sidebar() {
    return (
        <div className="h-full w-full max-w-[375px]">
            <div className="flex flex-col gap-2">
                <Subtitle content="Contacts" />
                <Contacts />
                <Subtitle content={'Languages'} />
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-normal">English (B1)</p>
                </div>
                <Subtitle content="Skills" />
                <Skills />
                <Subtitle content="Soft Skills" />
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-normal">Attentiveness</p>
                    <p className="text-xl font-normal">Responsibility</p>
                    <p className="text-xl font-normal">Learnability</p>
                    <p className="text-xl font-normal">Open to learn something new</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
