# Portfolio Improvements

---

## Immediate / Quick Fixes

- [ ] **Add `cv.pdf` to repo root** — the Download CV button 404s without it. Export `main.tex` to PDF and drop it in.
- [ ] **`og:image` for `battery-lca.html`** — change from the generic `og-preview.png` to `screenshots/lca-admin-dashboard.png`. Project pages should preview with a project screenshot, not the homepage.
- [ ] **Hiking section caption** — replace "Leading hiking trips and discovering nature fuels my creativity." with one concrete sentence: how many trips, over how many years, whether you organized them solo or with a group.
- [ ] **Hero code block `focus` array** — change `["Systems", "Data Platforms"]` to something more specific and memorable, e.g. `["LCA platforms", "database systems", "compiler design"]`.

---

## Main Page — Project Cards

- [ ] **Rewrite card descriptions to lead with the problem, not the implementation.** Every card currently opens with what was built. Flip the order: one sentence on the *why*, then the what. Example for BatteryLCATool:
  - Current: *"Full-stack multi-tenant platform for battery life-cycle inventory modeling. Manufacturers model process inventories manually or via Excel import..."*
  - Better: *"Research teams at VUB were managing LCA data in shared spreadsheets with no version control or access control. I built a platform to replace that."*
  Apply this to every card.

- [ ] **Visually differentiate the top 3 cards** (BatteryLCATool, DNA Extension, AI Platform) from the supporting 3. Options: screenshot thumbnail, "Featured" badge, larger card size. Right now all 6 cards look identical in weight, which buries the most important work.

- [ ] **Uncomment the DNA Extension "View Project →" link** once that page is filled out.
- [ ] **Uncomment the AI Course Platform "View Project →" link** once that page is filled out.

---

## About Section

- [ ] **Remove or relocate VHDL, Verilog, FPGA, Assembly** from the skills tags — none appear in your projects or experience. Options:
  - Remove them entirely, or
  - Move them to the Education section under LAU as coursework context (see below). Only keep what you could field a basic question about in an interview.

---

## Education Section

- [ ] **Add coursework/labs to the LAU degree entry.** Makes the hardware skills legible and grounded. Example format:

  > *Relevant coursework: Digital systems labs (FPGA design in VHDL/Verilog, implemented on physical boards), Computer architecture (Assembly-level programming, pipeline design)*

  Only list things you could answer a basic interview question on. One bullet that falls apart under questioning does more damage than not listing it.

- [ ] **Add ULB coursework** once you're further into the degree — relevant courses, interesting labs, thesis topic if applicable.

---

## New Project Pages to Build

### 1. PostgreSQL DNA Extension (`dna-extension.html`) — highest priority
The page exists but is a skeleton. It needs:
- [ ] Terminal screenshot of a k-mer query running against the extension (e.g. `SELECT * FROM sequences WHERE seq @> 'ACG'::dna;`)
- [ ] `EXPLAIN ANALYZE` screenshot showing the SP-GiST index scan being used
- [ ] Fill in or verify the technical content in the page (SP-GiST vs GiST explanation is already written)
- [ ] The trie ASCII diagram is already in the page — keep it

### 2. AI Course Platform (`ai-course.html`) — second priority
The page exists but has placeholder sections. It needs:
- [ ] Screenshot of the student-facing UI (content or quiz view)
- [ ] Photo of the Raspberry Pi physical setup in the classroom — worth more than any code screenshot
- [ ] **"The Problem" section**: rewrite with the actual brief from the course/professor, not the placeholder text
- [ ] **Technical depth insight block**: replace placeholder sentence with a concrete observation from your testing — a failure mode, an accuracy difference, something that surprised you

### 3. yaLcc Compiler — new page (`compiler.html`)
- [ ] Create the page (use `battery-lca.html` as a template)
- [ ] Include a rendered parse tree image — even a photo of a hand-drawn sketch works. Your CV mentions parse-tree visualizations for debugging; show one.
- [ ] Explain what subset of the language you targeted and why LL(1) specifically
- [ ] Add "View Project →" link to the yaLcc card on the main page once done

---

## Already Done
- BatteryLCATool "View Project →" link — on the main page card ✓
- BatteryLCATool project page with screenshots wired up ✓
- og:image meta tags on all pages ✓
- og-preview.png homepage screenshot ✓
- Hero description updated ✓
- Download CV button added ✓
- DNA Extension, yaLcc, P2P card descriptions expanded ✓
- Hôtel Dieu de France internship — already on the site ✓
