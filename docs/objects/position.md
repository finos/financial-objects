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

###  Instrument: `object`

This is a <span class="mandatory property">mandatory</span> item that must contain a single <span class="object property">Instrument</span>.

###  Name: `string`

This is an <span class="optional property">optional</span> item that can be provided for better understanding of the Object – eg in a chat window or when linking.

###  Holding: `integer`

This is an <span class="optional property">optional</span> item that should be used when specifying the number of items in the position - eg shares held.

---