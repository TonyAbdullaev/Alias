export default () => new Date().toISOString().
  replace(/T/, ' ').      // replace T with a space
  replace(/\..+/, '')     // delete the dot and everything after