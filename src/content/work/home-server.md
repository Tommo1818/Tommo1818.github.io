---
title: 'Home server and smart home'
summary: 'Zero-port Ubuntu & Docker smart home over Tailscale.'
kicker: 'Infrastructure'
year: '2026'
order: 6
stack: ['Ubuntu', 'Docker', 'Tailscale', 'Home Assistant', 'ESPHome', 'UFW']
diagram: '/diagrams/home-server.svg'
---

## The problem

Once other people in the house rely on your smart home setup, it can't keep falling over. It needs to work from away, come back up on its own after a reboot, and not leave random ports open to the internet.

## What I built

An Ubuntu server running **Home Assistant** and a **Matter server** in Docker on the host network, hooked up to ESPHome wall displays around the house.

Remote access goes through **Tailscale**, with the box acting as both an **exit node** and a **subnet router** for the LAN so nothing has to be exposed publicly. For hardening: key-only SSH (root and password login off), UFW locked down to the LAN and tailnet, Fail2Ban on sshd, and unattended security updates.

## What I learned

Keeping things boring makes them reliable. Every service that "just needs one port forwarded" is something you'll forget about in two years, so keeping everything behind one VPN and one locked-down box saves a lot of headaches.
