export default function ServicesSection() {
  const services = [
    { img: "/images/profilaktyka.png", title: "Profilaktyka" },
    { img: "/images/interna.png", title: "Interna" },
    { img: "/images/labolatorium.png", title: "Laboratorium" },
    { img: "/images/usg.png", title: "USG" },
    { img: "/images/radiologia.png", title: "Radiologia" },
    { img: "/images/chirurgia.png", title: "Chirurgia" },
    { img: "/images/dermatologia.png", title: "Dermatologia" },
    { img: "/images/stomatologia.png", title: "Stomatologia" },
    { img: "/images/paszport-chipowanie.png", title: "Paszport & Chipowanie" },
  ];

  return (
    <section id="uslugi" className="py-20 bg-gray-200">
      <div className="mx-auto max-w-[1900px] px-6">
        
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          NASZE USŁUGI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                mx-auto
                w-full
                max-w-[600px]
                bg-white
                border border-gray-200
                shadow-md
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(20,184,166,0.25)]
                hover:border-teal-400
              "
            >
              {/* Obraz */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Podpis */}
              <div className="py-6 text-center">
                <h3 className="text-lg font-semibold tracking-widest text-black uppercase">
                  {service.title}
                </h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}