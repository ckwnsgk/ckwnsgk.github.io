$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/opensource.jpeg',
            link: 'https://slam.gachon.ac.kr/',
            title: 'Open Source Supporters',
            technologies: ['open-source'],
            description: "Gachon University Open Source Supporters로써, 학교 내 오픈소스 프로젝트를 지원하고 있습니다.",
            categories: ['activity']
        },
        {
            image: 'assets/images/robotis.png',
            link: '',
            title: 'ROBOTIS OpenLAB',
            technologies: ['ROBOTIS','forum','networking'],
            description: "ROBOTIS OpenLAB 행사에 참여하여 네트워킹을 진행하고 사옥을 탐방해보았습니다.",
            categories: ['activity']
        },
        {
            image: 'assets/images/aikr.jpeg',
            link: 'https://github.com/abhn/Wall-E',
            title: 'AIKR ',
            technologies: ['AIKR','forum','networking'],
            description: "로봇계 대가이신 연사님들의 강연을 듣고, 인사이트를 얻는 좋은 기회였습니다.",
            categories: ['activity']
        },
        {
            image: 'assets/images/movella.jpg',
            link: 'https://www.notion.so/Movella-Dot-IMU-Sensor-Ros-Driver-b98ea440020b414891fd71aeaca2237b',
            title: 'Movella-Dot IMU Sensor',
            technologies: ['Python', 'ROS2'],
            description: "Developed a ROS driver for the Movella-Dot IMU sensor. and created a ROS2 System to collect the data.",
            categories: ['project','featured']
        },
        {
            image: 'assets/images/openVLA.gif',
            link: 'https://openvla.github.io/',
            title: 'OpenVLA Experiment',
            technologies: ['VLA'],
            description: "Directly applied the OpenVLA model and conducted experiments.",
            categories: ['project','featured']
        },
        {
            image: 'assets/images/kiroplatform.jpeg',
            link: 'https://openvla.github.io/',
            title: '2024-국방로봇경진대회',
            technologies: ['ROS','Robotics','moveit','YOLO'],
            description: "Participated in the multifunction autonomous driving vehicle competition organized by the Army.",
            categories: ['Challenge','featured']
        },
        {
            image: 'assets/images/bbvla.png',
            link: '--',
            title: 'BB-VLA',
            technologies: ['VLA','ROS','LLM'],
            description: "BB-VLA: A Brain-Body Framework Mimicking Human Thought for Intelligent Manipulator Palletizing, 대한전자공학회, IEIE, (2025).",
            categories: ['paper']
        }
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}