import NavBar from '../components/navigation/NavBar';
import Intro from '../components/introduction/intro';
import CompanyDetails from '../components/companyDetails/CompanyDetails';
import CompanyQuotes from '../components/companyQuotes/CompanyQuotes';
import MobileCompanyQuotes from '../components/companyQuotes/MobileCompanyQuotes';
import BackgroundImages from '../components/backgroundImages/BackgroundImages';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Home() {
    const [mobile] = useMediaQuery('(max-width: 660px)');

    return(
        <main style={{position: 'relative', overflowX: 'hidden'}}>
            <BackgroundImages/>
            <NavBar/>
            <Intro/>
            <CompanyDetails/>
            {mobile ? <MobileCompanyQuotes/> : <CompanyQuotes/>}
        </main>
    )
}