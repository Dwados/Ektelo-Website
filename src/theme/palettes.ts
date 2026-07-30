/**
 * Ektelio colour system.
 *
 * Every surface, accent, and text colour in the site resolves to a CSS custom
 * property emitted from one of these palettes. Tailwind never sees a hex value —
 * it references `rgb(var(--c-token) / <alpha-value>)` — so swapping the active
 * palette re-skins the entire site with no component changes.
 *
 * Choose the active palette with the EKTELIO_THEME environment variable at build
 * time (see next.config.mjs and app/layout.tsx). Default: "ektelio".
 */

export type Palette = {
  key: string;
  name: string;
  oneLiner: string;
  rationale: string;
  risk: string;
  colors: {
    /* Dark side */
    deepest: string;
    base: string;
    raised: string;
    onDarkStrong: string;
    onDarkBody: string;
    onDarkFaint: string;
    hairlineDark: string; // rgba() string
    gridDark: string; // rgba() string
    /* Accents */
    accent: string;
    accentHover: string;
    accentSoft: string;
    accentOnLight: string;
    signal: string;
    signalOnLight: string;
    /* Light side */
    canvas: string;
    canvasAlt: string;
    hairlineLight: string;
    textStrong: string;
    textBody: string;
    textSoft: string;
    textFaint: string;
  };
};

/* ─────────────────────────── colour utilities ─────────────────────────── */

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "").trim();
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

/** "#2D7FF9" -> "45 127 249" — the channel form Tailwind's <alpha-value> needs. */
export function channels(hex: string): string {
  return hexToRgb(hex).join(" ");
}

/** Linear blend between two hex colours. t=0 returns a, t=1 returns b. */
function mix(a: string, b: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  const to = (x: number, y: number) =>
    Math.round(x + (y - x) * t)
      .toString(16)
      .padStart(2, "0");
  return `#${to(r1, r2)}${to(g1, g2)}${to(b1, b2)}`;
}

/* ─────────────────────────── palettes ─────────────────────────── */

