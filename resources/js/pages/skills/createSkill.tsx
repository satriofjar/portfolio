import SkillForm from '@/components/skill-form';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Skill',
        href: '/create-skill',
    },
];

const CreateSkill = () => {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Skill" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <SkillForm />
            </div >
        </AppLayout >
    )
}

export default CreateSkill;
