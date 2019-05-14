---
id: trade
title: Trade object
sidebar_label: Trade
---

[Source code: trade.ts](https://github.com/finos-fo/finos-fo/tree/docusaurus/src/objects/)


Ability to define and pass through a structured object between buy-side, sell-side and financial eco-system partners. This will allow a specific trade and instrument context E.g. Rates trade object to be passed in a use case workflow to satisfy a pre-trade, trade, post trade workflow. The goal is to enable and foster greater open collaboration between creators of Financial Objects and with the users of Financial Objects starting with trade objects. Type of interaction, stage of trade-life-cycle, extensible objects that can be enriched (from core essential objects) Example: IRS, USD, 10Y, LCH (Vanilla Swap), IRS, USD, 10y/5y, LCH (Vanilla Swap - 5y swap 10y fwd)

## Hierarchy

**Trade**

↳  [Order](order.md)

↳  [RFQ](rfq.md)

## Index

### Properties

* [CCY](trade.md#ccy)
* [clear](trade.md#clear)
* [instrument](trade.md#instrument)
* [maturity](trade.md#maturity)

---

## Properties

<a id="ccy"></a>

###  CCY

**● CCY**: *`string`*

*Defined in [Trade.ts:15](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Trade.ts#L15)*

Trade currency

___
<a id="clear"></a>

###  clear

**● clear**: *`string`*

*Defined in [Trade.ts:25](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Trade.ts#L25)*

The clearing venue; null if not cleared

___
<a id="instrument"></a>

###  instrument

**● instrument**: *[Instrument](instrument.md)*

*Defined in [Trade.ts:30](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Trade.ts#L30)*

TODO - is this needed?

___
<a id="maturity"></a>

###  maturity

**● maturity**: *`string`*

*Defined in [Trade.ts:20](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Trade.ts#L20)*

Combination of number and letter, ie 10Y (for 10 years), 3M (for 3 months), 2D (for 2 days)

___