export const palettes: Record<string, Palette> = {
  signature: {
    key: "signature",
    name: "Signal Navy",
    oneLiner:
      "The incumbent held to its own standard: the same ink navy, a blue lifted just far enough to draw its own hero graphic without dropping white off its buttons, and a green desaturated rather than brightened, so the gain reads as instrumentation instead of mint.",
    rationale:
      "The assigned direction was correct and the dark stack survives review intact — deepest #05101F, base #082034 and raised #102E48 step cleanly at 1.15:1 and 1.19:1, the on-dark text ramp measures 15.38 / 8.64 / 5.47 against base with onDarkFaint holding 6.29:1 on deepest, and the composited hairline (1.27:1) and blueprint grid (1.07:1) land exactly where a faint technical overlay should. Four tokens are unchanged for a reason: they already pass and any movement would only churn assets already in circulation. Three corrections do the real work. First, the primary blue was too dark to serve its own signature: at #2069E8 the hero SVG's flow lines measured 2.82:1 on the raised panel, under the 3:1 non-text floor. #2470EC clears it at 3.06:1 and lifts accent-on-base from 3.35 to 3.64:1, while white labels still hold 4.56:1 — the accessible-on-white sibling #1450BE is untouched at 7.00:1, which was the proposal's strongest single move and answers the incumbent #2D7FF9's 3.81:1 failure. Second, the secondary was corrected in the wrong axis: #35D6A0 sat at luminance 0.514, brighter than both the incumbent emerald and the on-dark body text, which is what makes a green read as a payment app, not what fixes it. #31BE95 keeps the genuine insight — saturation 100 down to 59 — and the incumbent hue almost exactly (162.9 to 162.6), but puts value back where a measured readout belongs, so a mint '%' no longer outshines the '-64%' it qualifies. Third, the light side was made to match the claim: canvasAlt #EAEFF6, hairlineLight #D2DBE7 and textFaint #556A82 replace values that were effectively framework defaults, giving six of the eleven bands the same 209-216 degree ink bias as the dark stack and rescuing the white cards, whose only border was previously a 1.15:1 line against the band behind them. Every load-bearing pair now measures: textFaint 5.43 on canvas and 4.82 on canvasAlt, textSoft 6.82 and 6.06, signal 7.05 on base, signalOnLight 6.55 on canvas, accentSoft 7.35 on base.",
    risk:
      "Two things a buyer should be told plainly. First, the proposal's own risk statement stands and I did not remove it: this is navy plus blue plus green, the most crowded palette in government and enterprise technology, and it will read credible but not ownable — the separation from IBM, Accenture or any national digital agency has to come from the blueprint grid, the mono eyebrows and the tabular metrics, because the hue will not do it. Second, a structural tension worth documenting rather than hiding: on a navy this dark, the primary accent cannot simultaneously give white button labels a comfortable margin and give blue-on-navy line art a comfortable margin — luminance can only sit in one place. #2470EC resolves it in favour of the button (4.56:1, a pass with roughly 1% headroom) because buttons appear on every band and are the WCAG-required pair, but that margin is real and #2470EC must not be darkened for aesthetic reasons downstream, nor the label ever set to anything but pure #FFFFFF. If the hero graphic needs a brighter pass at any point, use accentSoft (6.18:1 on raised) rather than lightening accent. Finally, deepest and base are 1.15:1 apart, which is deliberate but will flatten to a single rich black in four-colour print — the footer and capabilities distinction is a screen effect, so board-pack layouts should not depend on it.",
    colors: {
      deepest: "#05101F",
      base: "#082034",
      raised: "#102E48",
      onDarkStrong: "#F2F7FB",
      onDarkBody: "#A6BED4",
      onDarkFaint: "#7E97AE",
      hairlineDark: "rgba(151, 194, 236, 0.12)",
      gridDark: "rgba(96, 170, 240, 0.045)",
      accent: "#2470EC",
      accentHover: "#1A59D2",
      accentSoft: "#7AAFF7",
      accentOnLight: "#1450BE",
      signal: "#31BE95",
      signalOnLight: "#106851",
      canvas: "#FBFCFE",
      canvasAlt: "#EAEFF6",
      hairlineLight: "#D2DBE7",
      textStrong: "#14293D",
      textBody: "#33485F",
      textSoft: "#475B70",
      textFaint: "#556A82",
    },
  },
  graphite: {
    key: "graphite",
    name: "Graphite Ember",
    oneLiner:
      "Ektelio is machined graphite with one heated element in it: a struck-copper primary for the work being done, and the pale brass light it throws for the work being verified.",
    rationale:
      "The original direction was right and is kept intact — every surface, border and text token remains a cool near-neutral (hue held at 210-220, saturation in single digits on the greys), so the expensive read comes from the ramp and not from colour, and there is zero blue in the accent system. Four things were fixed. First, the copper was too dark to survive the surfaces it was designed for: at #A9542B the animated hero flow lines measured 3.18:1 on the raised panel and the button's hover state fell to 2.58:1 on base, below the non-text floor, so a hovered CTA sank into the graphite and read as disabled. Lifting the accent to #B65B2B holds white label text at 4.65:1 while raising on-base to 3.97:1 and on-raised to 3.36:1, and the hover becomes isoluminant-but-hotter (#C44E1F, 4.71:1 white, 3.92:1 on base) so pressing it heats the ember instead of dimming it — the same gesture works on dark and light bands, which a single token has to do here. Second, the secondary was sitting at hsl(40,66%,68%), which is the amber warning band, and it was being used to mean 'verified gain' in front of utilities, hospital groups and central banks — the exact audiences who read amber as degraded. Dropping it to #E1C99B, hsl(39,54%,75%), moves it from alarm lamp to lit brass without leaving the warm family, improves it to 11.46:1 on base, and keeps the greys dominant even though the signal appears on five dark bands' worth of eyebrow labels. Its light sibling was rebuilt to match (#77612C bronze rather than #816415 mustard), which also lifts it off canvasAlt to 5.26:1 and separates it from accentOnLight by 1.25 in luminance plus 24 degrees of hue. Third, the smallest type in the system had the least contrast — textFaint was lighter than textSoft and failed outright at 4.43:1 on the alt bands where half the eyebrow labels live; inverting the pair to #52585F gives 6.89:1 on canvas and 6.36:1 on canvasAlt and yields a clean 17.05 / 9.87 / 6.89 / 5.91 light ramp. Fourth, the dark ramp was too tight to carry the page's structure: base-to-deepest at 1.067 meant the process band and the capabilities band would read as one continuous black on any projector or board-pack print, so deepest went to #08090A and raised to #20242A, giving 1.079 and 1.184. Every load-bearing pair now clears its target with margin rather than by a rounding error.",
    risk:
      "The residual risks are real and worth naming rather than papering over. On light bands accentOnLight and signalOnLight are still only 1.25 apart in luminance — they separate by hue and chroma, not brightness, so if the build ever places a copper eyebrow immediately beside a bronze metric they will both read as 'brown'; keep them in separate blocks. The hover is deliberately isoluminant, which means it is a chroma shift rather than a brightness shift: it is clearly perceptible in colour, but the build should pair it with a border or elevation change so the state is not carried by hue alone, and a deuteranope will feel the saturation jump more than the hue. The whole system still lives or dies on the greys — with the signal de-chroma'd there is even less chromatic energy than before, so if the typographic scale, tracking and section spacing are not already excellent this will look empty rather than restrained; that is the correct trade for this direction but it puts the burden on type. And the copper remains a narrow ledge: at hsl(21,62%,44%) it is terracotta, not Bitcoin orange, but any production glow, gradient, or opacity stack that lightens it past roughly 52% lightness or pushes saturation past 70% tips it into crypto territory and simultaneously breaks the 4.5:1 white-label requirement — lock the button fill to the flat token and never composite it over the hero radial.",
    colors: {
      deepest: "#08090A",
      base: "#121416",
      raised: "#20242A",
      onDarkStrong: "#F4F5F6",
      onDarkBody: "#B4B9BE",
      onDarkFaint: "#878E95",
      hairlineDark: "rgba(255, 255, 255, 0.09)",
      gridDark: "rgba(255, 255, 255, 0.035)",
      accent: "#B65B2B",
      accentHover: "#C44E1F",
      accentSoft: "#D4844F",
      accentOnLight: "#8A4020",
      signal: "#E1C99B",
      signalOnLight: "#77612C",
      canvas: "#FAFAFB",
      canvasAlt: "#F0F1F3",
      hairlineLight: "#DCDEE2",
      textStrong: "#16181B",
      textBody: "#3C4147",
      textSoft: "#5C6269",
      textFaint: "#52585F",
    },
  },
  meridian: {
    key: "meridian",
    name: "Bronze Standard",
    oneLiner:
      "Ektelio as an institution rather than a vendor: warm-ink surfaces, aged brass for every action, and the verdigris of results that have been verified.",
    rationale:
      "The original thesis holds and is kept intact: surfaces are a warm ink mixed toward oil and leather rather than navy or slate, so the dark bands read as a printed annual report; the primary is a warm metal pushed down the value scale until white text on the solid fill is real; the secondary is the patina that metal earns with age. Nothing has been neutralised toward blue — there is no blue anywhere in this system, which is what actually separates it from the incumbent navy/#2D7FF9/emerald and from the refined-navy, graphite, and cool-teal siblings.\\n\\nWhat changed is arithmetic, not direction. Four fixes carry most of the weight. (1) accent moves to #A05C18: luminance 0.152 buys enough headroom that the button passes with EITHER white token — 5.20:1 with #FFF, 4.74:1 with the system's own #F7F4F0 — so the accessibility case no longer depends on an undeclared convention; the hue shift from 26 to 30 degrees simultaneously answers the original's own admission that it reads terracotta at button scale, landing it on aged brass instead. (2) accentHover stops going down and starts going sideways: #A24E10 holds 3.05:1 against base so the CTA on the dark hero and dark final CTA does not recede on hover, and spends its state change on chroma and a 4-degree rotation toward red rather than on value it cannot afford. (3) The two accents are now separated where they actually co-occur. The original's 2.7x luminance claim was measured on accent vs signal, but accent is a fill and never appears as a mark on dark; the marks are accentSoft, which sat at 1.02x of signal — zero separation for protan/deutan viewers and zero separation in a photocopied board pack. accentSoft #C08F45 (L* 62.7) against signal #83C7B1 (L* 75.4) gives 12.6 L* and 1.56x, legible in pure greyscale. (4) The palette now declares the rule its own maths forces: on dark surfaces, fills use accent, anything drawn or typed uses accentSoft. No bronze can carry a near-white label and also stroke at 3:1 on a panel that is visibly raised — that window is arithmetically empty. Freeing accent from stroke duty let raised lift to #2D2823 so the hero panel finally reads as raised.\\n\\nThe remainder are targeted repairs: the blueprint grid switched from amber (1.067:1, a smudge) to a neutral warm white at 0.045 (1.118:1, a drafted line) which also stops the dark bands drifting fully sepia; onDarkFaint lifted so the hero panel's mono readouts pass on raised, not just on deepest; hairlineLight de-yellowed and strengthened so white cards on the alt bands have an edge; textFaint given real margin on canvasAlt. canvas, canvasAlt, textStrong, textBody, textSoft, onDarkStrong, onDarkBody, base, deepest and hairlineDark were all measured and left alone — the light-side value ladder and the dark-side text ladder were correct.\\n\\nAll 39 load-bearing pairs now pass: no failures, with the tightest margin at 3.05:1 on a 3:1 requirement and 4.74:1 on a 4.5:1 requirement.",
    risk:
      "Three risks are real and one is structural.\\n\\naccentSoft is now load-bearing in a way a developer will not guess. It is the primary's on-dark form for BOTH link text and the hero flow lines. If anyone reaches for accent in either place, contrast drops to 2.81:1 on raised and the hero graphic will look broken. This needs to be a written rule in the token docs, not folklore.\\n\\nThe hover step is only 2.9 L*; it reads as much through chroma and hue as through value, because a white-label bronze has no room to move in either direction. Check it on a real display at full brightness. If it does not register, the correct escalation is a ring or a lift, NOT a lighter fill — a lighter fill silently breaks the label, which is the exact failure mode the original risk note predicted.\\n\\nEven at a legal 3.39:1, the accent fill does not pop against the dark bands; the dark-band CTA is carried by its label and its edge. Those buttons must be given real size and weight. A ghost or text-only primary on the hero or final CTA will disappear.\\n\\nStructurally: every surface, every neutral, and the primary all sit between 25 and 42 degrees of hue. signal is the only cool element in the system and it is doing load-bearing work — it separates the two accents, it carries every eyebrow on dark, and it is the only thing preventing the site from reading as monochrome brown. If it is ever demoted to decoration, or if a warm photo treatment is added on top, the whole palette collapses into sepia. And the author's original period warning stands unchanged: brass and patina flatter the finance ministry and the central bank board, but they signal permanence, not AI-native. That claim has to be won by typography, motion, and the hero graphic.",
    colors: {
      deepest: "#14110E",
      base: "#1C1815",
      raised: "#2D2823",
      onDarkStrong: "#F7F4F0",
      onDarkBody: "#C6BDB2",
      onDarkFaint: "#9E9285",
      hairlineDark: "rgba(247, 244, 240, 0.10)",
      gridDark: "rgba(247, 244, 240, 0.045)",
      accent: "#A05C18",
      accentHover: "#A24E10",
      accentSoft: "#C08F45",
      accentOnLight: "#8F5410",
      signal: "#83C7B1",
      signalOnLight: "#1E6B58",
      canvas: "#FBF9F6",
      canvasAlt: "#F2EEE6",
      hairlineLight: "#D5D0C6",
      textStrong: "#191512",
      textBody: "#40382F",
      textSoft: "#5C5349",
      textFaint: "#6E6759",
    },
  },
  sovereign: {
    key: "sovereign",
    name: "Sovereign Petrol",
    oneLiner:
      "Ektelio as the instrumented control room behind a state's operations — petrol-dark, sodium-lit, and unmistakably not another blue consultancy.",
    rationale:
      "The original thesis is sound and is kept: green-cyan petrol surfaces (hue 188-190, now pushed further from navy's 209), one cyan primary doing four jobs, and a sodium amber secondary that survives every form of red-green colour blindness because the blue-yellow axis is intact. What changed is engineering, not direction. The primary was lifted from #0C7387 to #0B7D91 because the original failed the 3:1 non-text floor against its own hero background — the CTA had no boundary — and the corridor for a white-labelled fill on a dark petrol band is only L 0.161-0.183 wide, so base was darkened to #07282F to buy the margin honestly rather than by weakening the button. The hover was made a shallower press so the dark-band CTA no longer sinks into the background on interaction. accentSoft was desaturated 74 to 56 because bright ice cyan over a radial glow is the generic AI-SaaS hero, and this brand cannot afford to look like a 2024 seed deck; it keeps 8.3:1 on base so the flow lines lose nothing. signalOnLight moved from a khaki #7C5310 to a true bronze #975C0A at the same hue and saturation as the amber, so the secondary reads as one colour across the dark/light alternation instead of two. The remaining edits are margin: the hero panel's mono readouts, white cards on the alternating light band, and small tracked-out caps all sat within 6% of their floors and now clear them.",
    risk:
      "The amber is now doing two jobs it cannot both do quietly. First, it is the only thing separating this palette from the sibling cool-teal direction — restrain it during build and the direction collapses, so it must appear on every dark band via the eyebrow labels, not just where a metric happens to exist. Second, amber is the universal advisory colour in the very control rooms this palette evokes, so a large \"-64%\" in signal reads for a beat as an alert rather than a gain. These pull in opposite directions: the fix for the first (more amber) worsens the second. The resolution is placement, not hue — amber owns labels, units and suffixes; the numeral itself stays onDarkStrong, so the amber is always adjacent to verified language rather than carrying the good news alone. If a stakeholder asks to \"calm the orange down\", that is the moment this palette quietly becomes cool teal.",
    colors: {
      deepest: "#031519",
      base: "#07282F",
      raised: "#123F47",
      onDarkStrong: "#F2F8F9",
      onDarkBody: "#B5CCD2",
      onDarkFaint: "#96B0B8",
      hairlineDark: "rgba(183, 221, 230, 0.11)",
      gridDark: "rgba(158, 202, 212, 0.038)",
      accent: "#0B7D91",
      accentHover: "#0A6E81",
      accentSoft: "#78CAD9",
      accentOnLight: "#0A6779",
      signal: "#F2A93B",
      signalOnLight: "#975C0A",
      canvas: "#F7FAFA",
      canvasAlt: "#E5EDEE",
      hairlineLight: "#C9D6D9",
      textStrong: "#072229",
      textBody: "#2C464F",
      textSoft: "#4A646D",
      textFaint: "#4E6A74",
    },
  },
  executive: {
    key: "executive",
    name: "Bone & Brass",
    oneLiner:
      "Ektelio as the firm governments hand the mandate to: warm bone paper, deep ink, one petrol line of action, and a patinated brass mark of proof that never outranks it.",
    rationale:
      "This inverts the category. Every AI-native competitor is a dark console; a warm alabaster canvas carrying 16:1 ink headings and hairline rules reads as the printed mandate rather than the product demo — the register of a central bank white paper, Stripe's enterprise pages and premium consulting print. The primary stays a deep petrol at hue 187, a fountain-pen teal that never sounds like SaaS mint or crypto blue, now set at #0E8090: the exact lightness where white button labels still clear 4.5:1 (4.66) while the hero's animated flow lines finally separate from the raised panel (3.39:1 rather than 3.13:1). The correction that matters most is tonal, not chromatic. The original brass was the brightest chromatic element in the system and the primary was the dimmest, so the dark bands read gold-led — opulence rather than execution, and indistinguishable at a glance from a warm-amber direction. Pulling the secondary down to a patinated bronze (L* 62 rather than 71) and pulling accentSoft up to a fuller petrol (L* 71) restores the correct order: petrol leads, bronze witnesses. Two other structural notes survive review and should be protected. textStrong #1A1712 and base #1A1713 are the same ink — the headline type on light bands and the dark punctuation bands are literally one colour, which is why the transitions read as one document rather than two themes. And the darks are warm near-blacks (roughly 3% warm, not sepia), so the hero and CTA feel like ink laid on the same paper stock rather than a slab borrowed from a different palette. The light ladder is untouched deliberately: canvas L* 95.6 / canvasAlt L* 92.1 is a 3.5-point step, subtle across a full-bleed band but unmistakable at the seam, and the warm bone is the single thing separating this from any other light-dominant direction — cooling it toward grey would make it generic.",
    risk:
      "Light dominance still costs gravity: bone and ink can read McKinsey rather than Palantir, signalling advisory to a buyer who wants an operational command surface — the dark bands must therefore be treated as load-bearing punctuation (full-bleed, with the blueprint grid and radial glow actually visible), not as thin dividers, or the execution claim evaporates. Second, taming brass to bronze reduces but does not remove the telemetry problem: hue 35 still sits in the caution band of dashboard convention, so any real data surface must not inherit `signal` as its positive-delta colour — that needs a separate viz ramp, with bronze reserved for editorial proof marks. Third, the system is now tightly tuned: accent sits at the ceiling that white button text permits, so any future request to \"brighten the teal\" breaks the primary button, and any request to \"warm the canvas further\" erodes the 5.0:1 margin on the small mono eyebrow labels.",
    colors: {
      deepest: "#100D0A",
      base: "#1A1713",
      raised: "#272219",
      onDarkStrong: "#F8F5EE",
      onDarkBody: "#D4CDC1",
      onDarkFaint: "#A79E90",
      hairlineDark: "rgba(248, 245, 238, 0.10)",
      gridDark: "rgba(248, 245, 238, 0.035)",
      accent: "#0E8090",
      accentHover: "#095F6A",
      accentSoft: "#6DB9C5",
      accentOnLight: "#0B6875",
      signal: "#C08C42",
      signalOnLight: "#8F5C12",
      canvas: "#F6F2EA",
      canvasAlt: "#EDE8DD",
      hairlineLight: "#D5CDBC",
      textStrong: "#1A1712",
      textBody: "#4B443A",
      textSoft: "#5F584C",
      textFaint: "#686155",
    },
  },
  chancery: {
    key: "chancery",
    name: "Chancery Bronze",
    oneLiner:
      "Chartered-hall green pushed to near-black, fitted with real door-furniture bronze and a cold gauge-glass cyan — a body of record, not a vendor.",
    rationale:
      "The dark ramp is unchanged in character and correct as proposed: deepest #041410 / base #09241B / raised #113325 is a blue-leaning hue-155-to-165 green, never olive, that reads as lacquer and green baize rather than eco or felt. The only structural edit is raised, lifted from 1.12:1 to 1.19:1 above base so the hero panel frame survives a projector and a printed board pack, with the hairline taken to 0.12 to match. The primary is now an actual bronze — hsl(30, 59%, 40%) instead of a 69%-saturation terracotta — the metal of plaques and instrument bezels, warm against green the way brass is against a green door, and far enough off red that it cannot be read as amber, crypto or energy branding; it carries white at 4.68:1. Its soft form is brass, not peach, deliberately dimmer than the signal so links on dark sit under the metrics rather than over them. The secondary is a colder, greyer instrument cyan — gauge glass, calibration marks, verified readouts — desaturated fifteen points off the proposal so it reads as measurement instead of sky, and matched in saturation by its on-white sibling. The largest change is the light half: canvas, canvasAlt, hairlineLight and textFaint are pulled into one hue-145-150 family with a real sage-mist alternate at 1.17:1, so the six light bands actually carry the chancery DNA instead of collapsing to white-and-rust. That also means the direction survives the medium it will most often be judged in: printed in a board pack the dark bands flatten toward black, but the mist bands, the green-black headings and the bronze rules still say chancery. Every load-bearing pair was computed rather than eyeballed; all forty clear their targets, including the two the proposal missed on the light side. The one thing that cannot be solved in tokens is stated as a build rule: no colour can be 4.5:1 from white and 4.5:1 from near-black, so the hero's flow lines on the raised panel are drawn in accentSoft (5.76:1), and accent is reserved for fills and for lines on base and deepest.",
    risk:
      "The heritage skew the original risk note identified is real and is now slightly stronger, because the bronze is less orange and the light bands are greener: this palette only stays on the right side of the line with clinical grotesque typography, tabular figures, and cold technical imagery. Any warm photography, any gold gradient, any serif display face and it becomes a private members' club or a sustainability consultancy. Three specific fragilities to write into the handover. First, the bronze sits in a narrow luminance window — white on accent is 4.68:1, so brightening the button fill even slightly breaks the label, and the correct hover direction is darker (#82501F, white 6.74:1). Second, accent on raised is 2.95:1, the arithmetic ceiling; if anyone re-points the hero SVG's primary flow lines from accentSoft back to accent, the signature motif goes dim and there is no token fix. Third, accentSoft and signal are only 1.15:1 apart in luminance, so they separate by chroma and role rather than value — they must never be set as adjacent same-size text, and a future designer adding a third accent between them will collapse the dark-band hierarchy entirely.",
    colors: {
      deepest: "#041410",
      base: "#09241B",
      raised: "#113325",
      onDarkStrong: "#F1F6F2",
      onDarkBody: "#B6CAC1",
      onDarkFaint: "#8AA79B",
      hairlineDark: "rgba(226, 246, 236, 0.12)",
      gridDark: "rgba(196, 232, 214, 0.035)",
      accent: "#A3662A",
      accentHover: "#82501F",
      accentSoft: "#C6A26C",
      accentOnLight: "#8A5622",
      signal: "#83BDCC",
      signalOnLight: "#1C5D75",
      canvas: "#FAFCFB",
      canvasAlt: "#E5ECE8",
      hairlineLight: "#CAD5CF",
      textStrong: "#0C201A",
      textBody: "#36473F",
      textSoft: "#4C5E56",
      textFaint: "#56685E",
    },
  },
  bluedsteel: {
    key: "bluedsteel",
    name: "Blued Steel",
    oneLiner:
      "Graphite's near-black machining bled toward ink, the incumbent blue as the only current running through it, and brass reserved for the moment a result is proven.",
    rationale:
      "From Graphite Ember I kept the surface architecture wholesale as an L* envelope (2.2 / 6.3 / 14.0) rather than as hexes — Signal Navy's stack sits at 4.5 / 11.5 / 18.1, which is why it reads as a lit navy room instead of machined near-black — plus the near-neutral light bands and the warm secondary. From Signal Navy I took the electric blue as primary and then pushed its cool bias into every neutral: the blue channel now leads red by 7 / 12 / 19 points across deepest/base/raised, against Graphite's 2 / 4 / 10 and Navy's 26 / 44 / 56, so the surfaces read as ink graphite rather than either grey or navy. The blue itself is #2569E6, not the client's #2470EC: white on their blue measures 4.56:1, a defect at button scale, and on a neutral near-black ground rather than a navy one an unsupported blue drifts violet, so I dropped luminance ~4% (white now 4.95:1) and moved hue 217.2 to 218.9 toward true blue. Navy's real load-bearing job here is structural, not chromatic — the blueprint grid is explicitly blue (rgba(110,168,232,0.05)) and the hairline is a blue-tinted white at 0.11 alpha, compositing to 1.26:1 on base, exactly matching Graphite's white hairline weight, so the identity blue permeates the architecture at a level too faint to add saturation. The secondary stays Graphite's brass, retuned from #E1C99B to #D9C48F.",
    risk:
      "Near-black plus one high-chroma electric blue is also the house style of every AI developer tool, and because the blue is now the only saturated thing on a page of hue-disciplined greys it will read hotter on the hero than it ever did on Signal Navy's ground — if the build lets blue escape beyond buttons, links and light-band eyebrows into fills, tints or icon washes, this tips from Palantir toward Vercel. Secondarily, the brass appears so sparingly (dark-band eyebrows and metric suffixes only) that a screenshot of the mission or approach band contains no warmth at all, and the client may not feel they received a merge on the light half of the site.",
    colors: {
      deepest: "#06080D",
      base: "#10141C",
      raised: "#1D2430",
      onDarkStrong: "#F2F4F7",
      onDarkBody: "#ADB6C2",
      onDarkFaint: "#868F9C",
      hairlineDark: "rgba(198, 214, 236, 0.11)",
      gridDark: "rgba(110, 168, 232, 0.05)",
      accent: "#2569E6",
      accentHover: "#1C57CE",
      accentSoft: "#5F9AEE",
      accentOnLight: "#1A5AD0",
      signal: "#D9C48F",
      signalOnLight: "#6B571F",
      canvas: "#FAFBFC",
      canvasAlt: "#EEF0F4",
      hairlineLight: "#D6DAE1",
      textStrong: "#14171C",
      textBody: "#3B424B",
      textSoft: "#5A626C",
      textFaint: "#4F5761",
    },
  },
  ektelio: {
    key: "ektelio",
    name: "Ektelio Standard",
    oneLiner:
      "Petrol-ink machined to near-black, one cooled blue current running through it, and brass reserved for the moment a result is proven.",
    rationale:
      "A three-way merge of Signal Navy, Sovereign Petrol and Blued Steel. The surfaces take Blued Steel's machined darkness as their lightness envelope but sit at hue 202 — between Signal Navy's 209 and Sovereign's 190 — at roughly 55% saturation, halfway between Blued Steel's near-neutral discipline and the two saturated parents. The result is a deep petrol ink that reads as instrumentation rather than as either navy or grey. The primary is a blue cooled from Signal Navy's 217 toward 208, so it carries Sovereign's cyan lean without becoming teal; at #1474C8 white measures 4.85:1 on it, a real margin at button scale rather than the 4.56:1 the incumbent shipped. The secondary is warm because two of the three parents chose warmth: it splits Sovereign's amber (hue 38, 88% saturation) and Blued Steel's pale brass (hue 43, 50%) at hue 40 and 68%, giving a brass that reads as a struck instrument mark rather than a caution light. Warm-against-cool also survives colour blindness, which the green in Signal Navy did not — that green simulates to near-neutral grey under deuteranopia. The light bands carry the same petrol-ink bias so the palette holds together across the six light bands as well as the five dark ones.",
    risk:
      "The blue is now the only saturated element across most of the page, so it will read hotter than it did on Signal Navy's lighter navy ground — if it escapes past buttons, links and light-band eyebrows into fills or icon washes, this drifts toward the generic AI-developer-tool look. The brass appears only on dark bands under the current system rules, so the light half of the site carries no warmth unless that rule is deliberately relaxed. And the surface hue at 202 is close enough to teal that any future photography or illustration with a warm cast will fight it.",
    colors: {
      deepest: "#061016",
      base: "#0C1F29",
      raised: "#18313F",
      onDarkStrong: "#F2F7F9",
      onDarkBody: "#AEC4CD",
      onDarkFaint: "#85A0AB",
      hairlineDark: "rgba(174, 214, 230, 0.11)",
      gridDark: "rgba(120, 190, 220, 0.042)",
      accent: "#1474C8",
      accentHover: "#0F5EA3",
      accentSoft: "#63B1E9",
      accentOnLight: "#1261A5",
      signal: "#E2B865",
      signalOnLight: "#865C13",
      canvas: "#F9FBFC",
      canvasAlt: "#E9EFF1",
      hairlineLight: "#CFDADE",
      textStrong: "#0D1F28",
      textBody: "#31454F",
      textSoft: "#4A616B",
      textFaint: "#526B76",
    },
  },
};

