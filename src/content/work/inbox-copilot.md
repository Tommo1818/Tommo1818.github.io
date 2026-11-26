---
title: 'Inbox Copilot'
summary: 'A local-first Streamlit copilot that reads a Thunderbird mailbox directly and puts an LLM on top for triage, search and reply drafting.'
kicker: 'AI engineering'
year: '2026'
order: 5
stack: ['Python', 'Streamlit', 'LLM APIs', 'Retrieval', 'Local-first']
repo: 'https://github.com/Tommo1818/email-copilot'
---

## The problem

Email triage is a retrieval problem wearing a summarisation costume. Most "AI inbox" tools want your mail on their server and your OAuth credentials in their database. I wanted the opposite: my existing Thunderbird mailbox, read locally, with the model only ever seeing the handful of messages relevant to the question.

## What I built

A Streamlit app that opens the local Thunderbird / Betterbird message database **directly** — no IMAP, no mail server round-trips, no credentials leaving the machine.

On top of that sit four workflows: a **briefing** that groups recent mail by what actually needs action (tracking, receipts, meetings, security, code review), **ask inbox** for natural-language questions where retrieval selects the context passed to the model, **reply drafting** in the thread's own voice, and **subscription cleanup** that clusters the recurring senders worth unsubscribing from.

The design constraint is that retrieval decides what the model sees. The mailbox never gets pasted into a prompt wholesale, which keeps both the cost and the privacy exposure proportional to the question asked. It runs against DeepSeek or Gemini through a single provider abstraction.

## What I learned

Local-first AI is a data-modelling problem first. Once the mailbox is queryable as structured data, most of the "intelligence" is choosing the right slice — and a well-chosen slice beats a bigger model with worse context.
