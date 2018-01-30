import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return [
            {name:"Gilles", age:45},
            {name:"Julie", age:23},
            {name:"Lisa", age:25},
            {name:"Jules", age:53}
        ]
    }
});
