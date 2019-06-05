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

###  <span style="color:#2faf40">Positions: `array`</span>

This is a mandatory item that must contain a list of Positions.

###  <span style="color:#f49542">Name: `string`</span>

This is an optional item that can be provided for better understanding of the Object – eg in a chat window or when linking.

###  <span style="color:#f49542">Id: `dictionary`</span>

This is an optional item that should contain at least one reference id.

* <span style="color:#0000ff">id: `string`</span>

---