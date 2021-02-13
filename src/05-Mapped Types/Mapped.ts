type Settings = {
  subscribed: boolean;
  isActive: boolean;
  isBanned: boolean;
  lastPasswordChange: Date;
  lastLogin: Date;
};

class State<T> {
  constructor(private state: T) {}

  getState(): T {
    return this.state;
  }

  updateState(currentState: T) {
    this.state = Object.assign({}, this.state, currentState);
  }
}

const userSettingsState = new State<Settings>({
  subscribed: true,
  isActive: true,
  isBanned: false,
  lastLogin: new Date(),
  lastPasswordChange: new Date(),
});
