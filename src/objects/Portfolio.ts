import { Position } from "./Position";

/**
 * A standardized format to transfer Positions and unique meta data for each portfolio, with possibility to extend what is included for each portfolio, including custom inhouse IDs if needed.
 */
export interface Portfolio {
  id: {
    portfolioId?: string;
  };
  positions: Position[];
}
