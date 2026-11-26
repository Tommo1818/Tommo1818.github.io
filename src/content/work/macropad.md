---
title: 'Macropad Configurator'
summary: 'Zero-install WebHID editor with lighting & read-back verification.'
kicker: 'Reverse engineering · WebHID'
year: '2026'
order: 2
stack: ['WebHID', 'Vanilla JS', 'HID protocol', 'Static site']
diagram: '/diagrams/macropad.svg'
live: 'https://tommo1818.github.io/macropad-configurator/'
repo: 'https://github.com/Tommo1818/macropad-configurator'
---

## The problem

Cheap three-key macropads are built on the CH57x family and configured by vendor software that is Windows-only, closed, and frequently worse than useless. The devices themselves are perfectly capable — the configuration interface is just hidden behind an undocumented HID protocol.

## What I built

A browser-based editor that talks to the pad directly over **WebHID**, with no backend, no install and no build step, so it runs from GitHub Pages over HTTPS.

The interesting work was reverse engineering the protocol: locating the configuration interface at usage page `0xFF00` / usage `0x01`, then mapping out how bindings, macros and lighting are encoded on the wire. The editor supports recording shortcuts, browsing the full HID key catalogue, media and mouse actions, up to 18 keys per macro with a configurable trailing delay, and six firmware lighting effects with per-layer palettes.

Two deliberate choices. First, the app exposes only what the firmware genuinely supports — no invented custom colours, no app-side animations that vanish the moment the pad is unplugged. Second, **every write is verified by reading the device back**, because a silent failure in a HID write is indistinguishable from success until you press the key.

## What I learned

Undocumented protocols reward patience more than cleverness. Small, boring experiments — change one byte, observe what the device echoes — beat trying to infer the whole format up front.
