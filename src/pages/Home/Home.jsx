import HomeCards from './components/HomeCards'

export default function Home() {
  return (
    <section className='home-bg absolute inset-0 h-screen overflow-y-auto overflow-x-hidden bg-cover bg-center bg-no-repeat'>
      <div className='mx-auto flex min-h-screen items-center justify-center px-5'>
        <div className='flex flex-col gap-8 py-5'>
          <h1 className='home-text-shadow text-center font-baskerville text-6xl text-white lg:text-8xl'>
            Makam<span className='tracking-wide text-yellow-500'>Netz</span>
          </h1>
          <div className='flex flex-col flex-wrap gap-10 lg:flex-row'>
            <HomeCards />
          </div>
        </div>
      </div>
      <img
        className='fixed right-0 top-[8vh] h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:right-10 md:top-10 md:h-[200px] md:w-[200px]'
        src='/images/logo-itu-50.png'
        width={100}
        height={100}
        alt='itu logo'
      />
    </section>
  )
}
