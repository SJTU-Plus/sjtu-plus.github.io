const sayHello = (name: string = 'world'): void => {
  // eslint-disable-next-line no-console
  console.log(`%c[HelloService]:%c Hello ${name}!`, 'color: #4DBA87', 'color: #ffffff; background: #435466');
};

export default {
  sayHello,
};