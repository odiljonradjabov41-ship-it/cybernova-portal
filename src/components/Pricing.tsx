import React from 'react';

const pricingPlans = [
  {
    name: 'Starter / Express',
    price: 'Free',
    period: 'Doimiy bepul',
    description: 'Kichik loyihalar va shaxsiy saytlar uchun tezkor audit.',
    features: [
      'Express Domain Scanner',
      'OWASP Top 10 zaifliklar tahlili',
      'AI asosidagi qisqa xulosa',
      'Standard qo\'llab-quvvatlash',
    ],
    buttonText: 'Hozir Boshlash',
    popular: false,
  },
  {
    name: 'Business Security',
    price: '$299',
    period: '/ bir martalik audit',
    description: 'Onlayn do\'konlar, FinTech va B2B kompaniyalar uchun to\'liq audit.',
    features: [
      'Chuqurlashtirilgan Pentest (Manual + AI)',
      'API va Backend xavfsizligi testi',
      'Rasmiy PDF Audit Hisoboti',
      'Zaifliklarni yopish bo\'yicha konsultatsiya',
      '24/7 Telegram / Email support',
    ],
    buttonText: 'Audit Buyurtma Qilish',
    popular: true,
  },
  {
    name: 'Enterprise Protection',
    price: '$599',
    period: '/ oylik retainer',
    description: 'Doimiy kiberxavfsizlik monitoringi va doimiy himoya.',
    features: [
      'Haftalik avtomatik re-scan va monitoring',
      'Domen va IP reputatsiya nazorati',
      'Incident Response (Kiberhujum vaqtida yordam)',
      'Eski kod va kutubxonalar zaiflik tahlili',
      'Shaxsiy Kiberxavfsizlik Ingeneri',
    ],
    buttonText: 'Biz Bilan Bog\'lanish',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-slate-950 text-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-400">
            Mos Keluvchi Tarifni Tanlang
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Biznesingiz hajmi va ehtiyojlaridan kelib chiqib kiberxavfsizlik xizmatlarini ulashing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border ${
                plan.popular
                  ? 'border-emerald-500 bg-slate-900 shadow-xl shadow-emerald-500/10'
                  : 'border-slate-800 bg-slate-900/50'
              } flex flex-col justify-between`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-full">
                  Eng Ommabop
                </span>
              )}

              <div>
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-sm font-medium text-slate-400">
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-emerald-400 shrink-0 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}