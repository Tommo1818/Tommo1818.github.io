---
title: 'Detecting toxicity in Counter-Strike chat'
summary: 'Counter-Strike chat corpus & deep learning detector with human raters.'
kicker: 'Data & NLP · Research'
year: '2024'
order: 3
stack: ['Python', 'NLP', 'Deep learning', 'Dataset construction', 'Human evaluation']
diagram: '/diagrams/toxicity.svg'
repo: 'https://github.com/Tommo1818/csgo-detoxify-final-project'
---

## The problem

Every competitive online game has the same problem: the communication channel that makes team play possible is also where the abuse happens. Counter-Strike is a good test case because chat is fast, terse, full of game-specific slang and often hostile — exactly the conditions where a general-purpose toxicity model starts to fail.

## What I did

The dataset was the hard part. Rather than borrowing a generic labelled corpus, I parsed **real Counter-Strike demo files** into a chat corpus, wrote text-extraction tooling for the demo format, and handled the in-game vocabulary — acronyms, callouts, deliberate misspellings — that make naive text cleaning useless.

On top of that corpus I applied **deep learning toxicity classification** and then evaluated it with **real people**, not just offline metrics. The distinction matters: a model can score well on a leaderboard while still being wrong in the cases that would get a player punished.

The dissertation, *Defending Fun*, concluded that detecting toxicity in Counter-Strike with deep learning is feasible, but that high accuracy demands careful fine-tuning — which is essential if predictions are going to justify a sanction.

## What I learned

The gap between a working model and a system you would trust with a punishment is almost entirely about evaluation. Human raters disagreed with the model, and with each other, in ways that no accuracy figure had predicted.
