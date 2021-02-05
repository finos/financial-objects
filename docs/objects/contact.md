---
id: contact
title: Contact v1.0.0
sidebar_label: Contact
---

An object with standardized attributes would allow for the use of several IDs to define the contact - including all well-known data-sets and open symbology reference data as well as custom inhouse IDs if needed.

### Code Examples

* [FDC3 Contact](https://github.com/FDC3/ContextData/blob/master/src/examples/Contact.ts)

---

## Properties

###  Id: `dictionary`

This is a <span class="mandatory property">mandatory</span> item that must contain at least one reference id, preferably but not limited to the below defined options.

* <span class="reference">email: `string`</span>
* <span class="reference">FDS_ID: `string`</span>

###  Name: `string`

This is an <span class="optional property">optional</span> item that can be provided for better understanding of the Object when viewed without a reference database available – eg in a chat window or when linking.

---
