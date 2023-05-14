import home from "./assets/screenshots/home.jpeg";
import measurements from "./assets/screenshots/measurements.jpeg";
import exercises_evolution from "./assets/screenshots/exercises_evolution.jpeg";
import before_after from "./assets/videos/before_after.mp4";

function App() {
  return (
    <div classNameName="App">

      <nav
        className="sticky top-0 z-10 flex justify-between bg-white p-4 font-semibold tracking-tight md:px-16 xl:px-36"
      >
        <a href="#home">Logo</a>

        <ul className="flex gap-4">
          <li><a href="/">App Store</a></li>
          <li><a href="/">Play Store</a></li>
        </ul>
      </nav>

      <section
        id="home"
        className="flex flex-col items-center justify-center px-16 md:h-[calc(100vh-3rem)] md:flex-row md:justify-center md:gap-16 xl:gap-32"
      >
        <div className="mt-14 flex max-w-md flex-col gap-2 md:gap-6">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-6xl">
            Votre compagnon d'entraînement
          </h1>

          <p className="text-sm font-light md:text-base lg:text-lg">
            Une interface claire et soignée pour faire vos séances, organiser vos
            routines et suivre vos progrès.
          </p>

          <div
            className="flex max-w-sm gap-4 self-center text-center text-white md:self-start"
          >
            <a
              href="https://apps.apple.com/fr/app/projump/id1614219536?itsct=apps_box_badge&amp;itscg=30200"
              className="flex-1"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-fr?size=250x83&amp;releaseDate=1668124800"
                alt="Download on the App Store"
                className="h-full min-h-0"
              />
            </a>

            <a
              href="http://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              className="flex-1"
            >
              <img
                alt="Disponible sur Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"
                className="h-full w-full"
              />
            </a>
          </div>
        </div>

        <img
          src={home}
          alt="Chad app home page"
          className="z-0 my-12 w-full max-w-[20rem] rounded-3xl shadow-2xl shadow-blue-300 drop-shadow-2xl lg:my-0 lg:w-1/3"
        />
      </section>

      <section
        className="flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary px-16 lg:h-[calc(100vh-3rem)] lg:flex-row lg:justify-between lg:gap-16 xl:px-36"
      >
        <div className="mt-14 flex max-w-md flex-col gap-2 text-white lg:gap-6">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-6xl">
            Suis ton évolution sur le long terme
          </h1>

          <p className="text-sm font-light md:text-base lg:text-lg">
            Pour analyser et comprendre tes progrès, toutes tes séries ainsi que
            tes records personnels sont sauvegardés.
          </p>
          <p className="text-sm font-light md:text-base lg:text-lg">
            Tu peux aussi entrer tes mensurations à suivre comme ton poids ou ton
            taux de graisse.
          </p>
        </div>

        <div
          className="my-12 flex w-full max-w-[20rem] flex-col gap-12 lg:my-0 lg:max-w-lg lg:flex-row lg:justify-end xl:max-w-none"
        >
          <img
            src={exercises_evolution}
            alt="Chad app home page"
            className="min-h-0 min-w-0 max-w-[20rem] flex-1 rounded-3xl shadow-2xl shadow-blue-300 drop-shadow-2xl"
          />
          <img
            src={measurements}
            alt="Chad app home page"
            className="min-h-0 min-w-0 max-w-[20rem] flex-1 rounded-3xl shadow-2xl shadow-blue-300 drop-shadow-2xl"
          />
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center px-16 md:h-[calc(100vh-3rem)] md:flex-row md:justify-center md:gap-16 xl:gap-32"
      >
        <div className="mt-14 flex max-w-md flex-col gap-2 md:order-2 lg:gap-6">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-6xl">
            Des fonctionnalités innovantes
          </h1>

          <p className="text-sm font-light md:text-base lg:text-lg">
            Utilise des outils inédits comme l'avant/après pour voir ton évolution
            physique.
          </p>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          lazyload="true"
          src={before_after}
          className="z-0 my-12 w-full max-w-[20rem] rounded-3xl shadow-2xl shadow-blue-300 drop-shadow-2xl md:order-1 lg:my-0 lg:w-1/3"
        >
        </video>
      </section>

    </div>
  );
}

export default App;
