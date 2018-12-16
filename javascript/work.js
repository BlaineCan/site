const projects = [
    {title:'Weather', description: 'A basic Express app that makes a call to the open weather api and returns the current weather temperature for a city.', url:'https://glacial-shelf-37185.herokuapp.com/',img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAO+SURBVGhD7ZhbqBVVGIB3WmqW9wuUECheEUuTUCQiQSqCIEHREnwQfRAvD0WQCPqiIqaoVEqpL/qQRFRED5Ig+GD1EF4SNSPEC6gpVpRGF7W+b52zYNjuM3vvOWf2eGA++PD8a4+zLrPWv9ZMpaTk/qVX+7/dmt54AT8JUTfmCfwP7Uy3puxIK3gQ5+GwEKXTbEeewhfa/syf2WjjzuIIC1KIHTkfonRm4S28i0MsyJv+eBwb6Yyp9whuCVHHxE54z10WtIqh2Ghn6pHsxB7sgS0l2ZkfsA/W4lF8qO3Pe5iChXYiYmeO4q84wIJ2ZuJePIe38R+0s+/jkxh5EV0TH2JhnYiYxRx1GYSfoyMcvYp2NMY2/F2MR5fB7f/eN/h0TqONNd0uwoEYGYkb8C/0mlewmp74ODoghXEAbeBhTGvIJFyNfUNUqYzBjegg3MH45P7AL3E++tRbwsto5Zew0dF8GN/DfzE2/m+8iD8nyvQMTsPc+QytcGmI6vMYfoex8a4ZG5pc8K6dBWgy8ToTxmuYGXfZUTV8BCO/oJUND1E6TqnYiZM4FtN4AN9Es59mPsLEPF+te4g4RYxvhqg+O9Hrv8dkyq6HT8eM57TLlAy+QEew2k0oTgenh3O9o40vMh69zsw12oIm2YEOgskhF1yMVjA5RB2zGb1uW4iaxxT/J15HB83ZMA5N2abuTvMO2kBHLI0f0eumhigb+9F7nMBkxnMJfIovYWacJnExPm9BDXx/jxW6gLOyDGPjb6BrzZRt3bH8IDaSeGryNnoTjyOvWlBFfDf5KUTZMU1vRQ+cSZx2y/EyWo/vQNbZNI7yB+hNzC5zMIkV+du1EOWH+88htC6nn+uoIVzgyUYvwVP4XIjaRvAjdIF6c+2HeeJe5ZSzrlUW1CP5UlQ9J03Lvhn6dPz9dzyGpu562a0rmI7W7Wad+pEw2QnfM6oxxfqbC3IhFvHF8Vu0DR2eBpKd8KWoOguZufztN5xgQUH42mA7TET3MBFjJ3ZjrVTqacDfV4SoOMxitmN7iKp4Bj2SmKFqdcIyd1/zevLFqgjeQjuyPkQ1SDtTeVr2P18JUbHsQ9tiJm2auIN7Gi7yg4Ip3oxl5sq0MUo8RM4IUTHEhf5ViDKyBr2JO2yXnEqbxM+68ez3tAVZ8bOq7+92xu9bDR8TOon1rMV4gFyJncajifuIN/Tz0Dp8Hefm4GJ0U44HRjvyBnYZbobfoDdvlV9jLl9c3FeeRZ+I6fDjHPRpuGe4WZeUlJSUlJTUplL5H9C2LV6Z4pE0AAAAAElFTkSuQmCC',
    code:'https://github.com/Whatchamazog/weather'}
];

((projects)=>{
    let container = document.querySelector('article');
    let template = '';
    projects.forEach((projects)=>{
        template += `
        <div>
            <img src=${projects.img}
            <p><a target='_blank' href='${projects.url}'>${projects.title}</a></p>
            <p>${projects.description}</p>
            <a target='_blank' href='${projects.code}'>Code</a>
        </div>
        `;
    })
    container.innerHTML = '';
    container.insertAdjacentHTML('afterbegin', template)
})(projects);
