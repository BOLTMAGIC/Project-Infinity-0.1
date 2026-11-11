---
navigation:
  parent: insaneae2addons_index.md
  title: Research System
  icon: insaneae2addons:research_station
categories:
  - Monitoring and Automation
item_ids:
  - insaneae2addons:research_station
  - insaneae2addons:research_pedestal_bottom
  - insaneae2addons:research_pedestal_top
  - insaneae2addons:research_unit
  - insaneae2addons:research_unit_frame
  - insaneae2addons:research_cable
  - insaneae2addons:research_cable_white
  - insaneae2addons:research_cable_pink
  - insaneae2addons:data_drive
  - insaneae2addons:research_fluid_bucket
---

# Research System

The **Research System** is the progression gate for the advanced recipes of this addon. Running a research recipe writes
an unlock key onto a **Data Drive**, and the Recipe Fabricator refuses gated recipes until it sees that key.

A research setup has three parts: a **Research Station** that runs the recipe, **Research Pedestals** that hold the
inputs, and **Research Units** that supply computation.

---

## Research Station

The station holds one Data Drive in its disk slot and scans for pedestals around itself.

It looks in a radius of 3 blocks, at its own height and one block above, for Pedestal Tops with a Pedestal Bottom
directly underneath.

While researching, the station draws the recipe's power straight from the ME network. If the network cannot pay, the
research resets to zero.

The GUI lists every pedestal it found and why it is or is not usable, so most setup problems are visible there.

---

## Pedestals

Inputs are not placed in the station. Each input of a recipe goes onto its own Pedestal Top, and one pedestal can only
satisfy one input.

For a recipe to start, every input must find a pedestal that holds the right item in sufficient quantity **and** has at
least the computation that input requires.

Inputs are consumed only when the research finishes.

---

## Research Cables

Pedestal Bottoms connect to Research Units through Research Cables. Cables come in three colors, and only cables of the
same color connect to each other.

A pedestal must see exactly one Research Unit on its cable network, and no other pedestal. If two pedestals share a
unit, or a pedestal reaches two units, that pedestal counts as unusable.

Each pedestal therefore needs its own unit. The colors exist so several cable runs can cross the same room.

---

## Research Units

The Research Unit is a 5x5x5 multiblock: a shell of Research Unit Frames and vibrant quartz glass, a 3x3x3 core, and a
Sky Stone Tank in the middle of the top face. The controller sits in the bottom layer.

The core is filled with AE2 crafting storage blocks, and their tiers decide the computation of the unit:

* 1k counts 1/16
* 4k counts 1/4
* 16k counts 1
* 64k counts 4
* 256k counts 16

A full core of 256k storage is 27 blocks, which comes out at 432 computation. The core may be left partly empty. The
config can also allow other blocks in the core with a fixed computation value each.

Custom blocks adding Computation just for this Modpack:
* Empowered Super Block = 20
* Crystal Matrix Block = 22
* Neutronium Block = 25
* Infinity Block (avaritia) = 52

You need 8 Infinity Blocks to research Infinity 9 ingot.

---

## Running costs

While a unit is doing work it pays, per tick:

* 64 AE per point of computation, buffered up to 200000 AE from the network
* 1 mB of Research Fluid per 4 points of computation, buffered up to 64000 mB

The fluid buffer is refilled from the Sky Stone Tank on top of the unit, and the tank only accepts Research Fluid.

If a unit cannot pay either cost, it refuses to work that tick and the research resets.

---

## Progress

Every tick, progress advances by the total computation of all pedestals used by the active recipe.

More computation is the only way to make research faster, so bigger cores and more pedestals both help.

---

## Data Drives

Unlock keys live on the Data Drive itself, not on the player or the world, so a drive can be carried between bases and
copied setups.

Research will not start if there is no drive in the station, or if the drive already holds that recipe's key. The drive
is never consumed.

Right-click a drive to see which keys it holds.

---

## Turning it off

The config option research.required turns the gate off entirely. Fabrication recipes then work without any key, and
the whole research chain becomes useless.
