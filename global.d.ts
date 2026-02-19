import it from './messages/it.json';

type Messages = typeof it;

declare global {
  //commento per ESLint o usiamo un tipo invece di un'interfaccia
  /* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
  interface IntlMessages extends Messages {}
}