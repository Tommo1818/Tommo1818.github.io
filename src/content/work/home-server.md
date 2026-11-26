---
title: 'Home server and smart home'
summary: 'A self-hosted Ubuntu server running Home Assistant, a Matter bridge and ESPHome panels, reachable anywhere over Tailscale.'
kicker: 'Infrastructure'
year: '2026'
order: 6
stack: ['Ubuntu', 'Docker', 'Tailscale', 'Home Assistant', 'ESPHome', 'UFW']
---

## The problem

Home automation stops being a hobby and starts being infrastructure the moment other people in the house depend on it. That means it needs to be reachable when away, recoverable when broken, and not the weakest point in the network.

## What I built

An Ubuntu server running a Docker stack with **Home Assistant** and a **Matter server** on the host network, plus ESPHome-driven display panels around the house.

Networking is handled by **Tailscale**, with the box acting as both an **exit node** and a **subnet router** for the local LAN — so remote access does not require exposing anything to the public internet. The host itself is hardened: key-only SSH with root and password login disabled, UFW rules limited to the LAN and the tailnet, Fail2Ban on sshd, unattended upgrades, and unattended recovery in mind from the start.

## What I learned

Reliability comes from removing degrees of freedom. Every service that "just needs" an open port is a decision someone has to remember in two years. Keeping the attack surface to one VPN and one hardened host is the difference between a system that survives contact with real life and one that quietly becomes a liability.
