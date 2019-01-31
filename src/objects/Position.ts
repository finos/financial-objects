import {Context} from './Context'
import {Instrument} from './Instrument'

/**
 * A standardized format to transfer an Instrument and unique meta data for each position, with possibility to extend what is included for each position, including custom inhouse IDs if needed.
 */
export interface Position extends Context {
    instrument: Instrument
    holding: number
}