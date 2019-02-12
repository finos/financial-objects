import { Contact } from "./Contact";
import { Trade } from "./Trade";

/**
 * The Order object can be enabled and triggered from a blotter or similar application to place an order.
 */
export interface Order extends Trade {
  requestor: Contact;
  direction: string;
  notional: number;
  startDate: Date;
  endDate: Date;
  rollConvention: string;
}
