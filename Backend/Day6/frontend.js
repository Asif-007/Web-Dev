const response1 = await fetch("http://example.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Asif", age: 20 }),
});

const response2 = await fetch("http://pokemon.com", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ age: 30 }),
});

