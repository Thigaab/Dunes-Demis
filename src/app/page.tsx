import { Banknote, Download, Flag, Gift, HeartHandshake, Mail, Megaphone, Package } from "lucide-react";
import Image from "next/image";
import { Timeline } from "./components/timeline";
import { SandParticles } from "./components/sand-particles";
import { StatsCounter } from "./components/stats-counter";
import { siFacebook, siInstagram, siYoutube } from "simple-icons";

type SocialIcon = { path: string; title: string };

const linkedInIcon: SocialIcon = {
  title: "LinkedIn",
  path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z",
};

const missionItems = [
  {
    title: "Volet humanitaire",
    description:
      "Plus qu'un simple don, notre mission est d'apporter les outils de la réussite. En partenariat avec l'association Enfants du Désert, nous acheminons des kits scolaires et sportifs complets. Chaque kilomètre parcouru nous rapproche de notre objectif.",
    stats: [
      "Plus de 20 000 enfants aidés chaque année",
      "28 salles de classe construites depuis la création",
      "50 kg de matériel par voiture",
    ],
    icon: HeartHandshake,
  },
  {
    title: "Défi sportif",
    description:
      "Le désert ne se traverse pas seul. Sans GPS, à l'aide d'une simple boussole et d'un roadbook, nous redécouvrons la solidarité mécanique. La victoire, c'est d'arriver ensemble au bivouac.",
    stats: [
      "0 GPS autorisés",
      "6 000 km de routes et pistes",
      "1 500 équipages unis dans l'effort",
    ],
    icon: Flag,
  },
];

