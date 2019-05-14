---
id: instrument
title: Instrument object
sidebar_label: Instrument
---

[Source code: instrument.ts](https://github.com/finos-fo/finos-fo/tree/docusaurus/src/objects/)


Several use cases and workflows rely on that all parties involved can understand what instrument is being referred to - be it a simple chat message "why is Apple up today?" where the receiver wants to look up details about the company mentioned or a complex financial object - involving several securities - that will be parsed by a system. An object with standardized names would allow for the use of several IDs to define the instrument - including all well-known data-sets and open symbology reference data as well as custom inhouse IDs if needed. The main idea is for each participant to send as many IDs as exist in the system and be able to receive/understand as many as possible. This will ensure compatibility with existing applications while at the same time allow for a potential "most-favored" ID to become a future standard.

## Hierarchy

**Instrument**

## Index

### Properties

* [id](instrument.md#id)
* [name](instrument.md#name)

---

## Properties

<a id="id"></a>

###  id

**● id**: *`object`*

*Defined in [Instrument.ts:8](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Instrument.ts#L8)*

#### Type declaration

`Optional`  BBG: `string`

`Optional`  CUSIP: `string`

`Optional`  FDS_ID: `string`

`Optional`  FIGI: `string`

`Optional`  ISIN: `string`

`Optional`  PERMID: `string`

`Optional`  RIC: `string`

`Optional`  SEDOL: `string`

`Optional`  ticker: `string`

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in [Instrument.ts:7](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Instrument.ts#L7)*

___

