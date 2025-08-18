import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { SkillType } from '@/types/Skill';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Skills',
        href: '/skills',
    },
];

const Skill = ({ skills }: { skills: SkillType[] }) => {
    const { props }: any = usePage();
    const flash = props.flash;

    const { delete: destroy } = useForm({})

    const handleDelete = (id: number) => {
        if (confirm("Are you sure want to delete this skill?")) {
            destroy(route('skills.destroy', id))
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Skill" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <Link href={route('skills.create')} type="button" className="text-white text-center w-30 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</Link>
                <div className="bg-[#171717] p-2">
                    <table className="table-auto w-full border-collapse border border-gray-500">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-10">No</th>
                                <th className="border border-gray-300 px-10">Name</th>
                                <th className="border border-gray-300 px-10">Image</th>
                                <th className="border border-gray-300 px-10">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skills?.map((skill, index) =>
                                <tr className="text-center" key={index}>
                                    <td className="border border-gray-300 px-10">{index + 1}</td>
                                    <td className="border border-gray-300 px-10">{skill.name}</td>
                                    <td className="border border-gray-300 px-10">
                                        <img className="object-center w-10 mx-auto my-3" src={`storage/${skill.image}`} alt="" />
                                    </td>
                                    <td className="border border-gray-300 px-10">
                                        <Link href={route('skills.edit', skill.id)} className="focus:outline-none w-22 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:focus:ring-yellow-900">
                                            Edit
                                        </Link>

                                        <button onClick={() => handleDelete(skill.id)} type="button" className="focus:outline-none w-22 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    )
}

export default Skill;

