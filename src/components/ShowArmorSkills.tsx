import React from "react";

export type Skills = Record<string, number>; // contoh: { "Weakness Exploit": 1 }

interface ArmorSkillsProps {
    skills?: Skills;
    isWeapon?: boolean;
}

export function ShowArmorSkills({ skills, isWeapon }: ArmorSkillsProps) {
    let cols = 3
    if (isWeapon) {
        cols = 2
    }
    return (
        <div className={`grid gap-2 sm:grid-cols-${cols}`}>
            {Object.entries(skills ?? {}).map(([name, level]) => (
                <label key={name} className="text-secondary">{name} [{level}]</label>
            ))}
        </div>
    );
}
