// Data terpusat untuk semua game/turnamen.
// Tambah / ubah game cukup lewat array ini — semua halaman
// (Choose Your Plan, Game Detail, Competition) memakai sumber yang sama.

export const games = [
  {
    slug: "mobile-legends",
    name: "Mobile Legends",
    shortName: "ML",
    tagline: "Bang Bang",
    description:
      "Battle 5v5 penuh strategi. Kumpulkan tim terbaikmu, susun draft pick yang mematikan, dan rebut takhta MPL kampus tahun ini.",
    format: "5v5 Single Elimination",
    slots: 32,
    prizePool: "Rp 15.000.000",
    registerDeadline: "2026-09-20T23:59:00",
    accentIcon: "controller",
  },
  {
    slug: "efootball",
    name: "eFootball",
    shortName: "EF",
    tagline: "1v1 Showdown",
    description:
      "Adu taktik dan skill individu di lapangan digital. Format 1v1 head-to-head, satu kesalahan bisa menentukan kemenangan.",
    format: "1v1 Round Robin + Playoff",
    slots: 64,
    prizePool: "Rp 8.000.000",
    registerDeadline: "2026-09-18T23:59:00",
    accentIcon: "ball",
  },
  {
    slug: "pubg-mobile",
    name: "PUBG Mobile",
    shortName: "PM",
    tagline: "Battle Royale",
    description:
      "Bertahan hidup di zona yang terus menyempit. Squad 4 orang, poin kill dan placement menentukan siapa yang chicken dinner.",
    format: "Squad — 4 Match Point System",
    slots: 25,
    prizePool: "Rp 12.000.000",
    registerDeadline: "2026-09-22T23:59:00",
    accentIcon: "shield",
  },
  {
    slug: "valorant",
    name: "Valorant",
    shortName: "VL",
    tagline: "Tactical 5v5",
    description:
      "Tembak-menembak taktis dengan agent unik. Kontrol map, eksekusi rotasi, dan menangkan ronde demi ronde menuju grand final.",
    format: "5v5 Double Elimination",
    slots: 24,
    prizePool: "Rp 18.000.000",
    registerDeadline: "2026-09-25T23:59:00",
    accentIcon: "crosshair",
  },
];

export const getGameBySlug = (slug) => games.find((g) => g.slug === slug);
