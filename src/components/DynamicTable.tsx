import { Plus, Trash2 } from "lucide-react";

// Dynamic Table Component
interface Column {
    key: string;
    label: string;
    placeholder: string;
}

export const DynamicTable: React.FC<{
    data: Record<string, any>[];
    onUpdate: (updater: (prev: Record<string, any>[]) => Record<string, any>[]) => void;
    columns: Column[];
}> = ({ data: tableData, onUpdate, columns }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-800">
                        {columns.map((col, idx) => (
                            <th
                                key={idx}
                                className="border border-gray-600 p-2 text-left font-medium text-gray-200"
                            >
                                {col.label}
                            </th>
                        ))}
                        <th className="border border-gray-600 p-2 w-20 text-gray-200">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                            {columns.map((col, colIdx) => (
                                <td key={colIdx} className="border border-gray-300 p-2">
                                    <input
                                        type="text"
                                        value={row[col.key] || ''}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            onUpdate((prev) => {
                                                const newData = [...prev];
                                                newData[rowIdx] = { ...newData[rowIdx], [col.key]: value };
                                                return newData;
                                            });
                                        }}
                                        placeholder={col.placeholder}
                                        className="w-full p-1 text-sm"
                                    />
                                </td>
                            ))}
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() =>
                                        onUpdate((prev) => {
                                            const newData = [...prev];
                                            newData.splice(rowIdx, 1);
                                            return newData;
                                        })
                                    }
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={() =>
                    onUpdate((prev) => {
                        const newRow: Record<string, string> = {};
                        columns.forEach((col) => (newRow[col.key] = ''));
                        return [...prev, newRow];
                    })
                }
                className="mt-2 flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
                <Plus size={16} /> Add Row
            </button>
        </div>
    );
};
