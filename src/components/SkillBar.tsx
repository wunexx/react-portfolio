interface SkillBarProps{
    skill: string;
    level: number;
}

export default function SkillBar({skill, level}: SkillBarProps)
{
    return (
        <div className="skill-bar">
            <span className="skill-label">{skill} - {level}%</span>
            <div className="skill-background">
                <div className="skill-fill" style={{width: `${level}%`}}></div>
            </div>
        </div>
    )
}