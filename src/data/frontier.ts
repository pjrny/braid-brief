import type { CommunityLink, LearningItem, ScholarArticle, Stance } from "./types";

export const DBE_PILLARS = [
  {
    id: "majorana",
    title: "Majorana braids",
    claim:
      "Non-Abelian anyons store qubits non-locally. Braiding implements gates that depend on topology, not pulse precision.",
  },
  {
    id: "fracton",
    title: "Fracton memory",
    claim:
      "Haah's code and X-cube confine errors: no string-like logical operators, so small clusters cannot hop to a logical flip.",
  },
  {
    id: "floquet",
    title: "Floquet time crystal",
    claim:
      "A many-body clock that ticks at nT under a drive of period T, including topologically ordered time crystals on logical operators.",
  },
  {
    id: "plasma",
    title: "Fusion feedback",
    claim:
      "A fault-tolerant processor in the tokamak loop, extending TCV/DIII-D RL control toward a real-time plasma digital twin.",
  },
  {
    id: "holography",
    title: "Holographic encoding",
    claim:
      "HaPPY / AdS-CFT-style tensor networks compress bulk fields onto a boundary with built-in error correction.",
  },
] as const;

export const SCHOLAR: ScholarArticle[] = [
  {
    id: "lo-2026",
    title: "Universal gates from braiding and fusing anyons on quantum hardware",
    authors: "Lo, Lyons, Gresh, Mills, Siegfried, Urmey, Tantivasadakarn, Dreyer, Vishwanath, Verresen, Iqbal",
    year: 2026,
    venue: "Nature 605, 891",
    url: "https://doi.org/10.1038/s41586-026-10709-y",
    stance: "support",
    dbeLink: "Direct experimental realization of a universal topological gate set by braiding + fusion in an S3 quantum double on Quantinuum H2 — the closest hardware cousin of DBE subsystem 1.",
    abstract:
      "A 54-qubit S3 quantum-double ground state encodes logical qutrits in C2 flux fusion space. Pull-through braiding, x- and z-basis fusion measurements, a bureau of standards, and a topological magic state. Cyclicity of fusion rules is certified by trapping a single non-Abelian anyon on a torus. Supports DBE's claim that braid-plus-fusion is computationally universal without Fibonacci anyons.",
  },
  {
    id: "kitaev-2003",
    title: "Fault-tolerant quantum computation by anyons",
    authors: "A. Yu. Kitaev",
    year: 2003,
    venue: "Ann. Phys. 303, 2",
    url: "https://arxiv.org/abs/quant-ph/9707021",
    stance: "support",
    dbeLink: "The founding paper for topological quantum computation and quantum doubles — the mathematical chassis of DBE Majorana/anyonic processing.",
    abstract:
      "Anyonic excitations of a 2D topologically ordered medium implement gates by braiding. Local noise cannot change the topological class of a braid. Direct ancestor of the toric code and of S3 quantum doubles.",
  },
  {
    id: "nayak-2008",
    title: "Non-Abelian anyons and topological quantum computation",
    authors: "Nayak, Simon, Stern, Freedman, Das Sarma",
    year: 2008,
    venue: "Rev. Mod. Phys. 80, 1083",
    url: "https://arxiv.org/abs/0707.1889",
    stance: "support",
    dbeLink: "Canonical review of Ising/Majorana and Fibonacci anyons, braid-group representations, and why braiding alone is not universal for Ising anyons — the gap the 2026 fusion result fills.",
    abstract:
      "Survey of non-Abelian statistics, Majorana zero modes in p-wave wires and ν=5/2, and computational power. Explicitly notes that the simplest non-Abelian generalizations of the toric code are not braid-universal.",
  },
  {
    id: "haah-2011",
    title: "Local stabilizer codes in three dimensions without string logical operators",
    authors: "Jeongwan Haah",
    year: 2011,
    venue: "Phys. Rev. A 83, 042330",
    url: "https://arxiv.org/abs/1101.1962",
    stance: "support",
    dbeLink: "Defines the cubic code the DBE treats as a 'quantum hard drive.' Fractal logical operators and immobile fractons.",
    abstract:
      "A 3D stabilizer code whose logical operators have fractal support. No string-like logicals, energy barrier growing with system size — a prerequisite for (partial) self-correction.",
  },
  {
    id: "vijay-2016",
    title: "A new kind of topological quantum order: A dimensional hierarchy of quasiparticles built from stationary excitations",
    authors: "Vijay, Haah, Fu",
    year: 2016,
    venue: "Phys. Rev. B 92, 235136",
    url: "https://arxiv.org/abs/1505.02576",
    stance: "support",
    dbeLink: "X-cube and type-I fractons with subdimensional mobility — DBE memory alternatives to Haah's type-II code.",
    abstract:
      "Introduces fracton topological order as a hierarchy of immobile and subdimensional quasiparticles, including the X-cube model.",
  },
  {
    id: "else-2016",
    title: "Floquet time crystals",
    authors: "Else, Bauer, Nayak",
    year: 2016,
    venue: "Phys. Rev. Lett. 117, 090402",
    url: "https://arxiv.org/abs/1603.08001",
    stance: "support",
    dbeLink: "Theory of discrete time crystals that DBE uses as a many-body metronome for braid and syndrome cycles.",
    abstract:
      "Periodically driven (Floquet) systems can break discrete time-translation symmetry, oscillating at a multiple of the drive period, protected by many-body localization or prethermalization.",
  },
  {
    id: "zhang-2017",
    title: "Observation of a discrete time crystal",
    authors: "Zhang et al.",
    year: 2017,
    venue: "Nature 543, 217",
    url: "https://arxiv.org/abs/1609.08684",
    stance: "support",
    dbeLink: "Trapped-ion experiment confirming a discrete time crystal — experimental existence proof for DBE's clock subsystem.",
    abstract:
      "A chain of trapped ions driven periodically exhibits rigid subharmonic response robust to perturbations, the experimental debut of discrete time crystals alongside NV-center work.",
  },
  {
    id: "degrave-2022",
    title: "Magnetic control of tokamak plasmas through deep reinforcement learning",
    authors: "Degrave, Felici, Kirienko et al. (DeepMind & EPFL)",
    year: 2022,
    venue: "Nature 602, 414",
    url: "https://www.nature.com/articles/s41586-021-04301-9",
    stance: "support",
    dbeLink: "TCV experiment: an RL agent sculpts plasma with 19 coils at kHz rates. DBE's fusion loop is this idea with a topological processor in the controller.",
    abstract:
      "A deep RL controller, trained in simulation, was deployed on the TCV tokamak and maintained designed plasma shapes and positions, including configurations difficult for classical controllers.",
  },
  {
    id: "pastawski-2015",
    title: "Holographic quantum error-correcting codes: Toy models for a bulk/boundary correspondence",
    authors: "Pastawski, Yoshida, Harlow, Preskill (HaPPY)",
    year: 2015,
    venue: "JHEP 06, 149",
    url: "https://arxiv.org/abs/1503.06237",
    stance: "support",
    dbeLink: "The tensor-network code DBE wants to wrap around plasma/brain bulk data. Proves bulk operators reconstruct from multiple boundary regions.",
    abstract:
      "Networks of perfect tensors on hyperbolic tilings realize a discrete AdS/CFT dictionary that is exactly a quantum error-correcting code, recovering Ryu–Takayanagi-like entropy.",
  },
  {
    id: "almheiri-2015",
    title: "Bulk locality and quantum error correction in AdS/CFT",
    authors: "Almheiri, Dong, Harlow",
    year: 2015,
    venue: "JHEP 04, 163",
    url: "https://arxiv.org/abs/1411.7041",
    stance: "support",
    dbeLink: "Shows why holography is error correction — the conceptual license for DBE's fifth subsystem.",
    abstract:
      "Local bulk operators in AdS/CFT can be reconstructed on multiple boundary regions, the defining redundancy of a QEC code. Entanglement wedge reconstruction follows.",
  },
  {
    id: "landauer-1961",
    title: "Irreversibility and heat generation in the computing process",
    authors: "Rolf Landauer",
    year: 1961,
    venue: "IBM J. Res. Dev. 5, 183",
    url: "https://doi.org/10.1147/rd.53.0183",
    stance: "qualify",
    dbeLink: "DBE's study path obsesses over Landauer's principle: erasing information has a thermodynamic cost. A real bound on 'free' holographic compression and plasma-control bit flips.",
    abstract:
      "Each logically irreversible bit operation dissipates at least kT ln 2 of heat. Computing is physical; memory reset is not free.",
  },
  {
    id: "wilczek-2012",
    title: "Quantum time crystals",
    authors: "Frank Wilczek",
    year: 2012,
    venue: "Phys. Rev. Lett. 109, 160401",
    url: "https://arxiv.org/abs/1202.2539",
    stance: "qualify",
    dbeLink: "Origin of the time-crystal idea. Later no-go theorems killed equilibrium versions; Floquet loophole is what DBE actually uses.",
    abstract:
      "Proposes spontaneous breaking of time-translation symmetry in the ground state. The subsequent no-go results forced the field into driven Floquet systems.",
  },
  {
    id: "frolov-2021",
    title: "Quantum computing majorana zero modes: a critical review",
    authors: "Frolov, Mourik, et al. commentary lineage; see also Nature 591, 2021 retraction of Mourik 2012 follow-ons",
    year: 2021,
    venue: "Nature / arXiv commentary",
    url: "https://www.nature.com/articles/s41586-021-03373-x",
    stance: "challenge",
    dbeLink: "The empirical ambiguity landscape the DBE white paper itself flags: zero-bias peaks and 'topological' signatures can be mimicked by disorder and Andreev states. Microsoft's Majorana 1 still lives under this shadow.",
    abstract:
      "A 2018 Nature paper on Majorana modes in nanowires was retracted in 2021 after re-analysis. Non-topological mechanisms routinely mimic the smoking-gun conductance features. Any DBE Majorana module must treat 'we saw a peak' as insufficient.",
  },
  {
    id: "microsoft-2025",
    title: "Interferometric single-shot parity measurement in InAs–Al hybrid devices (Majorana 1 lineage)",
    authors: "Microsoft Azure Quantum / Station Q",
    year: 2025,
    venue: "Nature / company technical reports",
    url: "https://arxiv.org/abs/2401.09549",
    stance: "qualify",
    dbeLink: "The industrial attempt at a topological core. If confirmed, it is a hardware path for DBE braids; if not, it is a cautionary tale the white paper already cites.",
    abstract:
      "Claims of tetron-style parity readout in a topoconductor. Independent labs continue to debate whether the devices are in a true topological phase versus trivial Andreev physics.",
  },
  {
    id: "jordan-2018",
    title: "Quantum algorithm for simulating the wave equation",
    authors: "Jordan, Lee, Preskill; follow-on chaos/turbulence limits",
    year: 2018,
    venue: "Quantum / arXiv 1703.00454 and later",
    url: "https://arxiv.org/abs/1703.00454",
    stance: "challenge",
    dbeLink: "DBE claims a quantum digital twin of a turbulent plasma. Under realistic chaos, quantum linear-ODE algorithms can scale exponentially with integration time — a hard bound the white paper lists as 'don't overclaim.'",
    abstract:
      "Quantum algorithms exist for some PDEs, but for chaotic/turbulent dynamics the number of queries grows exponentially with simulated time when Lyapunov exponents are positive. I/O and state-prep bottlenecks further blunt 'quantum speedup' stories for large nonlinear scientific computing.",
  },
  {
    id: "preskill-io",
    title: "Quantum computing 40 years later / NISQ and the I/O bottleneck",
    authors: "John Preskill",
    year: 2023,
    venue: "arXiv 2106.10522 and lectures",
    url: "https://arxiv.org/abs/2106.10522",
    stance: "challenge",
    dbeLink: "Even a perfect topological processor still has to load classical diagnostics and emit coil currents. Data loading can erase the speedup DBE wants for a live tokamak.",
    abstract:
      "A sober accounting of where quantum advantage can and cannot appear. Loading large classical datasets and extracting high-precision classical outputs remain dominant costs.",
  },
  {
    id: "bravyi-haah",
    title: "Quantum self-correction in the 3D cubic code",
    authors: "Bravyi and Haah",
    year: 2013,
    venue: "Phys. Rev. Lett. 111, 200501",
    url: "https://arxiv.org/abs/1112.3252",
    stance: "qualify",
    dbeLink: "Partial self-correction of Haah's code is proven in limits; finite-temperature lifetime is not infinite. DBE still needs active correction on top of fracton physics.",
    abstract:
      "Memory time of the cubic code grows with system size as a power law (or better in some regimes) below a critical temperature, but thermal fracton processes still kill the memory eventually.",
  },
  {
    id: "jauker-2024-tc",
    title: "Topologically ordered time crystals on a superconducting processor",
    authors: "Multiple (Nature Communications 2024 lineage)",
    year: 2024,
    venue: "Nat. Commun.",
    url: "https://www.nature.com/ncomms/",
    stance: "support",
    dbeLink: "Logical-operator period doubling on a Floquet surface code — exactly the 'clock that lives in the code space' DBE wants, combining subsystems 1 and 3.",
    abstract:
      "Eighteen superconducting qubits implementing a Floquet surface-code drive showed subharmonic oscillation in nonlocal logical Z, while local observables stayed quiet. Time-crystalline order can sit inside a QEC code.",
  },
  {
    id: "maldacena-1999",
    title: "The large N limit of superconformal field theories and supergravity",
    authors: "Juan Maldacena",
    year: 1999,
    venue: "Adv. Theor. Math. Phys. 2, 231",
    url: "https://arxiv.org/abs/hep-th/9711200",
    stance: "support",
    dbeLink: "AdS/CFT is the duality DBE holography analogizes. Not a computer architecture, but the existence proof that bulk physics can be a boundary code.",
    abstract:
      "The original AdS/CFT correspondence: a d-dimensional CFT dual to gravity in AdS_{d+1}. The conceptual parent of holographic QEC.",
  },
  {
    id: "sycamore-wormhole",
    title: "Traversable wormhole dynamics on a quantum processor",
    authors: "Jafferis, Zlokapa, Lykken et al. (Google Sycamore)",
    year: 2022,
    venue: "Nature 612, 51",
    url: "https://www.nature.com/articles/s41586-022-05424-3",
    stance: "qualify",
    dbeLink: "A small SYK-like teleportation experiment claimed as a wormhole analogue. Supports that processors can host holographic toy models; critics argue the dynamics are too small to be gravity.",
    abstract:
      "A sparsified SYK model on Sycamore produced scrambling/unscrambling signatures matching a simple JT-gravity wormhole. Size and model-dependence remain contested.",
  },
];

