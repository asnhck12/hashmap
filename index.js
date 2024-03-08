class hashMap {
    constructor(tableSize = 16) {
        this.table = new Array(tableSize);
        this.tableSize = tableSize;
    }

hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
 
    return hashCode;
  } 

set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;

}

remove(key) {
    const index = this.hash(key);
    delete this.table[index];
}

get(key) {
    const index = this.hash(key);
    return this.table[index];
}

has(key) {
    const index = this.hash(key);
     this.table[index];
}


}