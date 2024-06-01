export class Task {

constructor(name){
    this.name = name;
    this.#description = '';
}

#description;

get description() {
    return this.#description;
}

set description(value) {
    if (typeof value === 'string') {
        this.#description = value;
    }
}
}