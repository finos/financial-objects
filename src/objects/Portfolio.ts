import {Context} from './Context'
import {Position} from './Position'

/**
 * A standardized format to transfer Positions and unique meta data for each portfolio, with possibility to extend what is included for each portfolio, including custom inhouse IDs if needed.
 */
interface Portfolio extends Context {
    id: {
        portfolioId?: string
    }
    positions: Position[]
}
