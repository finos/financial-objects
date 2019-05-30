---
id: trade
title: Trade vDraft
sidebar_label: Trade
---

Ability to define and pass through a structured object between buy-side, sell-side and financial eco-system partners. This will allow a specific trade and instrument context E.g. Rates trade object to be passed in a use case workflow to satisfy a pre-trade, trade, post trade workflow. The goal is to enable and foster greater open collaboration between creators of Financial Objects and with the users of Financial Objects starting with trade objects. Type of interaction, stage of trade-life-cycle, extensible objects that can be enriched (from core essential objects) Example: IRS, USD, 10Y, LCH (Vanilla Swap), IRS, USD, 10y/5y, LCH (Vanilla Swap - 5y swap 10y fwd)

---

## Properties

###  <span style="color:#ff0000">Product: `string`</span>

This is a mandatory item.

###  <span style="color:#ff0000">Currency: `string`</span>

This is a mandatory item that must include an ISO 4217 currency code - https://en.wikipedia.org/wiki/ISO_4217.

###  <span style="color:#ff0000">Maturity: `string`</span>

This is a mandatory item.

###  <span style="color:#ff0000">Clear: `string`</span>

This is a mandatory item.

---