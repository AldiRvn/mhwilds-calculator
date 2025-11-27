import React from "react";

export type Skills = Record<string, number>; // contoh: { "Weakness Exploit": 1 }

interface ArmorSkillsProps {
    skills?: Skills;
}

export function ShowArmorSkills({ skills }: ArmorSkillsProps) {
    return (
        <div className="grid gap-2 sm:grid-cols-3">
            {Object.entries(skills ?? {}).map(([name, level]) => (
                <label key={name} className="text-secondary">{name} [{level}]</label>
            ))}
        </div>
    );
}
