function validateHello(greetings) {
  return ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'].reduce((acc, greeting) => greetings.toLowerCase().includes(greeting) || acc, false);
}