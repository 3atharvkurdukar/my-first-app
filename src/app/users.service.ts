import { Subject } from 'rxjs';

export class UsersService {

  // A subject is an observer and an observable at the same time
  userActivated = new Subject();
}