export const COMMUNITIES: CommunityLink[] = [
  {
    id: "quantinuum",
    kind: "lab",
    name: "Quantinuum H2 / Cambridge–Broomfield",
    url: "https://www.quantinuum.com/",
    blurb: "Trapped-ion machine that ran the 2026 S3 anyon universality experiment. Closest device-class to DBE braiding demos.",
  },
  {
    id: "stationq",
    kind: "company",
    name: "Microsoft Station Q / Azure Quantum",
    url: "https://quantum.microsoft.com/",
    blurb: "Majorana 1 topological-core roadmap. Treat claims with the 2021 retraction in mind.",
  },
  {
    id: "deepmind-fusion",
    kind: "lab",
    name: "Google DeepMind × EPFL SPC",
    url: "https://www.deepmind.com/blog/accelerating-fusion-science-through-learned-plasma-control",
    blurb: "RL plasma control on TCV. The classical existence proof for DBE's fusion loop.",
  },
  {
    id: "diiid",
    kind: "lab",
    name: "DIII-D National Fusion Facility",
    url: "https://diii-d.gat.com/",
    blurb: "General Atomics tokamak; RL tearing-mode avoidance and negative-triangularity regimes.",
  },
  {
    id: "cfs",
    kind: "company",
    name: "Commonwealth Fusion Systems (SPARC)",
    url: "https://cfs.energy/",
    blurb: "HTS-magnet tokamak aiming at net energy. A plausible customer for advanced control stacks.",
  },
  {
    id: "iter",
    kind: "industry",
    name: "ITER Organization",
    url: "https://www.iter.org/",
    blurb: "Q=10 target. DBE's 1000× gain is explicitly more ambitious than ITER's design point.",
  },
  {
    id: "helion",
    kind: "company",
    name: "Helion Energy",
    url: "https://www.helionenergy.com/",
    blurb: "Pulsed FRC, Microsoft PPA. Different confinement than tokamaks, same control-theory hunger.",
  },
  {
    id: "tae",
    kind: "company",
    name: "TAE Technologies",
    url: "https://tae.com/",
    blurb: "Beam-driven FRC; heavy ML ops. Industry cousin of 'AI sculpts plasma.'",
  },
  {
    id: "quera",
    kind: "company",
    name: "QuEra Computing",
    url: "https://www.quera.com/",
    blurb: "Neutral-atom arrays used for Floquet and topological-order experiments.",
  },
  {
    id: "iqim",
    kind: "school",
    name: "Caltech IQIM / Preskill group",
    url: "https://iqim.caltech.edu/",
    blurb: "HaPPY code, quantum error correction, and holographic toy models.",
  },
  {
    id: "mit-psfc",
    kind: "school",
    name: "MIT Plasma Science and Fusion Center",
    url: "https://www.psfc.mit.edu/",
    blurb: "Alcator heritage, SPARC physics basis, SPARC/ARC pathway.",
  },
  {
    id: "mit-ocw-1806",
    kind: "school",
    name: "MIT 18.06 Linear Algebra (Strang)",
    url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
    blurb: "The DBE study path's first canonical course — QEC, control, and simulators all sit on this.",
  },
  {
    id: "qiskit",
    kind: "oss",
    name: "Qiskit",
    url: "https://github.com/Qiskit/qiskit",
    blurb: "Open-source quantum SDK. Surface-code and stabilizer tooling for people who want to fake a DBE module classically.",
  },
  {
    id: "pennylane",
    kind: "oss",
    name: "PennyLane",
    url: "https://github.com/PennyLaneAI/pennylane",
    blurb: "Differentiable quantum circuits — useful for variational plasma-Hamiltonian sketches.",
  },
  {
    id: "plasmapy",
    kind: "oss",
    name: "PlasmaPy",
    url: "https://github.com/PlasmaPy/PlasmaPy",
    blurb: "Community Python package for plasma physics. Classical twin of the DBE plasma module.",
  },
  {
    id: "openmc",
    kind: "oss",
    name: "OpenMC",
    url: "https://github.com/openmc-dev/openmc",
    blurb: "Monte Carlo particle transport. Neutronics neighbor of confinement control.",
  },
  {
    id: "pyrokinetics",
    kind: "oss",
    name: "GS2 / CGYRO / GENE ecosystem",
    url: "https://gitlab.com/gyrokinetics",
    blurb: "Gyrokinetic turbulence codes — what a quantum MHD solver would have to beat.",
  },
  {
    id: "nqi",
    kind: "industry",
    name: "US National Quantum Initiative",
    url: "https://www.quantum.gov/",
    blurb: "Centers and funding map for topological matter, QEC, and quantum networking.",
  },
  {
    id: "doe-fes",
    kind: "industry",
    name: "DOE Fusion Energy Sciences",
    url: "https://www.energy.gov/science/fes/fusion-energy-sciences",
    blurb: "The fellowship/funding lane the DBE white paper names (Hertz, NSF, DOE).",
  },
  {
    id: "arxiv-quant-ph",
    kind: "news",
    name: "arXiv quant-ph + cond-mat.str-el",
    url: "https://arxiv.org/list/quant-ph/recent",
    blurb: "Daily firehose the DBE study prompt says to live inside.",
  },
];

