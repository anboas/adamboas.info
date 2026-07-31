---
title: 'Digital Engineering Is Not a Department'
date: 2026-07-30
summary: 'A draft argument that digital engineering only creates value when models, software, data, architecture, acquisition decisions, and operational feedback become one mission decision system.'
status: draft
type: note
tags:
  - digital-engineering
  - mission-engineering
  - systems-engineering
  - software-modernization
  - acquisition
---

# Digital Engineering Is Not a Department

_Connecting systems engineering, software, data, and acquisition around mission decisions._

Digital engineering is easy to misunderstand.

It can look like a new organization. A new tool stack. A model repository. A systems engineering modernization effort. A better way to produce artifacts. A place where engineers work before the "real" acquisition and delivery decisions happen somewhere else.

That version will disappoint people.

Digital engineering creates value only when it becomes part of the decision system. Models, software, data, architecture, technical reviews, acquisition choices, test evidence, cyber constraints, and operational feedback have to reinforce each other. If they remain separate lanes, digital engineering becomes another department with better diagrams.

The point is not to digitize engineering artifacts.

The point is to improve mission decisions.

## The Artifact Trap.

Every engineering transformation has an artifact trap.

The organization starts measuring whether the new artifacts exist instead of whether they change decisions. The model exists. The architecture view exists. The data standard exists. The dashboard exists. The repository exists. The review package exists.

But the program still makes decisions the old way.

The model is not trusted. The software team is not connected to it. The acquisition team does not use it. The cyber team reviews late. The operators give feedback through informal channels. The test community receives evidence after major choices are already locked. The architecture becomes documentation after the fact.

That is not digital engineering. That is digital paperwork.

DoD Instruction 5000.97 establishes digital engineering policy and responsibilities across acquisition lifecycle activities [1]. The important word is lifecycle. Digital engineering cannot sit in one box because the decisions it should improve happen across the lifecycle.

## A Mission Decision System.

A useful digital engineering system starts with mission decisions.

What operational outcome is under pressure? What mission thread matters? What decision has to get faster, safer, more resilient, or more accurate? What systems, software, data, people, interfaces, constraints, and authorities shape that decision?

Once those questions are clear, the model has a job.

It should expose dependencies. It should show where software changes affect mission performance. It should identify integration risk. It should connect data quality to operational confidence. It should make test evidence easier to interpret. It should help acquisition leaders understand what is mature, what is uncertain, and what must be funded next.

Digital engineering is not valuable because it is digital. It is valuable because it can make the mission system more legible.

## Systems Engineering and Software Have to Share a Loop.

Defense programs often treat systems engineering and software delivery as different worlds.

Systems engineering manages requirements, architecture, interfaces, reviews, and technical baselines. Software teams work in backlogs, pipelines, releases, user stories, test automation, observability, and incident response.

Both worlds are necessary. The problem is the gap between them.

Software is now a major path by which mission capability changes after fielding. The DoD Software Modernization Strategy recognizes software as central to resilient capability delivery and emphasizes cloud, DevSecOps, cybersecurity, and workforce as major enablers [2]. That means digital engineering cannot only model the system at acquisition milestones. It has to connect to how software actually evolves.

If a model cannot see software change, it cannot see the mission system.

If a software team cannot see mission-thread, interface, safety, cyber, and acquisition context, it will optimize locally.

The loop has to be shared.

## Data Is Not a Side Channel.

Digital engineering also fails when data strategy is treated as a side channel.

Mission decisions depend on data: source quality, latency, lineage, access controls, semantics, telemetry, test results, operational feedback, and authoritative references. A model that cannot connect to the data used by software teams, operators, and acquisition stakeholders will become stale.

The goal is not one giant database. The goal is a governed information environment where the right evidence can move between engineering, software, test, cyber, and acquisition decisions without being manually reconstructed every time.

This matters for AI and autonomy too. The NIST AI Risk Management Framework treats AI risk management as a lifecycle discipline across governance, mapping, measurement, and management [3]. Digital engineering should make those lifecycle questions visible. What is the system context? What data is used? What performance evidence exists? What risks are mapped? What changes after deployment?

AI assurance and digital engineering should not become parallel governance rituals. They should meet in the same decision system.

## Acquisition Needs Engineering Evidence Earlier.

Acquisition decisions are engineering decisions with money and authority attached.

That means digital engineering has to support acquisition, not merely report to it.

Technology maturity, integration risk, software cadence, cyber posture, test evidence, sustainment assumptions, and transition pathways should be visible before a program is forced into a late binary choice. The GAO Technology Readiness Assessment Guide is valuable because it pushes organizations toward evidence-based maturity assessment [4]. Digital engineering should make that evidence easier to create, inspect, and update.

The Software Acquisition Pathway also matters here. DoD Instruction 5000.87 provides a pathway for software-intensive capability that emphasizes iterative development, user engagement, cybersecurity, and continuous delivery practices [5]. If digital engineering cannot support that rhythm, it will become too slow for software-heavy systems.

The acquisition model and the engineering model have to agree on tempo.

## Operational Feedback Closes the Loop.

The most important digital engineering input often arrives after the system touches reality.

Operators find workarounds. Maintainers see failure patterns. Cyber teams see new attack paths. Software teams see telemetry. Test teams see edge cases. Program offices see where governance slows delivery. Users reveal that the modeled workflow was not the actual workflow.

If that feedback does not enter the engineering system, the model becomes a museum.

Digital engineering should shorten the distance between operational truth and technical decision. That means the system needs feedback mechanisms, not just baseline control. It needs a way to distinguish a local issue from a portfolio pattern. It needs a way to update assumptions without destroying configuration discipline. It needs a way to make evidence reusable across programs.

This is where digital engineering connects to growth and modernization. A company or program that learns across delivery efforts compounds advantage. It stops recreating the same integration analysis. It sees transition barriers earlier. It turns operational evidence into better capture, better architecture, and better investment decisions.

## What Good Looks Like.

Good digital engineering has a few recognizable properties.

It starts with mission decisions, not tool adoption.

It connects systems engineering and software delivery in one loop.

It treats data lineage, telemetry, and evidence as first-class engineering concerns.

It informs acquisition decisions before commitments harden.

It supports iterative software delivery without abandoning system discipline.

It makes cyber, test, safety, and sustainment constraints visible early.

It allows operational feedback to update architecture and investment choices.

It produces artifacts because the artifacts serve decisions, not because the transformation needs artifacts.

Digital engineering is not a department.

It is a way to make mission systems understandable enough to change responsibly.

When it works, models, software, data, acquisition, and operations stop speaking through translation layers. They become parts of the same decision system.

That is where the value is.

## Sources

1. U.S. Department of Defense, [DoD Instruction 5000.97, Digital Engineering](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/500097p.pdf).
2. U.S. Department of Defense, [DoD Software Modernization Strategy](https://media.defense.gov/2022/Feb/03/2002932833/-1/-1/1/DOD-SOFTWARE-MODERNIZATION-STRATEGY.PDF), 2022.
3. National Institute of Standards and Technology, [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework).
4. U.S. Government Accountability Office, [Technology Readiness Assessment Guide](https://www.gao.gov/products/gao-20-48g), GAO-20-48G.
5. U.S. Department of Defense, [DoD Instruction 5000.87, Operation of the Software Acquisition Pathway](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/500087p.pdf).