/* ─────────────────────────── resolution ─────────────────────────── */

export const DEFAULT_THEME = "ektelio";

export function resolveTheme(key?: string): Palette {
  return palettes[key ?? ""] ?? palettes[DEFAULT_THEME];
}

/** Every CSS custom property the stylesheet and Tailwind config expect. */
export function themeVars(palette: Palette): string {
  const c = palette.colors;
  const onDarkSoft = mix(c.onDarkBody, c.onDarkFaint, 0.5);

  const decls: Record<string, string> = {
    "--c-deepest": channels(c.deepest),
    "--c-base": channels(c.base),
    "--c-raised": channels(c.raised),
    "--c-on-dark-strong": channels(c.onDarkStrong),
    "--c-on-dark": channels(c.onDarkBody),
    "--c-on-dark-soft": channels(onDarkSoft),
    "--c-on-dark-faint": channels(c.onDarkFaint),
    "--c-accent": channels(c.accent),
    "--c-accent-hover": channels(c.accentHover),
    "--c-accent-soft": channels(c.accentSoft),
    "--c-accent-ink": channels(c.accentOnLight),
    "--c-signal": channels(c.signal),
    "--c-signal-ink": channels(c.signalOnLight),
    "--c-canvas": channels(c.canvas),
    "--c-canvas-alt": channels(c.canvasAlt),
    "--c-hairline": channels(c.hairlineLight),
    "--c-ink-strong": channels(c.textStrong),
    "--c-ink": channels(c.textBody),
    "--c-ink-soft": channels(c.textSoft),
    "--c-ink-faint": channels(c.textFaint),
    // Full colour strings (not channels) for raw CSS use
    "--c-hairline-dark": c.hairlineDark,
    "--c-grid-dark": c.gridDark,
    "--c-grid-light": `rgb(${channels(c.textStrong)} / 0.045)`,
  };

  return Object.entries(decls)
    .map(([k, v]) => `${k}:${v}`)
    .join(";");
}
