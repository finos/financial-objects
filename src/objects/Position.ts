import { Instrument } from "./Instrument";

/**
 * A standardized format to transfer an Instrument and unique meta data for a position, with possibility to extend what is included for the position, including custom inhouse IDs if needed.
 */
export interface Position {
  instrument: Instrument;
  holding: number;
}
