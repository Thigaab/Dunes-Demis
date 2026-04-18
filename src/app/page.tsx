import {
  Download,
  Flag,
  HeartHandshake,
} from "lucide-react";
import Image from "next/image";
import { Timeline } from "./components/timeline";
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
      "Plus qu'un simple don, notre mission est d'apporter les outils de la réussite. En partenariat avec l'association Enfants du Désert, nous acheminons des kits scolaires et sportifs complets. Chaque kilomètre parcouru nous rapproche de notre objectif : soutenir l'éducation et améliorer le quotidien des enfants vivant dans les zones les plus isolées du désert marocain.",
    stats: [
      "🎒 +20 000 enfants aides chaque annee.",
      "🏫 28 salles de classe construites depuis la creation du raid.",
      "📦 50 kg de materiel par voiture.",
    ],
    icon: HeartHandshake,
  },
  {
    title: "Defi sportif",
    description:
      "Le désert ne se traverse pas seul. Sans GPS, à l'aide d'une simple boussole et d'un roadbook, nous redécouvrons la solidarité mécanique. Ici, le chronomètre n'existe pas : la victoire, c'est d'arriver ensemble au bivouac, d'aider un équipage ensablé et de partager les ressources face aux imprévus des pistes marocaines.",
    stats: [
      "🗺️ 0 GPS autorises.",
      "🏜️ 6 000 km de routes et pistes.",
      "🤝 1 500 equipages unis dans l'effort.",
    ],
    icon: Flag,
  },
];

const crewMembers = [
  {
    name: "Thibaut",
    role: "Pilote",
    photo: "/thibaut.webp",
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
    photo: "/elouan.webp",
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
  { label: "Instagram", href: "https://www.instagram.com/dunes.demis/", icon: siInstagram },
  { label: "Facebook", href: "https://facebook.com", icon: siFacebook },
  { label: "YouTube", href: "https://youtube.com", icon: siYoutube },
];

const teamInstagramLink = "https://www.instagram.com/dunes.demis/";

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
          <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-stretch">
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="rounded-3xl border border-[#d6bc99] bg-white/70 p-7 backdrop-blur-sm">
                <p className="inline-flex rounded-full border border-[#c5ab88] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-[#5d4633] uppercase">
                  4L Trophy 2027
                </p>
                <h1 className="font-display mt-4 text-4xl leading-[1.05] tracking-tight text-[#2f2418] sm:text-5xl">
                  Dunes & Demis
                </h1>
                <p className="mt-4 text-base leading-relaxed text-[#5d4633] sm:text-lg">
                  Une equipe, une 4L et un cap: traverser le desert pour une aventure solidaire,
                  humaine et sportive.
                </p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <a
                  href={teamInstagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-2xl border border-[#cfb290] bg-white/80 px-4 py-3 text-[#5d4633] transition hover:bg-[#f8e1c9]"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#c8ae8d] bg-white text-[#6b5039]">
                    <SocialIconSvg icon={siInstagram} />
                  </span>
                  <span className="text-sm font-medium">Viens suivre nos aventures en direct !</span>
                </a>
                <a
                  href="/dossier-sponsoring.pdf"
                  download
                  className="group relative inline-flex w-fit items-center gap-4 overflow-hidden rounded-full bg-linear-to-r from-[#8c5235] via-[#d09062] to-[#f3b88a] px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_10px_30px_rgba(140,82,53,0.35)] ring-2 ring-[#f3c99f]/60 transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(140,82,53,0.5)] hover:ring-[#f8ddbf]"
                >
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.36),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
                  <Download className="relative" strokeWidth={2.4} />
                  <span className="relative">Notre dossier de sponsoring !</span>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative min-h-55 overflow-hidden rounded-3xl border border-[#d6bc99] bg-white/70 shadow-md">
                <Image
                  src="/crew-team.svg"
                  alt="Photo de l'equipe Dunes & Demis"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 380px, 100vw"
                />
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
                  className="adventure-card ui-card flex h-full flex-col rounded-3xl border border-[#d9c1a1] p-6 shadow-sm"
                >
                  <Icon className="mb-4 h-9 w-9 text-[#8c5235]" strokeWidth={2.2} />
                  <h3 className="font-display text-2xl text-[#2f2418]">{item.title}</h3>
                  <p className="mt-3 text-[#5d4633]">{item.description}</p>
                  <ul className="mt-auto pt-4 space-y-2">
                    {item.stats.map((stat) => (
                      <li
                        key={`${item.title}-${stat}`}
                        className="ui-tag rounded-xl border border-[#cfb290] bg-white/75 px-3 py-2 text-sm text-[#5d4633]"
                      >
                        {stat}
                      </li>
                    ))}
                  </ul>
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
                  className="adventure-card ui-card rounded-3xl border border-[#d9c1a1] p-6 shadow-sm md:p-7"
                >
                  <div className="mx-auto mb-6 w-full max-w-[17rem]">
                    <div className="rounded-[2rem] border border-[#d4b08a] bg-linear-to-b from-[#f8e7d1] to-[#ecd0ad] p-2 shadow-[0_10px_24px_rgba(117,78,45,0.18)]">
                      <div className="relative aspect-4/5 overflow-hidden rounded-[1.55rem] border border-[#cfb290] bg-[#f8e1c9] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)]">
                        <Image
                          src={member.photo}
                          alt={member.photoAlt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 300px, 72vw"
                        />
                      </div>
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
                        className="ui-icon-btn inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#c8ae8d] bg-white/85 text-[#6b5039] transition hover:bg-[#f8e1c9] hover:text-[#3f2e1f]"
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
                          className="ui-tag rounded-full border border-[#cfb290] bg-white/75 px-3 py-1 text-xs text-[#5d4633]"
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

        <Timeline />
      </main>

      <footer className="relative mt-6 overflow-hidden border-t border-[#d1b08a] bg-linear-to-r from-[#f3d5ad] via-[#f0cfa3] to-[#eabf8f] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.24),transparent_40%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10">
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
                    className="ui-icon-btn inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c8ae8d] bg-white/80 text-[#5d4633] transition hover:bg-[#f8e1c9] hover:text-[#3f2e1f]"
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
