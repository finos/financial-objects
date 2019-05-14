---
id: orderresponse
title: OrderResponse object
sidebar_label: OrderResponse
---

[Source code: orderresponse.ts](https://github.com/finos-fo/finos-fo/tree/docusaurus/src/objects/)


Response to the Order object request

## Hierarchy

↳  [Order](order.md)

**↳ OrderResponse**

## Index

### Properties

* [CCY](orderresponse.md#ccy)
* [clear](orderresponse.md#clear)
* [direction](orderresponse.md#direction)
* [endDate](orderresponse.md#enddate)
* [instrument](orderresponse.md#instrument)
* [maturity](orderresponse.md#maturity)
* [notional](orderresponse.md#notional)
* [requestor](orderresponse.md#requestor)
* [rollConvention](orderresponse.md#rollconvention)
* [startDate](orderresponse.md#startdate)

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

*Inherited from [Order](order.md).[direction](order.md#direction)*

*Defined in [Order.ts:9](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Order.ts#L9)*

___
<a id="enddate"></a>

###  endDate

**● endDate**: *`Date`*

*Inherited from [Order](order.md).[endDate](order.md#enddate)*

*Defined in [Order.ts:12](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Order.ts#L12)*

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

*Inherited from [Order](order.md).[notional](order.md#notional)*

*Defined in [Order.ts:10](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Order.ts#L10)*

___
<a id="requestor"></a>

###  requestor

**● requestor**: *[Contact](contact.md)*

*Inherited from [Order](order.md).[requestor](order.md#requestor)*

*Defined in [Order.ts:8](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Order.ts#L8)*

___
<a id="rollconvention"></a>

###  rollConvention

**● rollConvention**: *`string`*

*Inherited from [Order](order.md).[rollConvention](order.md#rollconvention)*

*Defined in [Order.ts:13](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Order.ts#L13)*

___
<a id="startdate"></a>

###  startDate

**● startDate**: *`Date`*

*Inherited from [Order](order.md).[startDate](order.md#startdate)*

*Defined in [Order.ts:11](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Order.ts#L11)*

___

