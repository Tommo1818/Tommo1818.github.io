---
title: 'ESP32-S3 smart clock'
summary: 'A glanceable desk dashboard on a 3.5" ESP32-S3 touchscreen: NTP time, live weather, rain alerts and Google Calendar via a Worker gateway.'
kicker: 'Embedded · Hardware'
year: '2026'
order: 4
stack: ['C', 'ESP32-S3', 'QSPI / I2C', 'Cloudflare Workers']
repo: 'https://github.com/Tommo1818/smart-clock-esp'
---

## The problem

I wanted a clock that is useful at a glance from across a room: the time, today's date, whether it will rain, and what is next in my calendar. Not a phone screen, not a dashboard with six tabs — one landscape panel you can read while walking past.

## What I built

Firmware for the **JC3248W535C**, a 3.5" ESP32-S3 module with a capacitive touch panel, driving an AXS15231B display over **QSPI** and the touch controller over **I2C**.

The display needed software rotation to run landscape, which meant getting the panel geometry, backlight and touch coordinate mapping to agree — the sort of problem that is trivial on a desktop and tedious on bare metal. Time comes from NTP; weather from Open-Meteo, located by Geo-IP, with rain alerts. Calendar data does not sit on the device: a small **Cloudflare Worker** handles the Google OAuth exchange and serves the device a minimal payload, so no long-lived credentials live on the ESP32.

## What I learned

Embedded work is mostly interface archaeology. The datasheet gives you pin numbers; what it does not tell you is which of the four QSPI data lines the vendor actually wired and in what order. The only way through is incrementally: one working pixel, then a full frame, then rotation.
