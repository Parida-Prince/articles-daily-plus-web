import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "₹0",
    duration: "Forever",
    features: [
      "1 free CAT-style article daily",
      "Reading insights",
      "Author tone analysis",
      "Paragraph-wise breakdown",
    ],
    button: "Start Free",
    link: "/library",
    highlight: false,
  },
  {
    name: "Weekly",
    price: "₹29",
    duration: "7 Days",
    features: [
      "4 premium CAT articles daily",
      "Full reading analysis",
      "Central idea + tone",
      "Daily reading habit tracking",
    ],
    button: "Get Weekly Access",
    link: "https://rzp.io/rzp/expvgkmU",
    highlight: false,
  },
  {
    name: "Monthly",
    price: "₹99",
    duration: "30 Days",
    features: [
      "Unlimited premium access",
      "4 CAT articles daily",
      "Advanced reading insights",
      "Premium reading library",
      "Priority support",
    ],
    button: "Get Monthly Access",
    link: "https://rzp.io/rzp/IhQefS0s",
    highlight: true,
  },
  {
    name: "2 Months",
    price: "₹149",
    duration: "60 Days",
    features: [
      "Best value plan",
      "Full premium library access",
      "Daily CAT RC practice",
      "Reading analytics",
      "All future updates included",
    ],
    button: "Get 2-Month Access",
    link: "https://rzp.io/rzp/FuZrWkbG",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            Choose Your Reading Plan
          </h1>

          <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-8">
            Build elite CAT VARC reading skills with daily curated articles,
            deep analysis, and structured comprehension training.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-8 transition-all duration-300 ${
                plan.highlight
                  ? "border-white bg-zinc-900 scale-105"
                  : "border-zinc-800 bg-zinc-950"
              }`}
            >
              {plan.highlight && (
                <div className="mb-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>

                <span className="text-zinc-400 ml-2">
                  / {plan.duration}
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-zinc-300 flex items-start gap-3"
                  >
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <Link href={plan.link}>
                  <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:opacity-90 transition">
                    {plan.button}
                  </button>
                </Link>
              ) : (
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:opacity-90 transition">
                    {plan.button}
                  </button>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Need Help After Payment?
          </h3>

          <p className="text-zinc-400 mb-6 text-lg">
            Send your payment screenshot on Telegram and premium access will be activated.
          </p>

          <a
            href="https://t.me/astiflingsoul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl font-semibold text-white">
              Contact on Telegram
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}