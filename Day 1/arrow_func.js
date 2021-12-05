// without args

const a = () => {
  console.log("hello");
};

//with args
const ab = (x) => {
  console.log(`hello ${x}`);
};

//with return
const ac = () => {
  return "hello";
};

//single liner func
const ad = () => "hello";

//single liner with args
const ae = fg => `hello ${fg}`;

a();
ab('4');
ac();
ad();
ae('5');