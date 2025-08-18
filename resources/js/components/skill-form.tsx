import { Button } from '@/components/ui/button';
import { SkillType } from '@/types/Skill';
import { useForm, usePage } from '@inertiajs/react';
import React from 'react';

interface SkillFormProps {
    skillData?: SkillType; // kalau ada → edit
}

const SkillForm = ({ skillData }: SkillFormProps) => {

    const { data, setData, post, put, reset, errors, progress } = useForm({
        name: skillData?.name || "",
        image: null as File | null,
    })

    const { props }: any = usePage();
    const flash = props.flash;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (skillData) {
            put(route('skills.update', skillData.id), {
                preserveScroll: true,
                onSuccess: () => reset(),
                onError: error => console.error(error),
            })
        } else {
            post(route('skills.store'), {
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
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.name && <div className="text-red-500">{errors.name}</div>}
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
                            src={URL.createObjectURL(data?.image)}
                            alt="Preview"
                            className="mt-2 w-20 h-20 object-cover rounded"
                        /> : skillData?.image && (
                            <img
                                src={`/storage/${skillData.image}`}
                                alt="Old"
                                className="mt-2 w-20 h-20 object-cover rounded"
                            />
                        )}

                </div>

                {progress && (
                    <div className="mb-2">Uploading... {progress.percentage}%</div>
                )}
                <Button type="submit" className="w-50 bg-white text-black hover:bg-gray-200">
                    {skillData? "Edit": "Create"}
                </Button>
            </form>

        </div>
    )
}

export default SkillForm
