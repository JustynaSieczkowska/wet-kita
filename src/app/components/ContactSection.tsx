export default function ContactSection() {
  return (
    <section id="kontakt" className="py-24 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-center text-black mb-16">
          KONTAKT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEWA STRONA */}
          <div className="space-y-8 text-gray-800">

            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="Logo KITA"
              className="w-40 object-contain"
            />

            {/* Nazwa i lekarz */}
            <div>
              <h3 className="text-2xl font-semibold">
                Przychodnia Weterynaryjna KITA
              </h3>
              <p className="mt-2 text-lg">
                lek. wet. Magdalena Jagiełło-Harke
              </p>
            </div>

            {/* Adres */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Adres</h4>
              <p>Ks. Jana Długosza 27</p>
              <p>91-083 Łódź</p>
            </div>

            {/* Telefon */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Telefon</h4>
              <a
                href="tel:+48791102992"
                className="text-teal-600 hover:underline text-lg"
              >
                791 102 992
              </a>
            </div>

            {/* Email */}
            <div>
              <h4 className="text-xl font-semibold mb-2">E-mail</h4>
              <a
                href="mailto:gabinetkita@wp.pl"
                className="text-teal-600 hover:underline text-lg"
              >
                gabinetkita@wp.pl
              </a>
            </div>

          </div>

          {/* PRAWA STRONA – MAPA */}
          <div className="w-full h-[550px] rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=19.4223%2C51.7762%2C19.4278%2C51.7788&layer=mapnik&marker=51.77718%2C19.42498"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0 w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}


