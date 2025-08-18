import SkillForm from '@/components/skill-form';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { SkillType } from '@/types/Skill';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit Skill',
        href: '/edit-skill',
    },
];

const EditSkill = ({skill}:{skill: SkillType}) => {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Skill" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <SkillForm skillData={skill}  />
            </div >
        </AppLayout >
    )
}

export default EditSkill;
