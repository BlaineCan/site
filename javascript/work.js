const projects = [
    {title:'Riff', description: 'Riff will be a messy, reddit-like clone mostly built for fun.', url:'https://github.com/Whatchamazog/Riff'},
    {title:'Weather', description: 'This is just a silly little weather app that I built with vanilla javascript making a series of api calls.', url:'https://whatchamazog.github.io/weather/'}
];

((projects)=>{
    let container = document.querySelector('article');
    let template = '';
    projects.forEach((projects)=>{
        template += `
        <div>
            <p><a target='_blank' href='${projects.url}'>${projects.title}</a></p>
            <p>${projects.description}</p>
        </div>
        `;
    })
    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', template)
})(projects);