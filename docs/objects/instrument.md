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

###  Id: `dictionary`

This is a <span class="mandatory property">mandatory</span> item that must contain at least one reference id, preferably but not limited to the below defined options.

* <span class="reference">BBG: `string`</span>
* <span class="reference">CUSIP: `string`</span>
* <span class="reference">FDS_ID: `string`</span>
* <span class="reference">FIGI: `string`</span>
* <span class="reference">ISIN: `string`</span>
* <span class="reference">PERMID: `string`</span>
* <span class="reference">RIC: `string`</span>
* <span class="reference">SEDOL: `string`</span>
* <span class="reference">ticker: `string`</span>


###  Name: `string`

This is an <span class="optional property">optional</span> item that can be provided for better understanding of the Object when viewed without a reference database available – eg in a chat window or when linking.

---