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

Cheap three-key CH57x macropads are actually decent little boards, except the vendor config software is Windows-only, closed source and pretty flaky. All the settings live behind an undocumented HID protocol.

## What I built

A static browser editor that talks straight to the macropad over **WebHID**. No drivers, no install and no server, so it runs straight off GitHub Pages.

Most of the time went into poking at the HID traffic until I found the config interface at usage page `0xFF00` / usage `0x01` and mapped how keys, macros and RGB effects are packed on the wire. You can record shortcuts, pick from the HID key table, bind media or mouse actions, chain up to 18 keys per macro with a delay, and switch between the six built-in lighting modes per layer.

I kept it strict in two places. It only shows modes the firmware genuinely supports (nothing fake that disappears when you unplug it), and **it reads every write back from the pad to check it worked**, because a silent failed HID write looks fine until you actually hit the key.

## What I learned

Reverse engineering an undocumented protocol is mostly patience. Changing one byte at a time and watching what comes back works much better than trying to guess the whole packet format in one go.
