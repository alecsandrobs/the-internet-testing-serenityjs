# An example of web testing with serenityjs

### Installation

```
npm i
```

### Execution

```
npm test
```

#### Running individual scenarios by name

```
SCENARIO="Successful login" npm run scenario
SCENARIO="Login with invalid credentials" npm run scenario:report
``` 

#### Running scenarios by tag

```
TAGS="@elementsAdd" npm run tags
TAGS="@elementsRemove" npm run tags:report
``` 