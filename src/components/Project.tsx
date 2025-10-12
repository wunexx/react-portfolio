import type { IconType } from "react-icons";

interface ProjectLink
{
    label: string;
    url: string;
    icon?: IconType;
}

interface ProjectProps
{
    image: string;
    name: string;
    desc: string;
    links: ProjectLink[];
    
}

export default function Project( {image, name, desc, links}: ProjectProps )
{
    return(
    <>
        <div className="project-card">
            <img src={image} className="project-image" alt="project image" />
            <div className="project-content">
                <h2>{name}</h2>
                <h4>{desc}</h4>
                <div className="project-link-container">
                    {links.map((link, index) => {
                        const Icon = link.icon;
                        return (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {Icon && <Icon className="icon" />}
                            {link.label}
                        </a>
                        );
                    })}
                </div>
            </div>
        </div>
    </>
    )

}