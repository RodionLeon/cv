import Lightstrike from './Lightstrike';
import Project from './Project';
import Subtitle from './Subtitle';
import quizGif from '../gif/Quiz.gif';
import affirmations from '../gif/Affirmations (1).gif'
import rollDice from '../gif/gifr.gif'
import rodion from "../photo/ebalo.jpg"

function Main() {
    return (
        <div className="h-full flex mt-4 flex-col gap-5">
            <div className="flex flex-col xl:flex-row">
                <img className=" w-56 h-72 bg-gray-300 mr-4"
                src = {rodion} alt = "rodion"/>
                <span className=" w-2/3">
                I am a 2nd year student at BSU at the Faculty of Mechanics and Mathematics, specializing in mathematics and software for mobile devices, I graduated from TMS (teach me skills) courses with a degree in android developer.
                I am proficient in Room, SqlIte, Hilt, Dagger2, Kotlin Coroutines technologies.
                Familiar with the basic principles of DRY, SOLID, YAGNI, KISS, Clean architecture, MVVM, MVR, MVI.
                </span>
            </div>
            <div className="flex flex-col gap-5">
                <Subtitle content={'Projects'} />
                <Project
                    title="Quiz app"
                    techs=" kotlin, MVVM, Hilt, Retrofit, Room"
                    gifurl= {quizGif}
                    giturl=" https://github.com/RodionLeon/TMS_Qiuz/tree/master"
                />
                <Lightstrike />
                <Project
                    title="Affirmations"
                    techs=" kotlin, MVVM, Hilt, Retrofit, Room"
                    gifurl= {affirmations}
                    giturl=" https://github.com/RodionLeon/Android-TMS/tree/master/AndroidTask4"
                />
                <Lightstrike />
                <Project
                    title="Roll Dice"
                    techs=" kotlin, MVVM, Hilt, Retrofit, Room"
                    gifurl={rollDice}
                    giturl=" https://github.com/RodionLeon/Android-TMS/tree/master/AndroidTask2"
                />
                <Lightstrike />
                
            </div>
        </div>
    );
}

export default Main;
