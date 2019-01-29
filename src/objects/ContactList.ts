import {Context} from './context'
import {Contact} from './contact'

/**
 * A standardized format for a lists of Contacts.
 */
export interface ContactList extends Context {
    contacts: Contact[]
}