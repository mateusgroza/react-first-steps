import { Student } from '@/types/student';

type Props = {
    students: Student[];
}

export const TableData = ({students}: Props) => { 
    return (
        <table className="table-auto border-collapse border border-slate-200 w-full">
            <thead>
                <tr className="bg-slate-50 text-slate-700 font-bold">
                    <th className="p-2 border border-slate-200 text-start">User</th>
                    <th className="p-2 border border-slate-200">State</th>
                    <th className="p-2 border border-slate-200">Note 1</th>
                    <th className="p-2 border border-slate-200">Note 2</th>
                    <th className="p-2 border border-slate-200">Media</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id} className="bg-white text-slate-700 font-bold">
                        <td className="p-2 border border-slate-200">
                            <div className="flex">
                                <div className='mr-2'>
                                    <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-full" />
                                </div>
                                <div>
                                    <span className='block'>{student.name}</span>
                                    <span>{student.email}</span>
                                </div>
                            </div>
                        </td>
                        <td className="p-2 border border-slate-200 text-center">
                            {student.active 
                                ?
                                <span className="px-2 py-1 inline-block border border-slate-200 text-center bg-green-500 text-white">Ativo</span>
                                :
                                <span className="px-2 py-1 inline-block border border-slate-200 text-center bg-red-500 text-white">Inativo</span>
                            }
                            </td>
                        <td className="p-2 border border-slate-200 text-center">{student.grade1}</td>
                        <td className="p-2 border border-slate-200 text-center">{student.grade2}</td>
                        <td className="p-2 border border-slate-200 text-center">
                            { student.active == true ?
                                ((student.grade1 + student.grade2) / 2).toFixed(2) :
                                '-'
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}