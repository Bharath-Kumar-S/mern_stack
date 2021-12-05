const a = [1,2,3,4,5];

// Map

let map_ = a.map((e)=>{
    return e*5
})

console.log(map_)

//filter

let filter_ = a.filter((e) => {
  return e >3;
});

console.log(filter_);

//reduce

let reduce_ = a.reduce((e,i) => {
  return e+i;
});

console.log(reduce_);

//index
for(e in a){
    console.log(e)
}

//elm
for(e of a){
    console.log(e)
}