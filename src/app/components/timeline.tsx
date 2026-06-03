import { Heart, Map, Wrench, type LucideIcon, Camera, Rocket } from "lucide-react";

type TimelineStatus = "passed" | "current" | "future";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
  status: TimelineStatus;
  icon: LucideIcon;
};

const timelineItems: TimelineItem[] = [
  {
    date: "Mars - Mai 2026",
    title: "Lancement & Identité",
    description:
      "Officialisation de l'association Dunes & Demis et déploiement de notre plateforme digitale pour nos partenaires.",
    status: "current",
    icon: Rocket,
  },
  {
    date: "Juin - Octobre 2026",
    title: "Chantier Mécanique",
    description:
      "Préparation châssis et moteur. Ouverture des espaces publicitaires sur la carrosserie pour nos sponsors.",
    status: "future",
    icon: Wrench,
  },
  {
    date: "Novembre 2026",
    title: "Collecte Solidaire",
    description:
      "Centralisation des dons avec nos partenaires. Objectif : 50 kg de matériel scolaire pour l'association Enfants du Désert.",
    status: "future",
    icon: Heart,
  },
  {
    date: "Janvier 2027",
    title: "Vérifications & Flocage",
    description:
      "Tests finaux et pose des logos officiels. Shooting photo pour la communication des sponsors.",
    status: "future",
    icon: Camera,
  },
  {
    date: "Février 2027",
    title: "L'Aventure Nomade",
    description:
      "6 000 km d'impact solidaire à travers le désert. Suivi en direct et reportages sur nos réseaux.",
    status: "future",
    icon: Map,
  },
];

function Marker({ status, Icon }: { status: TimelineStatus; Icon: LucideIcon }) {
  if (status === "passed") {
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white"
        aria-hidden="true"
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  }

  if (status === "current") {
    return (
      <span
        className="marker-pulse relative inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-accent bg-surface text-accent"
        aria-hidden="true"
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  }

  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-edge bg-surface text-subtle"
      aria-hidden="true"
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
    </span>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="mt-24 scroll-mt-24 space-y-10 md:mt-32">
      <div className="reveal space-y-2">
        <div className="flex items-center gap-3">
          <span
            className="font-display pointer-events-none select-none text-[5rem] font-black leading-none text-accent/30"
            aria-hidden="true"
          >
            03
          </span>
          <p className="badge">Timeline</p>
        </div>
        <h2 className="font-display text-4xl font-bold text-fg md:text-5xl">
          Préparation de l&apos;équipage
        </h2>
      </div>

      <div className="relative ml-2">
        <div
          className="tire-track pointer-events-none absolute left-0 top-0 h-full w-0.5"
          aria-hidden="true"
        />
        <ol className="space-y-5 pl-8">
          {timelineItems.map((item, i) => (
            <li
              key={item.title}
              className={`reveal-left stagger-${Math.min(i + 1, 4)} relative`}
            >
              <span className="absolute -left-[2.75rem] top-5">
                <Marker status={item.status} Icon={item.icon} />
              </span>
              <div className="card p-5 transition-transform duration-200 ease-out hover:translate-x-1">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">
                  {item.date}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-bold text-fg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
