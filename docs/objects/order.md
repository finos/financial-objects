---
id: order
title: Order object
sidebar_label: Order
---

[Source code: order.ts](https://github.com/finos-fo/finos-fo/tree/docusaurus/src/objects/)


The Order object can be enabled and triggered from a blotter or similar application to place an order.

## Hierarchy

 [Trade](trade.md)

**↳ Order**

↳  [OrderResponse](orderresponse.md)

## Index

### Properties

* [CCY](order.md#ccy)
* [clear](order.md#clear)
* [direction](order.md#direction)
* [endDate](order.md#enddate)
* [instrument](order.md#instrument)
* [maturity](order.md#maturity)
* [notional](order.md#notional)
* [requestor](order.md#requestor)
* [rollConvention](order.md#rollconvention)
* [startDate](order.md#startdate)

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

*Defined in [Order.ts:9](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Order.ts#L9)*

___
<a id="enddate"></a>

###  endDate

**● endDate**: *`Date`*

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

*Defined in [Order.ts:10](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Order.ts#L10)*

___
<a id="requestor"></a>

###  requestor

**● requestor**: *[Contact](contact.md)*

*Defined in [Order.ts:8](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Order.ts#L8)*

___
<a id="rollconvention"></a>

###  rollConvention

**● rollConvention**: *`string`*

*Defined in [Order.ts:13](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Order.ts#L13)*

___
<a id="startdate"></a>

###  startDate

**● startDate**: *`Date`*

*Defined in [Order.ts:11](https://github.com/maoo/finos-fo/blob/1d0ca0d/src/objects/Order.ts#L11)*

___