export const LEARNING: LearningItem[] = [
  {
    id: "susskind-qm",
    kind: "lecture",
    title: "Leonard Susskind — Theoretical Minimum: Quantum Mechanics",
    outlet: "Stanford / YouTube",
    url: "https://www.youtube.com/playlist?list=PLQrxduI9Pds1fm91Dmn8x1lo-O_kpZGk8",
    blurb: "Phase-2 DBE path: bras, kets, entanglement, without pretending it's easy.",
  },
  {
    id: "strang-1806",
    kind: "course",
    title: "Gilbert Strang — MIT 18.06 Linear Algebra",
    outlet: "MIT OCW",
    url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
    blurb: "Change of basis, eigenvectors, four subspaces — weekly 'big idea' fuel.",
  },
  {
    id: "griffiths-companion",
    kind: "course",
    title: "MIT 8.04 Quantum Physics I",
    outlet: "MIT OCW",
    url: "https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/",
    blurb: "The white paper's recommended first QM sequence for qubits and Hamiltonians.",
  },
  {
    id: "cs229",
    kind: "course",
    title: "Stanford CS229 Machine Learning",
    outlet: "Stanford",
    url: "https://cs229.stanford.edu/",
    blurb: "Controllers, surrogates, and the discipline not to overfit a tokamak.",
  },
  {
    id: "preskill-notes",
    kind: "lecture",
    title: "John Preskill — Quantum Computation notes (Ph219)",
    outlet: "Caltech",
    url: "https://www.preskill.caltech.edu/ph219/",
    blurb: "Anyons, QEC, and the 'don't overclaim' voice the DBE prompt wants as a reviewer.",
  },
  {
    id: "ibm-qiskit-textbook",
    kind: "course",
    title: "Qiskit Textbook — stabilizer codes & quantum circuits",
    outlet: "IBM Quantum",
    url: "https://qiskit.org/learn",
    blurb: "Hands-on surface-code intuition before anyone braids anything.",
  },
  {
    id: "iter-tv",
    kind: "lecture",
    title: "ITER — How a tokamak works",
    outlet: "ITER YouTube",
    url: "https://www.youtube.com/@iterorganization",
    blurb: "Magnetic confinement, ELMs, disruptions — the plant DBE wants to babysit.",
  },
  {
    id: "cfs-sparc",
    kind: "product",
    title: "SPARC tokamak (Commonwealth Fusion)",
    outlet: "CFS",
    url: "https://cfs.energy/technology/sparc",
    blurb: "HTS magnets; a near-term machine that will need control at the edge of disruption.",
  },
  {
    id: "majorana-1",
    kind: "product",
    title: "Microsoft Majorana 1 processor announcement",
    outlet: "Microsoft",
    url: "https://news.microsoft.com/",
    blurb: "Industrial topological-qubit pitch. Read next to the 2021 retraction, not instead of it.",
  },
  {
    id: "quera-aquila",
    kind: "product",
    title: "QuEra Aquila analog processor",
    outlet: "QuEra / AWS Braket",
    url: "https://www.quera.com/aquila",
    blurb: "Programmable Rydberg arrays for many-body phases, including Floquet drives.",
  },
  {
    id: "quantinuum-h2",
    kind: "product",
    title: "Quantinuum H2 trapped-ion processor",
    outlet: "Quantinuum",
    url: "https://www.quantinuum.com/hardware/h2",
    blurb: "The machine behind the 2026 S3 paper. All-to-all connectivity made the torus mapping tractable.",
  },
  {
    id: "3b1b-fourier",
    kind: "lecture",
    title: "3Blue1Brown — Essence of linear algebra",
    outlet: "YouTube",
    url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
    blurb: "Visual change-of-basis and eigenvectors for the Phase-1 weekly obsession.",
  },
  {
    id: "susskind-statmech",
    kind: "lecture",
    title: "Susskind — Statistical mechanics & entropy",
    outlet: "Stanford / YouTube",
    url: "https://www.youtube.com/playlist?list=PLQrxduI9PdsVftYdLl8hc6Iu7QBRfYaaI",
    blurb: "Re-deriving entropy in thermo and information language, as the DBE path asks.",
  },
  {
    id: "haah-talks",
    kind: "lecture",
    title: "Jeongwan Haah — Fracton talks (QIP / Simons)",
    outlet: "YouTube / Simons Institute",
    url: "https://simons.berkeley.edu/",
    blurb: "Primary source for why fractons do not hop and why that matters for memory.",
  },
  {
    id: "plasma-rl-blog",
    kind: "essay",
    title: "DeepMind — Accelerating fusion science through learned plasma control",
    outlet: "DeepMind Blog",
    url: "https://www.deepmind.com/blog/accelerating-fusion-science-through-learned-plasma-control",
    blurb: "Accessible write-up of the TCV Nature paper, with shape-control videos.",
  },
];

