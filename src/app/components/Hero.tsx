export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 1) TŁO */}
      <img
        src="/images/hero.jpg.png"
        alt="Gabinet weterynaryjny"
        className="absolute inset-0 h-full w-full object-cover object-[73%_center] md:object-center hero-zoom-once"
      />

      {/* 2) Logo */}
      <img
        src="/images/logo.png"
        alt="Logo KITA"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-24 md:w-40 object-contain"
      />

      {/* 3) TREŚĆ */}
      <div className="relative z-10 flex h-full items-start pt-20 md:pt-32 px-4 md:px-6">
        <div className="w-full max-w-7xl md:px-6 text-white">

          <h1 className="text-3xl md:text-6xl font-bold text-black leading-tight">
            Przychodnia <br className="md:hidden" />
            Weterynaryjna KITA
          </h1>

          <p className="mt-5 md:mt-6 max-w-md md:max-w-xl text-base md:text-lg text-white/90">
            Nowoczesna opieka weterynaryjna w Łodzi.
            Dbamy o zdrowie i komfort Twojego pupila.
          </p>

          <div className="mt-10 md:mt-24 flex flex-col md:flex-row gap-4">

            <a
              href="https://www.wettermin.pl/lecznice/lodz/3858"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn w-4/5 md:w-auto"
            >
              Umów wizytę online
            </a>

            <a
              href="#uslugi"
              className="glasss-btn w-4/5 md:w-auto"
            >
              Zobacz usługi
            </a>

            <a
              href="#kontakt"
              className="glasss-btn w-4/5 md:w-auto"
            >
              Kontakt
            </a>

            <a
              href="https://www.facebook.com/p/Przychodnia-Weterynaryjna-KITA-100063557141767/?locale=pl_PL"
              target="_blank"
              rel="noopener noreferrer"
              className="glasf-btn flex items-center gap-2 w-4/5 md:w-auto"
            >
              <img
                src="/images/fb.png"
                alt="Facebook"
                className="w-4 h-4 md:w-5 md:h-5 object-contain"
              />
              Aktualności
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}