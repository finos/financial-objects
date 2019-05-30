---
id: instrument
title: Instrument v1.0.1
sidebar_label: Instrument
---

Several use cases and workflows rely on that all parties involved can understand what instrument is being referred to - be it a simple chat message "why is Apple up today?" where the receiver wants to look up details about the company mentioned or a complex financial object - involving several securities - that will be parsed by a system. An object with standardized names would allow for the use of several IDs to define the instrument - including all well-known data-sets and open symbology reference data as well as custom inhouse IDs if needed. The main idea is for each participant to send as many IDs as exist in the system and be able to receive/understand as many as possible. This will ensure compatibility with existing applications while at the same time allow for a potential "most-favored" ID to become a future standard.

### Code Examples

* [FDC3 Intrument](https://github.com/FDC3/ContextData/blob/master/src/examples/Instrument.ts)

---

## Properties

###  <span style="color:#ff0000">Id: `dictionary`</span>

This is a mandatory item that must contain at least one reference id, preferably but not limited to the below defined options.

* <span style="color:#0000ff">BBG: `string`</span>
* <span style="color:#0000ff">CUSIP: `string`</span>
* <span style="color:#0000ff">FDS_ID: `string`</span>
* <span style="color:#0000ff">FIGI: `string`</span>
* <span style="color:#0000ff">ISIN: `string`</span>
* <span style="color:#0000ff">PERMID: `string`</span>
* <span style="color:#0000ff">RIC: `string`</span>
* <span style="color:#0000ff">SEDOL: `string`</span>
* <span style="color:#0000ff">ticker: `string`</span>

###  <span style="color:#f49542">Name: `string`</span>

This is an optional item that can be provided for better understanding of the Object when viewed without a reference database available – eg in a chat window or when linking.

---