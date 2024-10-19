import Image from 'next/image'

const ClientProfile = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-9  md:gap-[64px] my-20 w-full md:w-2/3 mx-auto px-6">
            <div className="relative h-[460px] w-full md:w-[543px]">
                <Image
                    src="/images/client-image.png"
                    fill
                    className="object-contain"
                    alt=""
                />
            </div>
            <div className="w-full">
                <h2 className="text-4xl md:text-5xlc font-bold tracking-tighter">
                    Bart Warrot
                </h2>
                <h3 className="text-xl md:text-2xl text-blue-600 tracking-[-0.07em] font-medium">
                    Tech Meets Marketing
                </h3>
                <p className="text-sm mt-2 md:text-lg tracking-[-0.02em]">
                    I’m a developer by background who turned into marketing. My
                    specialties really shine in the technical side of marketing.
                    I’m a good bridge between the marketing & development teams
                    in companies.
                </p>

                <div className="flex mt-6 items-center gap-14">
                    <Statistic title="Completed Projects" value="40+" />
                    <Statistic title="Satisfied Clients" value="17+" />
                </div>

                <button className="mt-8 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
                    Read More
                </button>
            </div>
        </div>
    )
}

const Statistic = ({ title, value }) => {
    return (
        <div className="space-y-2 w-20">
            <h3 className="tracking-[-0.02em] text-3xl font-extrabold">
                {value}
            </h3>
            <span className="text-sm md:text-lg leading-[22px]">
                {title}
            </span>
        </div>
    )
}

export default ClientProfile
