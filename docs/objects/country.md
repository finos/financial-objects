---
id: country
title: Country v1.0.0
sidebar_label: Country
---

An object with standardized names would allow for the use of several IDs to define the country - including all well-known data-sets and open symbology reference data as well as custom inhouse IDs if needed.

### Code Examples

* [FDC3 Country](https://github.com/FDC3/ContextData/blob/master/src/examples/Country.ts)

---

## Properties

###  Id: `dictionary`

This is an <span class="mandatory property">optional</span> item that should contain at least one reference id, preferably but not limited to the below defined options.

* <span class="reference">ISOALPHA2: `string`</span>
* <span class="reference">ISOALPHA3: `string`</span>

###  Name: `string`

This is an <span class="optional property">optional</span> item that can be provided for better understanding of the Object when viewed without a reference database available – eg in a chat window or when linking.

---
