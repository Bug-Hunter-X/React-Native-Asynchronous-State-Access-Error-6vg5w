The solution involves checking if the data is available before attempting to access it.  Optional chaining (`?.`) and the nullish coalescing operator (`??`) are helpful here.

```javascript
// Correct
function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.name ?? 'Loading...'}</Text> 
    </View>
  );
}
```

This revised code uses optional chaining (`data?.name`) to safely access the `name` property only if `data` is not null.  The nullish coalescing operator (`?? 'Loading...'`) provides a fallback value ('Loading...') if `data` or `data.name` is null or undefined. This prevents the error and displays a friendly message while the data is loading.