Usage

### Create Reducer and Actions

```ts
  type User = {
    name: string,
    age: number
  }
  const UserActions = {
    setName: (state: User, {payload}: Action<string>) => {
      return { ...state, name: payload };
    }
  } satisfies ReducerActions<User>

  const [state, dispatch] = useReducer(createReducer(UserActions), initState)
  const actions = createActions(UserActions, dispatch)
  actions.setName('foo')
```