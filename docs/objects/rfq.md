---
id: rfq
title: RFQ vDraft
sidebar_label: RFQ
---

The RFQ object will be an extension of the trade object by identifying the additional attributes over and above the trade object to determine the status of RFQ - inquiry, response, state change data fields. Example: IRS, USD, 50m, 31/08/2018,31/08/2028, IMM, LCH, 2 way (Vanilla Swap), IRS, USD, 31/08/2018 10y/5y, IMM, LCH, 2 way (Vanilla Swap - 5y swap 10y fwd)

---

## Properties

###  <span style="color:#2faf40">Requestor: `object`</span>

This is a mandatory item that should contain a Contact or an Organization.

###  <span style="color:#ff0000">Direction: `string`</span>

This is a mandatory item.

###  <span style="color:#ff0000">Notional: `integer`</span>

This is a mandatory item.

###  <span style="color:#ff0000">StartDate: `date`</span>

This is a mandatory item that must include a timestamp in Unix Time - https://en.wikipedia.org/wiki/Unix_time.

###  <span style="color:#ff0000">EndDate: `date`</span>

This is a mandatory item that must include a timestamp in Unix Time - https://en.wikipedia.org/wiki/Unix_time.

###  <span style="color:#ff0000">RollConvention: `string`</span>

This is a mandatory item.

###  <span style="color:#2faf40">Trade: `object`</span>

This is a mandatory item that should contain a Trade object.

---