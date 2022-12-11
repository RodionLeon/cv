import {Rating} from '@mui/material';

function Skills() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between gap-2">
                <span className="text-xl font-normal">Kotlin</span>
                <Rating name="read-only" value={4} readOnly />
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
                <span className="text-xl font-normal">Java</span>
                <Rating name="read-only" value={3} readOnly />
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
                <span className="text-xl font-normal">JS</span>
                <Rating name="read-only" value={3} readOnly />
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
                <span className="text-xl font-normal">React</span>
                <Rating name="read-only" value={2} readOnly />
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
                <span className="text-xl font-normal">C++</span>
                <Rating name="read-only" value={2} readOnly />
            </div>
        </div>
    );
}

export default Skills;
