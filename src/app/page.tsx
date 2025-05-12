import { TableData } from '@/components/tableData';
import { studentsList } from '@/data/studentsList';

function Page() {
    return (
        <div className="h-screen w-screen flex items-center justify-center px-10 flex-col">
            <h1 className="text-3xl font-bold mb-3">Students List</h1>
            <TableData students={studentsList} />
        </div>
    );
}

export default Page;