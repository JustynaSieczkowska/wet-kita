export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 1) TŁO: obrazek */}
      <img
        src="/images/hero.jpg.png"
        alt="Gabinet weterynaryjny"
        className="absolute inset-0 h-full w-full object-cover hero-zoom-once"
      />

      {/* 2) Logo */}
     <img
        src="/images/logo.png"
        alt="Logo KITA"
        className="absolute top-6 right-6 z-20 w-28 md:w-40 object-contain"
      />

      {/* 3) TREŚĆ: tekst i przyciski */}
      <div className="relative z-10 flex h-full items-start pt-24 md:pt-32 px-6">
        <div className="mx-auto w-full max-w-7xl px-6 text-white">
          <h1 className="text-4xl font-bold md:text-6xl text-black">
            Przychodnia Weterynaryjna KITA
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/90">
            Nowoczesna opieka weterynaryjna w Łodzi. Dbamy o zdrowie i komfort Twojego pupila.
          </p>

          <div className="mt-24 flex flex-wrap gap-4">
       <a
  href="https://www.wettermin.pl/lecznice/lodz/3858"
  target="_blank"
  rel="noopener noreferrer"
  className="glass-btn"
>
  Umów wizytę online
</a>

<a
  href="#uslugi"
  className="glasss-btn"
>
  Zobacz usługi
</a>
 <a
    href="#kontakt"
    className="glasss-btn"
  >
    Kontakt
  </a>

  {/* Aktualności + FB */}
  <a
    href="https://www.facebook.com/p/Przychodnia-Weterynaryjna-KITA-100063557141767/?locale=pl_PL"
    target="_blank"
    rel="noopener noreferrer"
    className="glasf-btn flex items-center gap-2"
  >
    <img
      src="/images/fb.png"
      alt="Facebook"
      className="w-5 h-5 object-contain"
    />
    Aktualności
  </a>

          </div>
        </div>
      </div>
    </section>
  );
}