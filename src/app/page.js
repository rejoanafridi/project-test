import ClientProfile from './components/ClientProfile'
import OurBrands from './components/OurBrands'

const HomePage = () => {
    return (
        <div className="mx-auto w-full max-w-[1440px] my-10">
            <OurBrands />
            <ClientProfile />
        </div>
    )
}

export default HomePage
