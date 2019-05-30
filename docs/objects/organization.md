---
id: organization
title: Organization v1.0.1
sidebar_label: Organization
---

An object with standardized names would allow for the use of several IDs to define the organization - including all well-known data-sets and open symbology reference data as well as custom inhouse IDs if needed.

### Code Examples

* [FDC3 Organization](https://github.com/FDC3/ContextData/blob/master/src/examples/Organization.ts)

---

## Properties

###  <span style="color:#ff0000">Id: `dictionary`</span>

This is a mandatory item that must contain at least one reference id, preferably but not limited to the below defined options.

* <span style="color:#0000ff">LEI: `string`</span>
* <span style="color:#0000ff">PERMID: `string`</span>
* <span style="color:#0000ff">FDS_ID: `string`</span>

###  <span style="color:#f49542">Name: `string`</span>

This is an optional item that can be provided for better understanding of the Object when viewed without a reference database available – eg in a chat window or when linking.

---