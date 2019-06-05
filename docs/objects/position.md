---
id: position
title: Position v1.0.0
sidebar_label: Position
---

A standardized format to transfer an Instrument and unique meta data for a position, with possibility to extend what is included for the position, including custom inhouse IDs if needed.

### Code Examples

* [FDC3 Position](https://github.com/FDC3/ContextData/blob/master/src/examples/Position.ts)

---

## Properties

###  <span style="color:#2faf40">Instruments: `array`</span>

This is a mandatory item that must contain a list of Instruments.

###  <span style="color:#f49542">Name: `string`</span>

This is an optional item that can be provided for better understanding of the Object – eg in a chat window or when linking.

###  <span style="color:#f49542">Holding: `integer`</span>

This is an optional item that should be used when specifying the number of items in the position - eg shares held.

---