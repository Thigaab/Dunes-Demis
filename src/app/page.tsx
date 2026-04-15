import {
  Flag,
  HeartHandshake,
  MapPinned,
  Rocket,
  Trophy,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siFacebook, siInstagram, siYoutube } from "simple-icons";

type SocialIcon = {
  path: string;
  title: string;
};

// LinkedIn is not exported by the installed simple-icons version, so we keep a local SVG path.
const linkedInIcon: SocialIcon = {
  title: "LinkedIn",
  path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z",
};

const missionItems = [
  {
    title: "Volet humanitaire",
    description:
      "Acheminer des fournitures scolaires et sportives aux enfants du desert marocain.",
    icon: HeartHandshake,
  },
  {
    title: "Defi sportif",
    description:
      "Parcourir les dunes en 4L avec une navigation a l'ancienne, sans GPS et en equipe.",
    icon: Flag,
  },
];

const timelineSteps = [
  {
    title: "Preparation mecanique",
    date: "Mai 2026",
    detail: "Revision complete de la 4L, securite et entrainement en terrain mixte.",
    icon: Wrench,
  },
  {
    title: "Collecte solidaire",
    date: "Juin - Septembre 2026",
    detail: "Partenariats locaux, events de soutien et collecte de materiel scolaire.",
    icon: Trophy,
  },
  {
    title: "Roadbook & logistique",
    date: "Octobre 2026",
    detail: "Finalisation de l'itineraire, bivouac, check des papiers et des equipements.",
    icon: MapPinned,
  },
  {
    title: "Depart 4L Trophy",
    date: "Fevrier 2027",
    detail: "Grand depart vers le Maroc pour porter notre mission au coeur du rallye.",
    icon: Rocket,
  },
];

