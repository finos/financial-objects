---
id: order
title: Order vDraft
sidebar_label: Order
---

The Order object can be enabled and triggered from a blotter or similar application to place an order.

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