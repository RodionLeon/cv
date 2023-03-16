import Project from './Project';
import Subtitle from './Subtitle';
import quizGif from '../gif/Quiz.gif';
import cryptoGif from '../gif/crypto-tracker.gif';
import affirmations from '../gif/Affirmations (1).gif';
import rollDice from '../gif/gifr.gif';
import Education from './Education';

function Main() {
    return (
        <div className="h-full flex mt-4 flex-col gap-5">
            <div className="flex flex-col gap-4">
                <Subtitle content={'Projects'} />
                <Project
                    title="Crypto Tracker"
                    techs="Kotlin, MVVM, Hilt, Retrofit, Navgraph, MPAndroidChart, ViewBinding"
                    gifurl={cryptoGif}
                    gitUrl="https://github.com/RodionLeon/Android-TMS/tree/master/CryptoTracker"
                    description="The application represent currency value in real time"
                />
                <Project
                    title="Quiz app"
                    techs="Kotlin, MVVM, Hilt, Retrofit"
                    gifurl={quizGif}
                    gitUrl=" https://github.com/RodionLeon/TMS_Qiuz/tree/master"
                    description="The application that allows user to solve quizzes"
                />
                <Project
                    title="Affirmations"
                    techs=" training work with recycle view"
                    gifurl={affirmations}
                    gitUrl=" https://github.com/RodionLeon/Android-TMS/tree/master/AndroidTask4"
                    description="The pet-project"
                />
                <Project
                    title="Roll Dice"
                    techs=" practiced working with ImageView "
                    gifurl={rollDice}
                    gitUrl=" https://github.com/RodionLeon/Android-TMS/tree/master/Android%20task%202"
                    description="The pet-project"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Subtitle content={'Education'} />
                <Education />
            </div>
            <div className="flex flex-col gap-2">
                <Subtitle content={'About me'} />
                <p className="text-xl">
                    The goal is to develop in android development and IOS development. In
                    the future, I want to master KMM and become a multi-platform
                    developer. In my free time I play board games, drums, and computer
                    games.
                </p>
            </div>
        </div>
    );
}

export default Main;
