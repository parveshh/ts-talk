type Settings = {
  id: number;
  subscribed: boolean;
  isActive: boolean;
  isBanned: boolean;
  lastPasswordChange: Date;
  lastLogin: Date;
};

// // mapped type
// type Optional<T> = { [P in keyof T]+?: T[P] };

type Optional<T> = { [P in keyof T]+?: T[P] };
type Filter<T, U extends keyof T> = { [P in U]-?: T[P] };

type Stateful<T, U extends keyof T> = Optional<T> & Filter<T, U>;

type test = Filter<{ a?: number; b: number }, "a">;

class State {
  constructor(private state: Settings) {}

  getState(): Settings {
    return this.state;
  }

  updateState(currentState: Settings) {
    this.state = Object.assign({}, this.state, currentState);
  }

  // updateState(currentState: Stateful<Settings, "id">) {
  //   this.state = Object.assign({}, this.state, currentState);
  // }
}

const userSettingsState = new State({
  id: 1,
  subscribed: true,
  isActive: true,
  isBanned: false,
  lastLogin: new Date(),
  lastPasswordChange: new Date(),
});

//update state
// userSettingsState.updateState({ id: 1 });
