---
id: portfolio
title: Portfolio v1.0.0
sidebar_label: Portfolio
---

A standardized format to transfer Positions and unique meta data for a portfolio, with possibility to extend what is included for the portfolio, including custom inhouse IDs if needed.

### Code Examples

* [FDC3 Portfolio](https://github.com/FDC3/ContextData/blob/master/src/examples/Portfolio.ts)

---

## Properties

###  Positions: `array`

This is a <span class="mandatory property">mandatory</span> item that must contain a list of <span class="object property">Positions</span>.

###  Name: `string`

This is an <span class="optional property">optional</span> item that can be provided for better understanding of the Object – eg in a chat window or when linking.

###  Id: `dictionary`

This is an <span class="optional property">optional</span> item that should contain at least one reference id.

* <span class="reference">id: `string`</span>

---