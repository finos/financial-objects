---
id: rfq
title: RFQ object
sidebar_label: RFQ
---

[Source code: rfq.ts](https://github.com/finos-fo/finos-fo/tree/docusaurus/src/objects/)


The RFQ object will be an extension of the trade object by identifying the additional attributes over and above the trade object to determine the status of RFQ - inquiry, response, state change data fields. Example: IRS, USD, 50m, 31/08/2018,31/08/2028, IMM, LCH, 2 way (Vanilla Swap), IRS, USD, 31/08/2018 10y/5y, IMM, LCH, 2 way (Vanilla Swap - 5y swap 10y fwd)

## Hierarchy

 [Trade](trade.md)

**↳ RFQ**

↳  [RFQResponse](rfqresponse.md)

## Index

### Properties

* [CCY](rfq.md#ccy)
* [clear](rfq.md#clear)
* [direction](rfq.md#direction)
* [endDate](rfq.md#enddate)
* [instrument](rfq.md#instrument)
* [maturity](rfq.md#maturity)
* [notional](rfq.md#notional)
* [requestor](rfq.md#requestor)
* [rollConvention](rfq.md#rollconvention)
* [startDate](rfq.md#startdate)

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

*Defined in [RFQ.ts:10](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/RFQ.ts#L10)*

___
<a id="enddate"></a>

###  endDate

**● endDate**: *`Date`*

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

*Defined in [RFQ.ts:11](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/RFQ.ts#L11)*

___
<a id="requestor"></a>

###  requestor

**● requestor**: *[Contact](contact.md)*

*Defined in [RFQ.ts:9](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/RFQ.ts#L9)*

___
<a id="rollconvention"></a>

###  rollConvention

**● rollConvention**: *`string`*

*Defined in [RFQ.ts:14](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/RFQ.ts#L14)*

___
<a id="startdate"></a>

###  startDate

**● startDate**: *`Date`*

*Defined in [RFQ.ts:12](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/RFQ.ts#L12)*

___

