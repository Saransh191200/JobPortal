const companies=["Google","Amazon","Figma","Netflix","Meta","Microsoft","Pinterest","Slack","Spotify","Oracle","Walmart"];
const jobCategory=[
    {name:"Finance",desc:"Manage financial records and transactions",jobs:"7k"},
    {name:"Human Resource",desc:"Recruit,manage and support company employees",jobs:"10k"},
    {name:"Digital Marketing",desc:"Promote brands online with marketing strategies",jobs:"1k"},
    {name:"Arts & Design",desc:"Create visual content for Branding and media",jobs:"5k"},
    {name:"Web Developer",desc:"Build and maintain website for Clients",jobs:"12k"},
    {name:"UI-UX Designer",desc:"Design User inteface and enhance User experience",jobs:"3k"},
    {name:"Content Writing",desc:"Write and edit Content for various Platforms",jobs:"4k"},
    {name:"Sales",desc:"Sells products and services to customers",jobs:"5.5k"},
    {name:"Data Entry",desc:"Input Data into system accurately and efficiently",jobs:"7lk"},
]
const work=[
    {name:"Build your resume",desc:"Create a standout resume with your skill."},
    {name:"Apply for job",desc:"Find and apply for jobs that match your skill."},
    {name:"Get hired",desc:"Connect with employers and start your new job."}
]
const testimonials=[
    {
        name:"Dia Jain",
        testimonial:"This job portal made job search easy and quick. Recommended to all Job seekers!",
        rating:5,
        avt:"avatar1.png"
    },
    {
        name:" Sushant Dhruv",
        testimonial:"I am a Bihari , I dont know any thing about technology but in my opinior ITzz Jhakaaas",
        rating:5,
        avt:"avatar-9.png"
    },
    {
        name:"Suryansh Shahi",
        testimonial:"Found my dream Job within a week! The application was smooth.",
        rating:4.5,
        avt:"avatar-9.png"
    },
    {
        name:"Angel Phutela",
        testimonial:"Its amazing , I found it better than other services like Naukri.",
        rating:3.5,
        avt:"avatar2.png"
    }
]

const footerlinks=[
    {title:"Product",link:["Find Job","Find Company","Find Employee"]},
    {title:"Company",link:["About us","Contact us","Privacy Policy","Terms & Condition"]},
    {title:"Support",link:["Help & Support", "Feedback", "FAQs"]}
]
export default companies;
export { jobCategory };
export {work};
export { testimonials };
export {footerlinks};
