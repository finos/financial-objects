---
id: order
title: Order vDraft
sidebar_label: Order
---

The Order object can be enabled and triggered from a blotter or similar application to place an order.

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