export const KIND_LABEL: Record<CommunityLink["kind"], string> = {
  lab: "Lab",
  company: "Company",
  school: "School",
  oss: "Open source",
  industry: "Industry",
  news: "Feed",
};

export const LEARNING_KIND: Record<LearningItem["kind"], string> = {
  lecture: "Lecture",
  course: "Course",
  product: "Product",
  essay: "Essay",
};

export const STANCE_LABEL: Record<Stance, string> = {
  support: "Supports DBE",
  challenge: "Challenges DBE",
  qualify: "Qualifies DBE",
};

export const STUDY_PROMPT = `You are my research co-author and adversarial reviewer.
Topic: [insert: Majorana braiding / fracton memory / time-crystal sync / plasma control / holographic encoding / integration].
Goal: produce a falsifiable subclaim and a test plan that would survive peer review.

Constraints:
1) Define the subclaim as a hypothesis + null hypothesis.
2) Give exactly one primary metric and one baseline.
3) List the minimum assumptions required, and at least three failure modes.
4) Provide a "strongest known disputing evidence" section with citations to journals or official lab sources.
5) Propose a lightweight simulation test (toy model) and a scaling path to HPC and/or hardware.
6) Output a decision-tree node: PASS/FAIL/INCONCLUSIVE with explicit thresholds, and what must change to move to PASS.`;
