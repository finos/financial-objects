import {Context} from './context'
import {Instrument} from './instrument'

/**
 * A standardized format to transfer an Instrument and unique meta data for each position, with possibility to extend what is included for each position, including custom inhouse IDs if needed.
 */
interface Position extends Context {
    instrument: Instrument
    holding: number
}