const crewMembers = [
  {
    name: "Thibaut",
    role: "Pilote",
    photo: "/crew-thibaut.svg",
    photoAlt: "Portrait de Thibaut, pilote de l'equipage Dunes & Demis",
    bio: "Passionne de route et de mecanique, il garde le cap dans les passages exigeants.",
    passions: ["Automobile", "Montagne", "Toulouse🩷"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/thibaut-bonefont-aa7822268/", icon: linkedInIcon },
      { label: "Instagram", href: "https://www.instagram.com/thibaut.bonefont/", icon: siInstagram },
    ],
  },
  {
    name: "Elouan",
    role: "Pilote",
    photo: "/crew-elouan.svg",
    photoAlt: "Portrait de Elouan, pilote de l'equipage Dunes & Demis",
    bio: "Stratege du roadbook, il anticipe chaque etape pour allier precision et endurance.",
    passions: ["Sport", "Technologies", "Toulouse 🩷"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/elouan-tailliez-83031a253/", icon: linkedInIcon },
      { label: "Instagram", href: "https://www.instagram.com/elouan.tli/", icon: siInstagram },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: siInstagram },
  { label: "Facebook", href: "https://facebook.com", icon: siFacebook },
  { label: "YouTube", href: "https://youtube.com", icon: siYoutube },
];

function SocialIconSvg({ icon }: { icon: SocialIcon }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d={icon.path} />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="adventure-shell">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-18 px-6 py-10 md:px-10 md:py-14">
        <section className="adventure-panel relative overflow-hidden rounded-4xl p-8 shadow-lg md:p-14">
          <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-[#f6bf96]/40 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-52 w-52 rounded-full bg-[#f4dbb9]/45 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div className="space-y-5">
              <p className="inline-flex rounded-full border border-[#c5ab88] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-[#5d4633] uppercase">
                4L Trophy 2027
              </p>
              <h1 className="font-display max-w-xl text-5xl leading-[1.02] tracking-tight text-[#2f2418] sm:text-6xl">
                Dunes & Demis
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[#5d4633]">
                Une equipe, une 4L et un cap: traverser le desert pour une aventure solidaire,
                humaine et sportive.
              </p>
              <Link
                href="/#mission"
                className="inline-flex items-center rounded-full bg-[#2f2418] px-6 py-3 text-sm font-semibold tracking-wider text-[#fdf5e8] transition hover:bg-[#443424]"
              >
                Decouvrir la mission
              </Link>
            </div>
            <div className="rounded-3xl border border-[#d6bc99] bg-white/70 p-7 backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#7e6648] uppercase">
                Cap aventure
              </p>
              <p className="mt-4 text-2xl font-semibold text-[#2f2418]">
                6 000 km de route, de dunes et de rencontres.
              </p>
            </div>
          </div>
        </section>

        <section id="mission" className="space-y-6">
          <div className="space-y-2">
            <p className="adventure-kicker">Mission</p>
            <h2 className="font-display text-4xl text-[#2f2418]">Humanitaire & Sport</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {missionItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="adventure-card rounded-3xl border border-[#d9c1a1] p-6 shadow-sm"
                >
                  <Icon className="mb-4 h-9 w-9 text-[#8c5235]" strokeWidth={2.2} />
                  <h3 className="font-display text-2xl text-[#2f2418]">{item.title}</h3>
                  <p className="mt-3 text-[#5d4633]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="equipage" className="space-y-6">
          <div className="space-y-2">
            <p className="adventure-kicker">Equipage</p>
            <h2 className="font-display text-4xl text-[#2f2418]">Les deux membres de l&apos;equipe</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {crewMembers.map((member) => {
              return (
                <article
                  key={member.name}
                  className="adventure-card rounded-3xl border border-[#d9c1a1] p-6 shadow-sm md:p-7"
                >
                  <div className="mx-auto mb-6 w-full max-w-sm">
                    <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-[#cfb290] bg-[#f8e1c9] shadow-md">
                      <Image
                        src={member.photo}
                        alt={member.photoAlt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 360px, 100vw"
                      />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-[#2f2418]">{member.name}</h3>
                  <p className="text-sm font-semibold tracking-[0.14em] text-[#8c5235] uppercase">
                    {member.role}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    {member.socials.map((social) => (
                      <a
                        key={`${member.name}-${social.label}`}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.label} de ${member.name}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#c8ae8d] bg-white/85 text-[#6b5039] transition hover:bg-[#f8e1c9] hover:text-[#3f2e1f]"
                      >
                        <SocialIconSvg icon={social.icon} />
                      </a>
                    ))}
                  </div>
                  <p className="mt-4 text-[#5d4633]">{member.bio}</p>
                  <div className="mt-5">
                    <p className="text-xs font-semibold tracking-[0.14em] text-[#8c5235] uppercase">
                      Passions
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {member.passions.map((passion) => (
                        <li
                          key={`${member.name}-${passion}`}
                          className="rounded-full border border-[#cfb290] bg-white/75 px-3 py-1 text-xs text-[#5d4633]"
                        >
                          {passion}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <p className="adventure-kicker">Timeline</p>
            <h2 className="font-display text-4xl text-[#2f2418]">Preparation de l&apos;equipage</h2>
          </div>
          <ol className="relative grid gap-4 md:grid-cols-2">
            {timelineSteps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="adventure-card rounded-3xl border border-[#d9c1a1] p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold tracking-[0.17em] text-[#8c5235] uppercase">
                    {step.date}
                  </p>
                  <div className="mt-4 flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f8e1c9] text-[#7a4a31]">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-[#2f2418]">{step.title}</h3>
                      <p className="mt-2 text-[#5d4633]">{step.detail}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </main>

      <footer className="mt-6 border-t border-[#d9c1a1] bg-[#f4dbb9]/35">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10">
          <p className="text-sm text-[#5d4633]">Dunes & Demis - 4L Trophy 2027</p>
          <ul className="flex items-center gap-2">
            {socialLinks.map((social) => {
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c8ae8d] bg-white/80 text-[#5d4633] transition hover:bg-[#f8e1c9] hover:text-[#3f2e1f]"
                  >
                    <SocialIconSvg icon={social.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </div>
  );
}
