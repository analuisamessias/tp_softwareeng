'use client';
import { useParams } from 'next/navigation';
import { EditDiscipline } from '../../../../templates/EditDiscipline/EditDiscipline';

export default function EditDisciplinePage() {
    const params = useParams();
    const id = params.id as string;

    return <EditDiscipline id={id} />;
}