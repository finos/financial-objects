---
id: rfq
title: RFQ vDraft
sidebar_label: RFQ
---

The RFQ object will be an extension of the trade object by identifying the additional attributes over and above the trade object to determine the status of RFQ - inquiry, response, state change data fields. Example: IRS, USD, 50m, 31/08/2018,31/08/2028, IMM, LCH, 2 way (Vanilla Swap), IRS, USD, 31/08/2018 10y/5y, IMM, LCH, 2 way (Vanilla Swap - 5y swap 10y fwd)

---

## Properties

###  Requestor: `object`

This is a <span class="mandatory property">mandatory</span> item that should contain a <span class="object property">Contact</span> or an <span class="object property">Organization</span>.

###  Direction: `string`

This is a <span class="mandatory property">mandatory</span> item.

###  Notional: `integer`

This is a <span class="mandatory property">mandatory</span> item.

###  StartDate: `date`

This is a <span class="mandatory property">mandatory</span> item that must include a timestamp in Unix Time - https://en.wikipedia.org/wiki/Unix_time.

###  EndDate: `date`

This is a <span class="mandatory property">mandatory</span> item that must include a timestamp in Unix Time - https://en.wikipedia.org/wiki/Unix_time.

###  RollConvention: `string`

This is a <span class="mandatory property">mandatory</span> item.

###  Trade: `object`

This is a <span class="mandatory property">mandatory</span> item that should contain a <span class="object property">Trade</span>.

---