const crewMembers = [
  {
    name: "Thibaut",
    role: "Pilote",
    photo: "/thibaut.webp",
    photoAlt: "Portrait de Thibaut, pilote de l'équipage Dunes & Demis",
    bio: "Passionné de route et de mécanique, il garde le cap dans les passages les plus exigeants.",
    passions: ["Automobile", "Montagne", "Toulouse"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/thibaut-bonefont-aa7822268/", icon: linkedInIcon },
      { label: "Instagram", href: "https://www.instagram.com/thibaut.bonefont/", icon: siInstagram },
    ],
  },
  {
    name: "Elouan",
    role: "Pilote",
    photo: "/elouan.webp",
    photoAlt: "Portrait de Elouan, pilote de l'équipage Dunes & Demis",
    bio: "Stratège du roadbook, il anticipe chaque étape pour allier précision et endurance.",
    passions: ["Sport", "Technologies", "Toulouse"],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/elouan-tailliez-83031a253/", icon: linkedInIcon },
      { label: "Instagram", href: "https://www.instagram.com/elouan.tli/", icon: siInstagram },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/dunes.demis/", icon: siInstagram },
  { label: "Facebook",  href: "https://facebook.com", icon: siFacebook },
  { label: "YouTube",   href: "https://youtube.com",  icon: siYoutube },
];

const teamInstagramLink = "https://www.instagram.com/dunes.demis/";

const impactStats = [
  { value: "+20 000", label: "enfants aidés / an" },
  { value: "6 000 km", label: "de routes et pistes" },
  { value: "1 500",   label: "équipages engagés" },
];

const partnershipTypes = [
  {
    title: "Partenariat financier",
    description: "Un apport monétaire direct pour couvrir les frais d'inscription, la préparation du véhicule, l'assurance et l'équipement.",
    icon: Banknote,
  },
  {
    title: "Partenariat matériel",
    description: "Apport direct de matériel — équipement pour la 4L ou fournitures scolaires destinées aux enfants du Maroc.",
    icon: Package,
  },
  {
    title: "Communication",
    description: "Parlez de notre projet autour de vous, sur vos réseaux ou via votre média. Chaque partage compte.",
    icon: Megaphone,
  },
  {
    title: "Dons & Mécénats",
    description: "La forme de soutien la plus directe : dons en nature ou en numéraire pour les associations partenaires.",
    icon: Gift,
  },
];

const placementHighlights = [
  { label: "Capot / Avant", price: "2 000 €" },
  { label: "Arrière",       price: "2 000 €" },
  { label: "Flancs",        price: "1 000 €" },
  { label: "Dès",           price: "100 €" },
];

function SocialIconSvg({ icon }: { icon: SocialIcon }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d={icon.path} />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-28 pb-16 md:px-10 md:pt-36 md:pb-24">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <SandParticles />

          {/* Badge */}
          <p className="badge animate-in-1">4L Trophy 2027</p>

          {/* Title row */}
          <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="animate-in-2 flex items-end gap-4 md:gap-6">
              <div className="relative h-24 w-24 shrink-0 sm:h-36 sm:w-36 lg:h-44 lg:w-44">
                <Image
                  src="/logo_sans_fond.png"
                  alt="Logo Dunes & Demis"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="font-display text-[4.5rem] font-black leading-[0.88] tracking-tight text-fg sm:text-[6rem] lg:text-[8rem]">
                Dunes<br />&amp;&nbsp;Demis
              </h1>
            </div>

            {/* Desktop aside stats */}
            <div className="animate-in-3 hidden shrink-0 flex-col items-end gap-5 pb-1 md:flex">
              <div className="text-right">
                <p className="font-display text-[2.8rem] font-bold leading-none text-accent">
                  6 000 km
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-subtle">
                  de piste marocaine
                </p>
              </div>
              <div className="h-px w-12 bg-edge" />
              <div className="text-right">
                <p className="font-display text-[2.8rem] font-bold leading-none text-accent">
                  +1 500
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-subtle">
                  équipages engagés
                </p>
              </div>
            </div>
          </div>

          {/* Description + CTAs */}
          <div className="animate-in-3 mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[44ch] text-base leading-relaxed text-muted">
              Une équipe, une 4L et un cap&nbsp;: traverser le désert marocain
              pour une aventure solidaire, humaine et sportive.
            </p>

            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={teamInstagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-edge bg-surface px-5 py-2.5 text-sm font-medium text-muted transition hover:bg-accent-pale hover:border-accent hover:text-fg"
              >
                <SocialIconSvg icon={siInstagram} />
                Suivre l&apos;aventure
              </a>
              <a
                href="/dossier-sponsoring.pdf"
                download
                className="btn-primary"
              >
                <Download className="h-4 w-4" strokeWidth={2.4} />
                Dossier de sponsoring
              </a>
            </div>
          </div>

          {/* Meta line */}
          <p className="animate-in-4 mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
            Maroc &middot; Février 2027 &middot; 6&nbsp;000&nbsp;km
          </p>

          {/* Team photo */}
          <div className="animate-in-5 relative mt-10 overflow-hidden rounded-2xl border border-border" style={{ height: 'clamp(20rem, 42vw, 34rem)' }}>
            <Image
              src="/image.png"
              alt="L'équipe Dunes & Demis"
              fill
              className="object-cover object-[center_30%]"
              sizes="(min-width: 1024px) 1120px, 100vw"
              priority
            />
            {/* Dune silhouette overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden="true">
              <svg
                viewBox="0 0 1440 48"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                style={{ display: 'block' }}
              >
                <path
                  d="M0,36 C240,8 480,40 720,18 C960,0 1200,34 1440,16 L1440,48 L0,48 Z"
                  fill="rgba(238,208,168,0.2)"
                  className="dune-layer"
                />
                <path
                  d="M0,42 C180,20 380,44 600,30 C820,16 1040,44 1260,28 C1340,20 1400,40 1440,34 L1440,48 L0,48 Z"
                  fill="rgba(250,224,186,0.42)"
                  className="dune-layer-b"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ── Mission ──────────────────────────────────────────── */}
        <section id="mission" className="mt-28 scroll-mt-24 space-y-10 md:mt-36">
          <div className="reveal space-y-2">
            <div className="flex items-center gap-4">
              <span
                className="font-display pointer-events-none select-none text-[5rem] font-black leading-none text-accent/30"
                aria-hidden="true"
              >
                01
              </span>
              <p className="badge">Mission</p>
            </div>
            <h2 className="font-display text-4xl font-bold text-fg md:text-5xl">
              Humanitaire &amp; Sport
            </h2>
          </div>

          <StatsCounter stats={impactStats} />

          <div className="grid gap-5 md:grid-cols-2">
            {missionItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`card reveal stagger-${i + 2} flex h-full flex-col p-7`}
                >
                  <Icon className="mb-5 h-8 w-8 text-accent" strokeWidth={1.8} />
                  <h3 className="font-display text-2xl font-bold text-fg">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                  <ul className="mt-auto space-y-2.5 pt-6">
                    {item.stats.map((stat) => (
                      <li
                        key={`${item.title}-${stat}`}
                        className="flex items-center gap-2.5 text-sm text-muted"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {stat}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── Équipage ─────────────────────────────────────────── */}
        <section id="equipage" className="mt-28 scroll-mt-24 space-y-10 md:mt-36">
          <div className="reveal space-y-2">
            <div className="flex items-center gap-4">
              <span
                className="font-display pointer-events-none select-none text-[5rem] font-black leading-none text-accent/30"
                aria-hidden="true"
              >
                02
              </span>
              <p className="badge">Équipage</p>
            </div>
            <h2 className="font-display text-4xl font-bold text-fg md:text-5xl">
              Les deux pilotes
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {crewMembers.map((member, i) => (
              <article
                key={member.name}
                className={`card reveal stagger-${i + 1} p-6 md:p-8`}
              >
                {/* Portrait */}
                <div
                  className="mx-auto mb-6 max-w-[16rem] overflow-hidden rounded-[1.25rem] border border-border"
                  style={{ aspectRatio: '4/5' }}
                >
                  <Image
                    src={member.photo}
                    alt={member.photoAlt}
                    width={300}
                    height={375}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="font-display text-2xl font-bold text-fg">{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {member.role}
                </p>

                {/* Socials */}
                <div className="mt-3 flex gap-2">
                  {member.socials.map((s) => (
                    <a
                      key={`${member.name}-${s.label}`}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} de ${member.name}`}
                      className="icon-btn h-9 w-9 cursor-pointer"
                    >
                      <SocialIconSvg icon={s.icon} />
                    </a>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">{member.bio}</p>

                {/* Passions */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
                    Passions
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {member.passions.map((passion) => (
                      <span
                        key={`${member.name}-${passion}`}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {passion}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Timeline />

        {/* ── Partenariat ──────────────────────────────────────── */}
        <section id="partenariat" className="mt-28 scroll-mt-24 space-y-10 md:mt-36">
          <div className="reveal space-y-2">
            <div className="flex items-center gap-4">
              <span
                className="font-display pointer-events-none select-none text-[5rem] font-black leading-none text-accent/30"
                aria-hidden="true"
              >
                04
              </span>
              <p className="badge">Partenariat</p>
            </div>
            <h2 className="font-display text-4xl font-bold text-fg md:text-5xl">
              Comment nous soutenir
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {partnershipTypes.map((item, i) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`card reveal stagger-${i + 1} flex flex-col p-7`}
                >
                  <Icon className="mb-5 h-8 w-8 text-accent" strokeWidth={1.8} />
                  <h3 className="font-display text-xl font-bold text-fg">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── Visibilité ───────────────────────────────────────── */}
        <section id="visibilite" className="mt-28 scroll-mt-24 space-y-10 md:mt-36">
          <div className="reveal space-y-2">
            <div className="flex items-center gap-4">
              <span
                className="font-display pointer-events-none select-none text-[5rem] font-black leading-none text-accent/30"
                aria-hidden="true"
              >
                05
              </span>
              <p className="badge">Visibilité</p>
            </div>
            <h2 className="font-display text-4xl font-bold text-fg md:text-5xl">
              Votre logo sur la 4L
            </h2>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="reveal relative overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src="/plan_4L.png"
                alt="Plan des emplacements de logo sur la 4L"
                width={966}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="reveal stagger-2 flex flex-col gap-5">
              <p className="text-sm leading-relaxed text-muted">
                Votre logo voyage avec nous à travers le Maroc — 6&nbsp;000&nbsp;km d&apos;exposition
                devant des milliers de spectateurs et sur tous nos supports de communication.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {placementHighlights.map((p) => (
                  <div key={p.label} className="card p-5 text-center">
                    <p className="font-display text-2xl font-bold text-accent">{p.price}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-subtle">
                      {p.label}
                    </p>
                  </div>
                ))}
              </div>
              <a href="/dossier-sponsoring.pdf" download className="btn-primary justify-center">
                <Download className="h-4 w-4" strokeWidth={2.4} />
                Voir le dossier complet
              </a>
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────── */}
        <section id="contact" className="mt-28 scroll-mt-24 space-y-10 md:mt-36">
          <div className="reveal space-y-2">
            <div className="flex items-center gap-4">
              <span
                className="font-display pointer-events-none select-none text-[5rem] font-black leading-none text-accent/30"
                aria-hidden="true"
              >
                06
              </span>
              <p className="badge">Contact</p>
            </div>
            <h2 className="font-display text-4xl font-bold text-fg md:text-5xl">
              Parlons-en
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <a
              href="mailto:dunes.demis@gmail.com"
              className="card reveal stagger-1 flex flex-col items-center gap-4 p-8 text-center transition hover:border-accent/40"
            >
              <Mail className="h-8 w-8 text-accent" strokeWidth={1.8} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-subtle">Email</p>
                <p className="mt-1 text-sm font-medium text-fg">dunes.demis@gmail.com</p>
              </div>
            </a>
            <a
              href={teamInstagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card reveal stagger-3 flex flex-col items-center gap-4 p-8 text-center transition hover:border-accent/40"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current text-accent">
                <path d={siInstagram.path} />
              </svg>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-subtle">Instagram</p>
                <p className="mt-1 text-sm font-medium text-fg">@dunes.demis</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="mt-16 border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-7 md:px-10">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src="/logo_sans_fond.png"
                alt="Logo Dunes & Demis"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-fg">Dunes &amp; Demis</p>
              <p className="text-xs text-subtle">4L Trophy 2027</p>
            </div>
          </div>
          <ul className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="icon-btn h-11 w-11 cursor-pointer"
                >
                  <SocialIconSvg icon={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
