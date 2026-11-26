---
title: 'Gridfinity Baseplate Studio'
summary: 'Balanced drawer tiling and one-click Bambu .3MF export.'
kicker: 'Tooling · 3D printing'
year: '2026'
order: 1
stack: ['Vanilla JS', 'WebGL2', '3MF / STL', 'Static site']
diagram: '/diagrams/gridfinity.svg'
live: 'https://tommo1818.github.io/gridfinity-baseplates/'
repo: 'https://github.com/Tommo1818/gridfinity-baseplates'
---

## The problem

Gridfinity is a brilliant standard until you have to actually fill a drawer with it. Baseplates have to fit an arbitrary interior, be split across a printer bed, and still line up as one grid. Doing that by hand in a slicer means guessing at dimensions, re-cutting tiles, and printing a pile of near-identical parts in the wrong order.

## What I built

A fully client-side generator: enter your drawer in mm, cm or inches, pick an IKEA drawer preset or a Bambu Lab bed size, and it produces a complete tiling.

The interesting part is not the UI, it is the tiling. The generator refines the grid until the leftover space is distributed as a rim rather than as slivers, groups identical tiles including rotations, and orders them across the minimum number of print plates. There are three baseplate profiles, from a 4.25 mm lightweight floor designed to save filament up to a solid 5.85 mm variant.

Output is real geometry, not a preview: a multi-plate Bambu `.3mf` with every copy pre-arranged, or binary STLs plus an assembly guide in a ZIP. A WebGL2 view shows the drawer and each plate before you commit to a print.

## What I learned

Constraint work is mostly about defining "good" precisely. The first tiler was correct and produced awful layouts. Encoding what a person would actually accept — no tiny strips, no orphaned plates, sensible groupings — mattered far more than the geometry code.
