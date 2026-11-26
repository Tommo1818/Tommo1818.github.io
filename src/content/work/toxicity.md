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

Everyone who plays Counter-Strike knows how fast team chat goes downhill. Off-the-shelf toxicity models struggle with it though, because CS chat is full of shorthand, map callouts, typos and banter that looks aggressive out of context.

## What I did

Getting proper data was the main job. Instead of grabbing a generic dataset, I pulled real chat logs straight out of **Counter-Strike demo files**, wrote parsing tools for the demo format, and handled game-specific slang and deliberate misspellings that normal text cleaning mangles.

I ran deep learning toxicity classifiers over that corpus and then got **human raters** to label the same messages, rather than trusting accuracy numbers alone. A model can look great on paper and still flag standard callouts like "kill guy ct then bomb" if you'd actually use it to dish out bans.

The dissertation (*Defending Fun*) showed deep learning can spot toxicity in CS chat fairly well, as long as it's fine-tuned on actual game chat rather than generic internet comments.

## What I learned

Evaluation is the tricky bit. The human raters didn't always agree with the model, and half the time they didn't agree with each other either, which no accuracy score prepares you for.
