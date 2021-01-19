import greetings from './greetings';

let data = [{name : 'Doni', city:'mataram'},{name:'mina', city:'jembar'}];

document.write('<div class="content dasheBox">')

data.map(item => {
    document.write(greetings(item.name, item.city));
});

document.write('</div>')