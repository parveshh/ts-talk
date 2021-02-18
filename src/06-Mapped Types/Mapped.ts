// Mapped Types:  when we want a variation of existing type as a new type


type State = {
  id: number;
  subscribed: boolean;
  isActive: boolean;
  isBanned: boolean;

};



//  mapped type

// make all keys of type T optional
type Optional<T> = { [Property in keyof T]+?: T[Property] }

// make a key of type T mandatory
type Mandatory<T, U extends keyof T> = { [Property in U]-?: T[Property] }

// intersection of Optional and Madatory
type OptionalExcept<T, U extends keyof T> = Optional<T> & Mandatory<T, U>


class UserState {

  constructor(private _state: State) { }

  get state(): State {
    return this._state;
  }

  updateState(newState: OptionalExcept<State, "id">): void {
    this._state = { ...this._state, ...newState }
  }
}

const stateService = new UserState({
  id: 1,
  subscribed: true,
  isActive: true,
  isBanned: false,
});


stateService.updateState({ id: 1, isActive: false })
