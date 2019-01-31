import { Entity } from "./Entity";

/**
 * An object with standardized names would allow for the use of several IDs to define the contact - including all well-known data-sets and open symbology reference data as well as custom inhouse IDs if needed.
 */
export interface Contact extends Entity {
  id: {
    /**
     * Contact email address - https://tools.ietf.org/html/rfc5322
     */
    email: string;

    /**
     * Twitter account name
     */
    twitter: string;

    /**
     * Phone number - (+xx xxx xxx xxxx)
     */
    phone: string;

    /**
     * Custom properties
     */
    [x: string]: string;
  };
}
