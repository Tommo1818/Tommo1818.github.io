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

Gridfinity is great until you actually have to fill a real drawer. Your drawer is never an exact multiple of 42 mm, your printer bed is smaller than the drawer, and cutting baseplates by hand in Bambu Studio gets boring fast. You end up guessing dimensions and printing piles of slightly different pieces.

## What I built

A browser-based generator with no backend. You type in your drawer size in mm, cm or inches (or pick an IKEA drawer preset and your printer bed), and it works out the whole layout for you.

The actual work is in the tiling logic. It splits the grid so leftover space sits evenly around the outside instead of leaving silly 1-unit strips, groups identical tiles together (counting 90-degree rotations), and packs them onto as few print plates as possible. There are three profiles from a thin 4.25 mm floor up to a solid 5.85 mm one.

It exports actual printable geometry: a multi-plate Bambu `.3mf` with all the copies already laid out, or binary STLs in a ZIP with an assembly guide. There's a WebGL2 preview so you can check the drawer and plates before printing.

## What I learned

My first version was technically right and produced rubbish layouts. Getting it to avoid tiny slivers and awkward leftover plates took way more thought than generating the 3D meshes.
