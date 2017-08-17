export class Player {
    constructor(
        public name: string = '',
        public position: string = '',
        public game1Status: string = 'undecided',
        public game2Status: string = 'undecided',
        public game3Status: string = 'undecided',
    ) {}
}