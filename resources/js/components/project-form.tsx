import { Button } from '@/components/ui/button';
import { ProjectType } from '@/types/Project';
import { SkillType } from '@/types/Skill';
import { useForm, usePage } from '@inertiajs/react';
import React from 'react';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';

interface ProjectFormProps {
    projectData?: ProjectType; // kalau ada → edit
}

const ProjectForm = ({ projectData }: ProjectFormProps) => {

    const { data, setData, post, put, reset, errors, progress } = useForm({
        title: projectData?.title || "",
        description: projectData?.description || "",
        url: projectData?.url || "",
        stack: projectData?.stack || [""],
        image: null as File | null,
    })

    const { props }: any = usePage();
    const flash = props.flash;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (projectData) {

            put(route('projects.update', projectData.id), {
                preserveScroll: true,
                onSuccess: () => reset(),
                onError: error => console.error(error),
            })
        } else {
            post(route('projects.store'), {
                preserveScroll: true,
                onSuccess: () => reset(),
                onError: error => console.error(error),
            })
        }

    }
    return (
        <div className="bg-[#171717] p-2">
            {/* Flash Message */}
            {flash.success && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                    {flash.success}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">Title</label>
                    <Input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.title && <div className="text-red-500">{errors.title}</div>}
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Description</label>
                    <Textarea
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.title && <div className="text-red-500">{errors.title}</div>}
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Url</label>
                    <Input
                        type="text"
                        value={data.url}
                        onChange={(e) => setData("url", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.url && <div className="text-red-500">{errors.url}</div>}
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Stack</label>
                    {data.stack.map((stackItem, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <Input
                                type="text"
                                value={stackItem}
                                onChange={(e) => {
                                    const newStack = [...data.stack];
                                    newStack[index] = e.target.value;
                                    setData("stack", newStack);
                                }}
                                className="flex-1 p-2 border rounded"
                                placeholder="e.g. React"
                            />
                            <button
                                type="button"
                                className="px-3 py-1 bg-red-500 text-white rounded"
                                onClick={() => {
                                    const newStack = data.stack.filter((_, i) => i !== index);
                                    setData("stack", newStack.length ? newStack : [""]);
                                }}
                                disabled={data.stack.length === 1} // biar minimal ada 1 field
                            >
                                -
                            </button>
                            <button
                                type="button"
                                className="px-3 py-1 bg-green-500 text-white rounded"
                                onClick={() => setData("stack", [...data.stack, ""])}
                            >
                                +
                            </button>
                        </div>
                    ))}
                    {errors.stack && <div className="text-red-500">{errors.stack}</div>}
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Image</label>
                    <input
                        type="file"
                        onChange={(e) =>
                            setData("image", e.target.files ? e.target.files[0] : null)
                        }
                        className="border p-2 w-full"
                    />
                    {errors.image && <div className="text-red-500">{errors.image}</div>}
                </div>

                <div className='m-3'>

                    {data.image instanceof File ?
                        <img
                            src={URL.createObjectURL(data.image)}
                            alt="Preview"
                            className="mt-2 w-20 h-20 object-cover rounded"
                        /> : projectData?.image && (
                            <img
                                src={`/storage/${projectData.image}`}
                                alt="Old"
                                className="mt-2 w-20 h-20 object-cover rounded"
                            />
                        )}

                </div>

                {progress && (
                    <div className="mb-2">Uploading... {progress.percentage}%</div>
                )}
                <Button type="submit" className="w-50 bg-white text-black hover:bg-gray-200">
                    {projectData? "Edit": "Create"}
                </Button>
            </form>

        </div>
    )
}

export default ProjectForm

