import { Entity } from "./Entity";

/**
 * An object with standardized names would allow for the use of several IDs to define the organization - including all well-known data-sets and open symbology reference data as well as custom inhouse IDs if needed.
 */
interface Organization extends Entity {
  name: string;
  id: {
    LEI?: string;
    PERMID?: string;
  };
}
