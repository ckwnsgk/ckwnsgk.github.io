$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/opensource.png',
            link: 'https://slam.gachon.ac.kr/',
            title: 'Open Source Supporters',
            technologies: ['open-source'],
            description: "Gachon University 소프트웨어 중심 대학 Open Source Supporters로써, 학교 내 오픈소스 프로젝트 홍보 및 관리를 지원하고 있습니다.",
            categories: ['activity']
        },
        {
            image: 'assets/images/robotis1.png',
            link: '',
            title: 'ROBOTIS OpenLAB',
            technologies: ['ROBOTIS','forum','networking'],
            description: "ROBOTIS OpenLAB 행사에 참여하여 네트워킹을 진행하고 사옥을 탐방해보았습니다.",
            categories: ['activity']
        },
        {
            image: 'assets/images/hy.gif',
            link: '',
            title: '코액스 Smart Tech 전시회',
            technologies: ['forum','networking'],
            description: "코액스 스마트 테크 전시회에 방문하여, 제가 연구중이던 Fully Autonomous Palletizing 에 대해 현재 기술 수준과 한계점을 파악할 수 있었습니다.",
            categories: ['activity']
        },
        {
            image: 'assets/images/drone.gif',
            link: '',
            title: '남산 드론축제',
            technologies: ['forum','networking'],
            description: "남산 드론축제에 방문하여, 대한민국 드론 액티비티를 즐기고 왔습니다.",
            categories: ['activity']
        },
        {
            image: 'assets/images/kros.png',
            link: 'https://www.notion.so/KROS-1f5f891b707680d8943ef24daa361f52?pvs=4',
            title: 'KROS 한국로봇학회',
            technologies: ['forum','networking'],
            description: "첫 학회로 참여하여, 로봇 분야 최신 연구 동향을 파악하고 많은 기업관계자 분들을 뵙고 좋은 경험을 할 수 있었습니다.",
            categories: ['activity']
        },
        {
            image: 'assets/images/arkr.png',
            link: '--',
            title: 'AIKR ',
            technologies: ['AIKR','forum','networking'],
            description: "로봇계 대가이신 연사님들의 강연을 듣고, 인사이트를 얻는 좋은 기회였습니다.[연사님들의 연구자산이므로, 비공개 처리 하였습니다.]",
            categories: ['activity']
        },
        {
            image: 'assets/images/movella.png',
            link: 'https://www.notion.so/Movella-Dot-IMU-Sensor-Ros-Driver-b98ea440020b414891fd71aeaca2237b',
            title: '국립재활원 과제',
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
            categories: ['robotics_project','featured']
        },
        {
            image: 'assets/images/kiroplatform.jpeg',
            link: '--',
            title: '2024-국방로봇경진대회',
            technologies: ['ROS','Robotics','moveit','YOLO'],
            description: "Participated in the multifunction autonomous driving vehicle competition organized by the Army.",
            categories: ['challenge','featured']
        },
        {
            image: 'assets/images/kiroplatform.jpeg',
            link: '--',
            title: '드론봇 대회 챌린지',
            technologies: ['ROS','Robotics','moveit','YOLO'],
            description: "Participated in the multifunction autonomous driving vehicle competition organized by the Army.",
            categories: ['challenge','featured']
        },
        {
            image: 'assets/images/kiroplatform.jpeg',
            link: '--',
            title: '창업해 春, 해커톤 대회',
            technologies: ['ROS','Robotics','moveit','YOLO'],
            description: "Participated in the multifunction autonomous driving vehicle competition organized by the Army.",
            categories: ['challenge','featured']
        },
        {
            image: 'assets/images/kiroplatform.jpeg',
            link: '--',
            title: '자랑스러운 가천인상',
            technologies: ['ROS','Robotics','moveit','YOLO'],
            description: "Participated in the multifunction autonomous driving vehicle competition organized by the Army.",
            categories: ['challenge','featured']
        },
        {
            image: 'assets/images/bbvla.png',
            link: 'https://www.notion.so/Demo_BB-vla-1f5f891b7076809b9f99c5a156042136?pvs=4',
            title: 'BB-VLA, 대한전자공학회, IEIE, (2025).',
            technologies: ['VLA','ROS','LLM'],
            description: "BB-VLA: A Brain-Body Framework Mimicking Human Thought for Intelligent Manipulator Palletizing",
            categories: ['paper','featured']
        },
        {
            image: 'assets/images/batender.gif',
            link: 'https://www.notion.so/DEMO_Custom_WidowX-1f5f891b707680b58910c182580e0d45',
            title: 'Customized widowX 250s',
            technologies: ['robotics'],
            description: "Assembled the WidowX robotic arm and customized the bartender example.",
            categories: ['project', 'robotics_project']
        },
        {
            image: 'assets/images/omx.gif',
            link: 'https://www.notion.so/DEMO_7Dof_OMX-control-1f5f891b707680f4b196e16a47efd57f',
            title: 'Customized OMX-7DOF',
            technologies: ['robotics'],
            description: "Assembled the OMX 7DoF and playing with the MoveIt controller.",
            categories: ['project', 'robotics_project']
        }
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    
    // Add a fallback message if no projects are found
    if (projects.length === 0) {
        projects = ['<div class="no-projects-message" style="text-align: center; padding: 30px; width: 100%;"><p class="paragraph-text">No projects found in this category.</p></div>'];
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