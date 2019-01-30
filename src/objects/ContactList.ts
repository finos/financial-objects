import {Context} from './Context'
import {Contact} from './Contact'

/**
 * A standardized format for a lists of Contacts.
 */
export interface ContactList extends Context {
    contacts: Contact[]
}