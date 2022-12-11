import Hardstrike from './Hardstrike';

function Subtitle({content}) {
    return (
        <div className="flex flex-col gap-1">
            <span className=" font-bold text-2xl">{content}</span>
            <Hardstrike />
        </div>
    );
}

export default Subtitle;
