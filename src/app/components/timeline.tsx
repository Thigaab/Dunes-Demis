import {Heart, Map, Wrench, type LucideIcon, Camera, Rocket} from "lucide-react";

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
        description: "Officialisation de l'association Dunes & Demis et déploiement de notre plateforme digitale pour nos partenaires.",
        status: "current",
        icon: Rocket,
    },
    {
        date: "Juin - Octobre 2026",
        title: "Chantier Mécanique & Visibilité",
        description: "Préparation châssis et moteur. C'est l'ouverture des espaces publicitaires sur la carrosserie pour nos sponsors.",
        status: "future",
        icon: Wrench,
    },
    {
        date: "Novembre 2026",
        title: "Collecte Solidaire",
        description: "Centralisation des dons avec nos partenaires. Objectif : 50kg de matériel scolaire pour l'association Enfants du Désert.",
        status: "future",
        icon: Heart,
    },
    {
        date: "Janvier 2027",
        title: "Vérifications & Flocage",
        description: "Tests finaux et pose des logos officiels. Shooting photo pour la communication des sponsors.",
        status: "future",
        icon: Camera,
    },
    {
        date: "Février 2027",
        title: "L'Aventure Nomade",
        description: "6 000 km d'impact solidaire à travers le désert. Suivi en direct et reportages quotidiens sur nos réseaux.",
        status: "future",
        icon: Map,
    },
];

function TimelineMarker({ status, Icon }: { status: TimelineStatus; Icon: LucideIcon }) {
  if (status === "passed") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#f58d47] bg-[#f58d47] text-white" aria-hidden="true">
        <Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
      </span>
    );
  }

  if (status === "current") {
    return (
      <span
        className="relative inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#f58d47] bg-white text-[#f58d47] ring-4 ring-orange-200/50"
        aria-hidden="true"
      >
        <Icon className="relative h-3.5 w-3.5" strokeWidth={2.4} />
      </span>
    );
  }

  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#c8b8a3] bg-white text-[#a7927a]" aria-hidden="true">
      <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
    </span>
  );
}

export function Timeline() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="adventure-kicker">Timeline</p>
        <h2 className="font-display text-4xl text-[#2f2418]">Preparation de l&apos;equipage</h2>
      </div>

      <div className="relative ml-2">
        <span
          className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-linear-to-b from-[#f58d47] via-[#d8c9b6] to-transparent"
          aria-hidden="true"
        />
        <ol className="relative space-y-6 border-l-2 border-[#d8c9b6]/40 pl-8">
          {timelineItems.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[2.85rem] top-5">
                <TimelineMarker status={item.status} Icon={item.icon} />
              </span>
              <div className="adventure-card rounded-2xl border border-[#decbb4] p-5 transition duration-200 ease-out hover:translate-x-1">
                <p className="text-sm font-bold tracking-wide text-[#e47e3a]">{item.date}</p>
                <h3 className="mt-1.5 font-display text-2xl text-[#2f2418]">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6e5a47]">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
