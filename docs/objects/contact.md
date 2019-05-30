---
id: contact
title: Contact vDraft
sidebar_label: Contact
---

An object with standardized attributes would allow for the use of several IDs to define the contact - including all well-known data-sets and open symbology reference data as well as custom inhouse IDs if needed.

### Code Examples

* [FDC3 Contact](https://github.com/FDC3/ContextData/blob/master/src/examples/Contact.ts)

---

## Properties

###  <span style="color:#f49542">Id: `dictionary`</span>

This is a mandatory item that must contain at least one reference id, preferably but not limited to the below defined options.

* <span style="color:#0000ff">email: `string`</span>
* <span style="color:#0000ff">twitter: `string`</span>
* <span style="color:#0000ff">phone: `string`</span>

###  <span style="color:#f49542">Name: `string`</span>

This is an optional item that can be provided for better understanding of the Object when viewed without a reference database available – eg in a chat window or when linking.

---