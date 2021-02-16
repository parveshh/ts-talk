type Settings = {
  id: number;
  subscribed: boolean;
  isActive: boolean;
  isBanned: boolean;
  lastPasswordChange: Date;
  lastLogin: Date;
};

//  mapped type

{
type Optional<T> = { [P in keyof T]+?: T[P] };
type Filter<T, U extends keyof T> = { [P in U]-?: T[P] };

type Stateful<T, U extends keyof T> = Optional<T> & Filter<T, U>;

type test = Filter<{ a?: number; b: number }, "a">;
}


class SettingsService {
  constructor(private settings: Settings) {}

  getState(): Settings {
    return this.settings;
  }

  updateState(currentState: Settings) : void {
    this.settings = Object.assign({}, this.settings, currentState);
  }
}

const userSettingsState = new SettingsService({
  id: 1,
  subscribed: true,
  isActive: true,
  isBanned: false,
  lastLogin: new Date(),
  lastPasswordChange: new Date(),
});

//update state
// userSettingsState.updateState({ id: 1 });
