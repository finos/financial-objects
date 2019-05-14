---
id: rfqresponse
title: RFQResponse object
sidebar_label: RFQResponse
---

[Source code: rfqresponse.ts](https://github.com/finos-fo/finos-fo/tree/docusaurus/src/objects/)


Response to the RFQ object request

## Hierarchy

↳  [RFQ](rfq.md)

**↳ RFQResponse**

## Index

### Properties

* [CCY](rfqresponse.md#ccy)
* [clear](rfqresponse.md#clear)
* [direction](rfqresponse.md#direction)
* [endDate](rfqresponse.md#enddate)
* [instrument](rfqresponse.md#instrument)
* [maturity](rfqresponse.md#maturity)
* [notional](rfqresponse.md#notional)
* [requestor](rfqresponse.md#requestor)
* [rollConvention](rfqresponse.md#rollconvention)
* [startDate](rfqresponse.md#startdate)

---

## Properties

<a id="ccy"></a>

###  CCY

**● CCY**: *`string`*

*Inherited from [Trade](trade.md).[CCY](trade.md#ccy)*

*Defined in [Trade.ts:15](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Trade.ts#L15)*

Trade currency

___
<a id="clear"></a>

###  clear

**● clear**: *`string`*

*Inherited from [Trade](trade.md).[clear](trade.md#clear)*

*Defined in [Trade.ts:25](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Trade.ts#L25)*

The clearing venue; null if not cleared

___
<a id="direction"></a>

###  direction

**● direction**: *`string`*

*Inherited from [RFQ](rfq.md).[direction](rfq.md#direction)*

*Defined in [RFQ.ts:10](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/RFQ.ts#L10)*

___
<a id="enddate"></a>

###  endDate

**● endDate**: *`Date`*

*Inherited from [RFQ](rfq.md).[endDate](rfq.md#enddate)*

*Defined in [RFQ.ts:13](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/RFQ.ts#L13)*

___
<a id="instrument"></a>

###  instrument

**● instrument**: *[Instrument](instrument.md)*

*Inherited from [Trade](trade.md).[instrument](trade.md#instrument)*

*Defined in [Trade.ts:30](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Trade.ts#L30)*

TODO - is this needed?

___
<a id="maturity"></a>

###  maturity

**● maturity**: *`string`*

*Inherited from [Trade](trade.md).[maturity](trade.md#maturity)*

*Defined in [Trade.ts:20](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Trade.ts#L20)*

Combination of number and letter, ie 10Y (for 10 years), 3M (for 3 months), 2D (for 2 days)

___
<a id="notional"></a>

###  notional

**● notional**: *`number`*

*Inherited from [RFQ](rfq.md).[notional](rfq.md#notional)*

*Defined in [RFQ.ts:11](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/RFQ.ts#L11)*

___
<a id="requestor"></a>

###  requestor

**● requestor**: *[Contact](contact.md)*

*Inherited from [RFQ](rfq.md).[requestor](rfq.md#requestor)*

*Defined in [RFQ.ts:9](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/RFQ.ts#L9)*

___
<a id="rollconvention"></a>

###  rollConvention

**● rollConvention**: *`string`*

*Inherited from [RFQ](rfq.md).[rollConvention](rfq.md#rollconvention)*

*Defined in [RFQ.ts:14](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/RFQ.ts#L14)*

___
<a id="startdate"></a>

###  startDate

**● startDate**: *`Date`*

*Inherited from [RFQ](rfq.md).[startDate](rfq.md#startdate)*

*Defined in [RFQ.ts:12](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/RFQ.ts#L12)*

___

