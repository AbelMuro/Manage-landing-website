import NavBar from '../components/navigation/NavBar';
import Intro from '../components/introduction/intro';
import BackgroundImages from '../components/backgroundImages/BackgroundImages';

export default function Home() {
    return(
        <main style={{position: 'relative', overflow: 'hidden'}}>
            <BackgroundImages/>
            <NavBar/>
            <Intro/>
        </main>
    )
}