const projects = [
    {title:'Riff', description: 'Riff will be a messy, reddit-like clone mostly built for fun.', url:'https://github.com/Whatchamazog/Riff'},
    {title:'Weather', description: 'This is just a silly little weather app that I built with vanilla javascript making a series of api calls.', url:'https://whatchamazog.github.io/weather/'}
];

(function showProjects(projects){
    this.init = ()=>{
        this.generateList();
    }
    this.generateList = ()=>{
        let container = document.querySelector('article');
        let template = '';
        for(let i = 0; i < projects.length; i++){
            template += `
            <div>
                <p><a target='_blank' href='${projects[i].url}'>${projects[i].title}</a></p>
                <p>${projects[i].description}</p>
            </div>
            `;
        }
        container.innerHTML = '';
        container.insertAdjacentHTML('afterbegin', template)
    } 
    this.init();
})(projects);