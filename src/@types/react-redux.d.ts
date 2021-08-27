import 'react-redux';
import { ApplicationState } from 'store';

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends ApplicationState {}
}
