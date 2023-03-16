import DivisionLine from './DivisionLine';

function Subtitle({content}) {
    return (
        <div className="flex flex-col gap-1">
            <h4 className="font-bold text-3xl">{content}</h4>
            <DivisionLine />
        </div>
    );
}

export default Subtitle;
