import ProjectForm from '@/components/project-form';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { ProjectType } from '@/types/Project';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit Project',
        href: '/edit-project',
    },
];

const EditProject = ({project}:{project: ProjectType}) => {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Skill" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <ProjectForm projectData={project}  />
            </div >
        </AppLayout >
    )
}

export default EditProject;

